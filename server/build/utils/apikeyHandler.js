"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keyHandler = (_req, res) => {
    const status = res.statusCode;
    if (status === 402) {
        console.log('Apikey exhausted, changhing api keys!');
    }
};
exports.default = keyHandler;
