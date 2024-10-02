import fs from "fs";

// 统计指定目录下的文件数量
function countFilesInDir(path) {
    const files = fs.readdirSync(path);
    const filteredFiles = files.filter(file => {
        const currentFile = path + "/" + file;
        const isMdFile = file.endsWith(".md");
        return fs.statSync(currentFile).isFile() && isMdFile;
    });
    return filteredFiles.length;
}

const dirPath = 'docs/p/';
const fileCount = countFilesInDir(dirPath);
const maxPage = Math.ceil(fileCount / 20);
const params = [];
for (let i = 2; i <= maxPage; i++) {
    const param = { params: { page: i }};
    params.push(param);
}

export default {
    paths() {
        return params;
    }
}