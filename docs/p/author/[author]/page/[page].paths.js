import fs from "fs";

// 读取文件，获取 frontmatter 信息
function getAuthorFromFile(file) {
    try {
        const data = fs.readFileSync(file, "utf-8");
        // 由于 js 里在 for 函数中 return 只会跳出循环，不会返回函数值，而且会丢失变量值
        // 因此这里包装成一个函数更方便
        const getAuthor = data => {
            const allLines = data.split("\n");
            for (let i = 0; i < allLines.length; i++) {
                const currentLine = allLines[i];
                // 这里设置 i > 1 是防止读取到文件开头的三个横杠，导致直接结束
                if (i > 1 && currentLine === "---") {
                    console.error("未在" + file + " 的 frontmatter 中找到 author 信息。")
                    return null;
                }
                if (currentLine.indexOf("author") >= 0) {
                    return currentLine.replace("author:", "").trim();
                }
            }
        }
        return getAuthor(data).replace("authorId:", "").trim();
    } catch (err) {
        console.error(err);
        return null;
    }
}

// 统计指定目录下所有作者的文件数量
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
            const author = getAuthorFromFile(currentFile);
            let currentValue = postCount[author] ?? 0;
            postCount[author] = currentValue + 1;
        }
    });
    return postCount;
}

const dirPath = 'docs/p/';
const allAuthorPostCount = countFilesInDir(dirPath);
let params = [];
// 根据上方获取的分类写入 params
for (const [key, value] of Object.entries(allAuthorPostCount)) {
    const maxPage = Math.ceil(value / 20);
    for (i = 2; i <= maxPage; i++) {
        const param = {params: { author: key, page: i}};
        params.push(param);
    }
}

export default {
    paths() {
        return params;
    }
}