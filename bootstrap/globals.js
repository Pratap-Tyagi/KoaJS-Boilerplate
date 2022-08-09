'use strict';
//********* Global Database Client ************//
global.db = require('./lib/mysql').query;

// //********* Global MongoDB Client ************//
// global.MongoClient = require('mongodb').MongoClient;
// global.Binary = require('mongodb').Binary;
// global.ObjectID = require('mongodb').ObjectID;

//********* Global Error Handler ************//
global.error = function(type, message, code, fields){
    var err;

    console.log(type, message, code, fields);

    err = (type !== 'undefined')? new global[type] : new GenericError;

    if(message) err.message = message;
    if(code && typeof code === 'number') err.code = code;

    if(fields && typeof fields === 'object'){
        for (var key in fields){
            if (fields.hasOwnProperty(key)) {
                err[key] = fields[key];
            }
        }
    }

    throw err;
};

//********* Global Joi Object ************//
global.Joi = require('joi');
