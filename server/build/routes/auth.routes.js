"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controllers_1 = require("../controllers/auth.controllers");
const passport_1 = __importDefault(require("passport"));
const router = express_1.default.Router();
router.post('/register', auth_controllers_1.register);
router.post('/login', auth_controllers_1.login);
router.post('/logout', passport_1.default.authenticate('jwt', { session: false }), auth_controllers_1.logout);
exports.default = router;