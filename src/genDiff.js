#!/usr/bin/env node

import * as fs from 'fs';

const a = fs.readFile('../file1.json') {
    console.log(file1);
}

const differences = (file1, file2) => {

//}
//export default  differences();
// import * as fs from 'fs';
// import path from 'path';
// import compareData from './compareData.js';
// import formatterChooser from './formatters/index.js';
// import parse from './parsers.js';
//
// export default (path1, path2, format = 'stylish') => {
//     const readFile = (pathToFile) => {
//         const workingDir = process.cwd();
//         const fileData = fs.readFileSync(path.resolve(workingDir, pathToFile), 'utf-8');
//         const extension = path.extname(pathToFile).slice(1);
//         //return parse(fileData, extension);
//     };
//     const data1 = readFile(path1);
//     const data2 = readFile(path2);
//
//     return formatterChooser(compareData(data1, data2), format);
// };
