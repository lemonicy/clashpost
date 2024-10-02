import fs from "fs";

// 读取文件，获取作者列表
function getAuthorListFromFile(file) {
    try {
        const data = fs.readFileSync(file, "utf-8");
        const allLines = data.split("\n");
        let authorList = [];
        for (let i = 0; i < allLines.length; i++) {
            const currentLine = allLines[i];
            const authorLineRegex = /(.*)\"(.*)\"\: \{(.*)/;
            if (authorLineRegex.test(currentLine)) {
                const authorId = currentLine.replace(authorLineRegex, "$2");
                authorList.push(authorId);
            }
        }
        return authorList;
    } catch (err) {
        console.error(err);
        return null;
    }
}

const file = "docs/.vitepress/theme/assets/posts/author.js";
const authorList = getAuthorListFromFile(file);
let paramsList = [];
for (const key of Object.keys(authorList)) {
    const authorId = authorList[key];
    paramsList.push({ params: { author: authorId }});
}

export default {
    paths() {
        return paramsList;
    }
}