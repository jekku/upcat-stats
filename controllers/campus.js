'use strict';

const Campus = require(__dirname + './../models/campus');
const _      = require('lodash');

/**
 * @api {get} /campus Request Existing Campuses
 * @apiName GetCampuses
 * @apiGroup Campus
 * @apiVersion 0.0.1
 * @apiSuccess {Array} data Campus codes of existing campuses
 * @apiSuccessExample {json} Success-Response:
 *   {
 *       "data": [
 *          "DILIMAN",
 *          "VISAYAS",
 *          "MANILA",
 *          "LOS BAÑOS",
 *          "BAGUIO",
 *          "CEBU",
 *          "PAMPANGA",
 *          "OPEN U",
 *          "MINDANAO"
 *     ]
 *   }
 */

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

        res.items(campuses).send();
    }

    Campus.get_campuses(send_response);
};

/**
 * @api {get} /campus/passers Request the number of passers per campus
 * @apiName GetCampusPassers
 * @apiGroup Campus
 * @apiVersion 0.0.1
 * @apiSuccess {Array} data Array of JSON objects containing passers and campus code
 * @apiSuccessExample {json} Success-Response:
 * {
    "data": [
        {
            "passers": 72,
            "campus": null
        },
        {
            "passers": 75,
            "campus": "BAGUIO"
        },
        {
            "passers": 4,
            "campus": "CEBU"
        },
        {
            "passers": 843,
            "campus": "DILIMAN"
        },
        {
            "passers": 263,
            "campus": "LOS BAÑOS"
        },
        {
            "passers": 270,
            "campus": "MANILA"
        },
        {
            "passers": 2,
            "campus": "MINDANAO"
        },
        {
            "passers": 4,
            "campus": "OPEN U"
        },
        {
            "passers": 22,
            "campus": "PAMPANGA"
        },
        {
            "passers": 3,
            "campus": "VISAYAS"
        }
    ]
  }
*/



exports.get_passers_per_campus = (req, res, next) => {

    function send_response (err, result) {
        if (err) {
            return next(err);
        }

        res.items(result).send();
    }

    Campus.get_passers_per_campus(send_response);
};

