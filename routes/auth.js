"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.post('/login', (req, res, next) => {
    res.status(200).json(req.body);
});
exports.default = router;
