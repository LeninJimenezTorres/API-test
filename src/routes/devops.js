import express from 'express';
import cors from 'cors';
import path from 'path';
import { json, urlencoded } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import pkg from 'es6-request';
const { request } = pkg;
import {getJSON} from 'simple-get-json';
import fetch from "node-fetch";

//const router = express.Router();
import * as http from 'http'; 

export const router = express.Router();
router.use(express.json({type: '*/*'}));

router.post('/',(req, res) => {
    const accessToken = req.header('GeneratedToken');
           
    jwt.verify(accessToken, process.env.SECRET, (err,llave)=>{
        if(err){
            res.send('Access denied, token expired or incorrect, or wrong key');
        }       
        else{
            let name = req.body.to;
            if(name){
                res.json({"message":"Hello "+name+" your message will be send","description":'The process has been successful......!!!!',author: 'Lenin Jimenez Torres'});
            }
            else{
                res.send('You need to send a Json http post body request with the attribute "to"');
            }
        }
    });
});

//module.exports = router;
export default router;