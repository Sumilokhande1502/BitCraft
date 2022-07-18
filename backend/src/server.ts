import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import route from './cricket-data/cricket-data.routes';
import mongoose from 'mongoose';

import df from "./default/default";

const app = express();

// app.use(express.json());
const port = 3000;
const uri = df.uri as string;
app.set('port', port);

// app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(bodyParser.json());
app.use("/api", route);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

function mongoSetup() {
  // mongoose.Promise = global.Promise;
  mongoose.connect(uri);
  const db = mongoose.connection
  db.on('error', (err) => {
      console.log("Error while connecting DB", err);
  })
  db.once('open', () => {
      console.log("DB Connected!!!");
  })
}

async function bootstrap() {
  const PORT = 3000;
  const HOST = 'localhost';
  console.log(`Server is running at http://${HOST}:${PORT}`);
  
  app.listen(PORT);
  mongoSetup()
}

bootstrap();



