'use strict';
const YourModel = require('../models/YourModel');


exports.yourApi = async function(ctx){

  const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    birth_year: Joi.number()
        .integer()
        .min(1900)
        .max(2013),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  });

  const { error, value } = schema.validate(ctx.request.body);
  const validation = schema.validate(ctx.request.body);
  
    if(validation.error){
      error('ValidationError', `There were errors in validation. ${validation.error.details[0].message.replaceAll('\"', '')}.`);
    }


  const params = {
    username: ctx.request.body.username,
    password: ctx.request.body.password || "Default Value 1",
    birth_year: ctx.request.body.birth_year || "Default Value 2",
    email: ctx.request.body.email || "Default Value 3"
      }

  ctx.response.body = await YourModel.getInstance().yourApi(params);
};