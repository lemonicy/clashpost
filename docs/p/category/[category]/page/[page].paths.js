import fs from "fs";

// 读取文件，获取 frontmatter 信息
function getModuleFromFile(file) {
    try {
        const data = fs.readFileSync(file, "utf-8");
        // 由于 js 里在 for 函数中 return 只会跳出循环，不会返回函数值，而且会丢失变量值
        // 因此这里包装成一个函数更方便
        const getModule = data => {
            const allLines = data.split("\n");
            for (let i = 0; i < allLines.length; i++) {
                const currentLine = allLines[i];
                // 这里设置 i > 1 是防止读取到文件开头的三个横杠，导致直接结束
                if (i > 1 && currentLine === "---") {
                    console.error("未在" + file + " 的 frontmatter 中找到 module 信息。")
                    return null;
                }
                if (currentLine.indexOf("module") >= 0) {
                    return currentLine.replace("module:", "").trim();
                }
            }
        }
        return getModule(data).replace("posts-", "").trim();
    } catch (err) {
        console.error(err);
        return null;
    }
}

/**
 * 通过分类的 ID 确定 index 值
 * @param {String} categoryId 分类的 ID
 */
function getCategoryIndexFromId(categoryId) {
    switch(categoryId) {
        case "starter":
            return 1;
        case "advanced":
            return 2;
        case "knowledge":
            return 3;
        case "material":
            return 4;
        case "defense":
            return 5;
        case "bh":
            return 6;
        case "capital":
            return 7;
        case "storm":
            return 8;
        case "archive":
            return 9;
        case "uncategorized":
            return 10;
        default:
            return 0;
    }
}

// 统计指定目录下所有分类的文件数量
function countFilesInDir(path) {
    const files = fs.readdirSync(path);
    let postCount = {};
    files.forEach(file => {
        const currentFile = path + file;
        const isFile = fs.statSync(currentFile).isFile();
        const isMdFile = file.endsWith(".md");

        // 如果是 markdown 文件，则进一步读取 frontmatter，看是否为指定的模块
        // 获取模块名称后，给对应模块的文章数量加 1
        if (isFile && isMdFile) {
            const module = getModuleFromFile(currentFile);
            let currentValue = postCount[module] ?? 0;
            postCount[module] = currentValue + 1;
        }
    });
    return postCount;
}

const dirPath = 'docs/p/';
const allCategoryPostCount = countFilesInDir(dirPath);
let params = [];
// 根据上方获取的分类写入 params
for (const [key, value] of Object.entries(allCategoryPostCount)) {
    const maxPage = Math.ceil(value / 20);
    const categoryIndex = getCategoryIndexFromId(key);
    for (i = 2; i <= maxPage; i++) {
        const param = {params: { category: key, page: i, categoryIndex: categoryIndex}};
        params.push(param);
    }
}

export default {
    paths() {
        return params;
    }
}