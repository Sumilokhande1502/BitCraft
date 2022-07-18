"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cricket_data_controller_1 = require("./cricket-data.controller");
var router = express.Router();
router.get('/getCricketData', cricket_data_controller_1.default.getMatchData);
router.post('/addCricketData', cricket_data_controller_1.default.addCricketData);
exports.default = router;
//# sourceMappingURL=cricket-data.routes.js.map