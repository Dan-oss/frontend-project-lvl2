#!/usr/bin/env node

import * as fs from 'fs';
import _ from "lodash";

const fileData = (path) => {
    const data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data)
};

const difference = (obj1, obj2) => {
    const keys = (_.union(_.keys(obj1), _.keys(obj2))).sort();
    const result = [];
    let combiningIndex = ''
    for (const key of keys) {
        if (!_.has(obj1, key)) {
            combiningIndex = '+'
            result.push(`${combiningIndex}${key}: ${obj2[key]}`)
        }
        if (!_.has(obj2, key)) {
            combiningIndex = '-'
            result.push(`${combiningIndex}${key}: ${obj1[key]}`)
        }
        if (obj1[key] === obj2[key]) {
            combiningIndex = ' '
            result.push(`${combiningIndex}${key}: ${obj1[key]}`)
        }
        if (_.has(obj1, key) && _.has(obj2, key) && obj1[key] !== obj2[key]) {
            combiningIndex = '-'
            result.push(`${combiningIndex}${key}: ${obj1[key]}`)
            combiningIndex = '+'
            result.push(`${combiningIndex}${key}: ${obj2[key]}`)
        }
    }
    return `{ \n  ${result.join('\n  ')} \n}`;
}

const pathProcessing = (path) => {
    const newPath = process.cwd(path);
    return path
}

const comparison = (path1, path2) => {
    const file1 = fileData(path1);
    const file2 = fileData(path2);
    return difference(file1, file2);
};

export default comparison;

