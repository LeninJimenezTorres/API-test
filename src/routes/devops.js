const router = require('express').Router();
const express = require('express');
const http = require('http');
require('dotenv').config();

const cors=require('cors');
const path=require('path');
const { json, urlencoded } = express;
const jwt = require('jsonwebtoken');


router.post('/',(req, res) => {
    const accessToken = req.header('GeneratedToken');
           
    jwt.verify(accessToken, process.env.SECRET, (err,llave)=>{
        if(err){
            res.send('Access denied, token expired or incorrect, or wrong key');
        }       
        else{
            let name = req.body.to;
            if(name){
                msg={ 
                    "message":"Hello "+name+" your message will be send", 
                    description:'The process has been successful......!!!!',
                    author: 'Lenin Jimenez Torres'};
                res.status(201).json(msg);
            }
            else{
                res.send('You need to send a Json http post body request with the attribute "to"');
            }
        }
    });
});

module.exports = router;
