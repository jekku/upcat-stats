'use strict';

const config = require(__dirname + './../config/config');
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

        res.items(courses).send();
    }

    Course.get_courses(send_response);
};



exports.get_passers_per_course = (req, res, next) => {

    function send_response (err, result) {
        if (err) {
            return next(err);
        }

        res.items(result).send();
    }

    Course.get_passers_per_course(send_response);
};



exports.get_course_passers_per_campus = (req, res, next) => {
    const campus = config.CAMPUS_HASH[req.params.campus];

    function start () {
        if (!campus) {
            return res.error({
                code: "ERR_NO_SUCH_CAMPUS",
                message: "No such campus code"
            }).warn();
        }

        Course.get_course_passers_per_campus(campus, send_response);
    }

    function send_response (err, result) {
       if (err) {
          return next(err);
       }

       res.data({campus: campus}).items(result).send();
    }

    start();

};

