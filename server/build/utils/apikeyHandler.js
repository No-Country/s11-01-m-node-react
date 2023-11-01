"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KeyHandler {
    constructor() {
        this.apiKeys = [];
        if (typeof KeyHandler.instance === 'object') {
            return KeyHandler.instance;
        }
        KeyHandler.instance = this;
        this.apiKeys = [
            { key: process.env.KEY_1, usage: 0, limit: 10 },
            { key: process.env.KEY_2, usage: 0, limit: 10 },
            { key: process.env.KEY_3, usage: 0, limit: 10 },
            { key: process.env.KEY_4, usage: 0, limit: 10 },
            { key: process.env.KEY_5, usage: 0, limit: 10 },
            { key: process.env.KEY_6, usage: 0, limit: 10 },
            { key: process.env.KEY_7, usage: 0, limit: 10 },
        ];
        this.currentKey = 0;
    }
    getKey() {
        let currentKey = this.apiKeys[this.currentKey];
        if (currentKey.usage >= currentKey.limit) {
            this.currentKey = (this.currentKey + 1) % this.apiKeys.length;
            this.apiKeys[this.currentKey].usage = 0;
            currentKey = this.apiKeys[this.currentKey];
        }
        currentKey.usage++;
        return currentKey.key;
    }
}
exports.default = new KeyHandler();
