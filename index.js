'use strict';

var qs = require('qs');

var parse = require('yc-parseurl');


module.exports = function query(){
    return function(req, res, next){

        if (!req.query) {
            req.query = ~req.url.indexOf('?') ? qs.parse(parse(req).query, options) : {};
        }

        next();    
    };
};

