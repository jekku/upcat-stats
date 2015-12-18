'use strict';

const Campus = require(__dirname + './../models/campus');
const _      = require('lodash');



exports.get_campuses = (req, res, next) => {
    let campuses;

    function send_response (err, result) {
        if (err) {
            return next(err);
        }

        campuses = _(result).reduce( (arr, item) => {
            arr.push(item.campus);
            return arr;
        }, []);

        res.send({data: campuses});
    }

    Campus.get_campuses(send_response);
};



exports.get_passers_per_campus = (req, res, next) => {

    function send_response (err, result) {
        if (err) {
            return next(err);
        }

        res.send({data: result});
    }

    Campus.get_passers_per_campus(send_response);
};

