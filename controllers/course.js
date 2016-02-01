'use strict';

const config = require(__dirname + './../config/config');
const Course = require(__dirname + './../models/course');
const _      = require('lodash');

/**
 * @api {get} /course Request Existing Courses
 * @apiName GetCourses
 * @apiGroup Degree Programs
 * @apiVersion 0.0.1
 * @apiSuccess {Array} data Gets Degree Programs existing
 * @apiSuccessExample {json} Success-Response:
 *   {
 *       "data": [
 *          "BS COMPUTER SCIENCE",
 *          "BS GEOGRAPHY",
 *          "BS BIOLOGY",
 *          "BS STATISTICS",
 *          "BS FOOD TECHNOLOGY",
 *     ]
 *   }
 */

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

/**
 * @api {get} /course/passers/:campus Request Passers Per Course Regardless of Campus
 * @apiName GetCoursePassers
 * @apiGroup Degree Programs
 * @apiVersion 0.0.1
 * @apiSuccess {json} data Degree Program Passers per Course regardless of campus
 * @apiSuccessExample {json} Success-Response:
{
    "data": [
        {
            "passers": 72,
            "course": null
        },
        {
            "passers": 1,
            "course": "B EDUCATION STUDIES (4 YRS, TRIMESTER)"
        },
        {
            "passers": 14,
            "course": "B FINE ARTS"
        },
        {
            "passers": 1,
            "course": "B FINE ARTS (STUDIO ARTS)"
        },
        {
            "passers": 2,
            "course": "B LANDSCAPE ARCHITECTURE"
        },
        {
            "passers": 3,
            "course": "B SPORTS SCIENCE"
        },
        {
            "passers": 4,
            "course": "BA ANTHROPOLOGY"
        },
        {
            "passers": 9,
            "course": "BA APPLIED PSYCHOLOGY"
        },
        {
            "passers": 15,
            "course": "BA BEHAVIORAL SCIENCES"
        }
    ]
}
*/

exports.get_passers_per_course = (req, res, next) => {

    function send_response (err, result) {
        if (err) {
            return next(err);
        }

        res.items(result).send();
    }

    Course.get_passers_per_course(send_response);
};

/**
 * @api {get} /course/passers/:campus Request course passers per campus
 * @apiParam {String="baguio","cebu", "diliman", "los_banos", "manila", "mindanao", "open_u", "pampanga", "visayas"} campus Campus Name
 * @apiName GetCoursePassersPerCampus
 * @apiGroup Degree Programs
 * @apiVersion 0.0.1
 * @apiSuccess {json} data Returns campus' degree program passers
 * @apiSuccessExample {json} Success-Response:
{
    "data": {
        campus: "LOS BANOS"
        "items": [
            {
                "passers": 4,
                "course": "BS COMPUTER SCIENCE"
            },
            {
                "passers": 5,
                "course": "BS GEOGRAPHY"
            }
        ]
    }
}
 */



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

