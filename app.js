  
const express = require('express');
const cors=require('cors');
const path=require('path');
const { json, urlencoded } = express;
const jwt = require('jsonwebtoken');
require('dotenv').config();


const router = require('./src/routes/');

const app = express();

const port = process.env.PORT || 8080;

const hostname = '0.0.0.0';

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const cornsOptions ={
    origin:'*',
    optionsSuccessStatus:200
}

app.use(cors(cornsOptions));

app.use(router);

app.get('/',(req, res) => {
  msm='Description: API REST with NodeJS-Express, dockerized and CI with GitHub | Test stage <br> Usermode: Send the ApiKey to this url "/" through POST method with header "APIKey" to generate the JWT, then go to the dir /DevOps to deploy the API ';
  res.send(msm);
})

app.post('/',(req, res) => {
  const llave = req.header('APIKey');
  if (llave){
    if(llave==process.env.SECRET){
      const accessToken = jwt.sign({llave}, process.env.SECRET, {expiresIn:'5m'});
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

function validateToken(req,res,next){
  const llave = req.header('APIKey');
  if (llave){
    //res.json({Key:llave});
    if(llave=='2f5ae96c-b558-4c7b-a590-a501ae1c3f6c'){
      //res.send('Correct APIKey');
      next();
    }
    else{
      msm='Incorrect APIKey';
      res.json({Error:'Incorrect APIKey'});
    }
  }
  else
  res.json({Error:'APIKey not entered or wrong post variable, please send it by header "APIKey"'});
}


app.listen(port, hostname, () => {
  console.log('Example app listening on port ${port}');
})
