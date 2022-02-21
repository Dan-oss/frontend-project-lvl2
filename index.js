#!/usr/bin/env node

import _ from "lodash";
const file1 = {
    "host": "hexlet.io",
    "timeout": 50,
    "proxy": "123.234.53.22",
    "follow": false
};

const file2 = {
    "timeout": 20,
    "verbose": true,
    "host": "hexlet.io"
};

const genDiff = (obj1, obj2) => {

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

console.log(genDiff(file1, file2))

