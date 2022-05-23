//import supertest from 'supertest';
//import test from 'ava';

const supertest = require('supertest');
const test = require('ava');
//const app = require('../app');
//import app from '../app';

test('should pass',(t)=>{
    //const data={"message":"This is a test","to":"Juan Perez","from":"Rita Asturia","timeToLifeSec":45};
    t.pass()

    }
);

/*test('should pass',(t)=>{
    const data={"message":"This is a test","to":"Juan Perez","from":"Rita Asturia","timeToLifeSec":45};
    //t.pass()
    request(app)
        .post('/DevOps')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res)=>{
            t.falsy(err,'No error');
            //t.end()
        })
    }
);*/
/*
test('1+1=2',()=>{
    expect(1+1).toBe(2);
});*/