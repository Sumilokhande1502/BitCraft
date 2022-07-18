import { Express, Request, Response, NextFunction } from "express";
import cricketData from "./cricket-data.schema";

async function getMatchData(req: Request, res: Response) {
  cricketData.find((err: any, data: any) => {
    if(err){
      console.log(err);
      res.send(err.message);
    }else if(data) {
        res.status(200).send(data);
        //return ({res: Array})
      } else {
        res.status(400).send("No data Found");
      }    
  });
}

async function addCricketData(req: Request, res: Response) {
  const newData = new cricketData({
    meta:req.body.meta,
    info: req.body.info,
    innings: req.body.innings,
  });
  cricketData.findOne({
    meta:req.body.meta,
    info: req.body.info,
    innings: req.body.innings,
  }, 
  async (err: any, data: any) => {
    if(err){
      console.log(err);
      res.send(err.message);
    }else if(data) {
        res.status(200).send(data);
        //return ({res: Array})
      } else {
        const dataInfo = await newData.save();
        res.status(200).send({ msg: "Data successfully added", dataInfo });
      }    
  });
}


export default {
  getMatchData,
  addCricketData
};