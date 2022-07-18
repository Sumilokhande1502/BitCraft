import mongoose from "mongoose";

const cricketDataSchema = new mongoose.Schema(
  {
    meta:{ type: Object },
    info: { type: Object },
    innings: { type: [Object] },
  },
);

const cricketData = mongoose.model("match_data", cricketDataSchema);
export default cricketData;
