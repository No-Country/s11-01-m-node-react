"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const passport_middleware_1 = __importDefault(require("./middlewares/passport.middleware"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: '*',
    credentials: true
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(passport_1.default.initialize());
passport_1.default.use(passport_middleware_1.default);
app.use('/v1', index_1.default);
app.use('/', (_req, res) => {
    return res.send('Hello CookMatch!');
});
app.use('*', (_req, res) => {
    return res.status(404).send('Nothing to see here :(');
});
exports.default = app;
