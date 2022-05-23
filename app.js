  
//const express = require('express');
import express from 'express';
import cors from 'cors';
import path from 'path';
import { json, urlencoded } from 'express';
import jwt from 'jsonwebtoken';
import http from 'http';


/*const cors=require('cors');
const path=require('path');
const { json, urlencoded } = express;
const jwt = require('jsonwebtoken');
require('dotenv').config();
const router = require('./src/routes/');
*/
import dotenv from 'dotenv'
dotenv.config()
/*
import route1 from './src/routes/index'
import route2 from './src/routes/devops'
app.use('/index',route1);
app.use('/DevOps',route2);
//const DevOps = require('./devops');
*/
const router = express.Router();
import DevOps from './src/routes/devops.js';
//router.use('/DevOps',DevOps);
//const app = express();
export const app = express();

app.use('/DevOps',DevOps);


const port = process.env.PORT || 8081;

const hostname = '0.0.0.0';

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const cornsOptions ={
    origin:'*',
    optionsSuccessStatus:200
}

app.use(cors(cornsOptions));

app.get('/',(req, res) => {
  msm='Description: API REST with NodeJS-Express, dockerized and CI with GitHub | Test stage <br> Usermode: Send the ApiKey to this url "/" through POST method with header "APIKey" to generate the JWT, then go to the dir /DevOps to deploy the API ';
  res.status(201).send(msm);
})

app.post('/',(req, res) => {
  const llave = req.header('APIKey');
  if (llave){
    if(llave==process.env.SECRET){
      const accessToken = jwt.sign({llave}, process.env.SECRET, {expiresIn:'15m'});
      res.header('jwt',accessToken).json({
        message:'Correct authentication',
        GeneratedToken:accessToken,
        instruction:'Copy the generated token and send it to the sub url "/DevOps" through POST method with header "GeneratedToken" ',
      });
    }
    else{
      msm='Incorrect APIKey';
      res.json({Error:'Incorrect APIKey'});
    }
  }
  else
  res.json({Error:'APIKey not entered or wrong post variable, please send it by header "APIKey"'});
})

app.listen(port, hostname, () => {
  console.log('Example app listening on port ${port}');
})

export default app;