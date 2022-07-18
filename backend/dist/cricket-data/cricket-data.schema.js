"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var cricketDataSchema = new mongoose_1.default.Schema({
    meta: { type: Object },
    info: { type: Object },
    innings: { type: [Object] },
});
var cricketData = mongoose_1.default.model("match_data", cricketDataSchema);
exports.default = cricketData;
//# sourceMappingURL=cricket-data.schema.js.map