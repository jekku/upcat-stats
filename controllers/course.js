'use strict';

const Course = require(__dirname + './../models/course');
const _      = require('lodash');



exports.get_courses = (req, res, next) => {
    let courses;

    function send_response (err, result) {
        if (err) {
            return next(err);
        }

        courses = _(result).reduce( (arr,item) => {
            arr.push(item.course);
            return arr;
        }, []);

        res.send({data: courses});
    }

    Course.get_courses(send_response);
};



exports.get_passers_per_course = (req, res, next) => {

    function send_response (err, result) {
        if (err) {
            return next(err);
        }

        res.send({data: result});
    }

    Course.get_passers_per_course(send_response);
};

