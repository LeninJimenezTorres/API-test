//import test from "ava";
//import { request, response } from "express";
import supertest from "supertest";
import app from '../app';
const api=supertest(app);

/*import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";

const client = jwksClient({
  jwksUri: "http://localhost:8081/",
});
*/
test('test', async()=>{
    const response = api.get('/').send();
    console.log(response);
    /*api
        .get('/')
        .expect(201)'*/
});
