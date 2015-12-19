'use strict';

const mysql = require('anytv-node-mysql');



exports.get_courses = (callback) => {
    mysql.use('upcat')
      .query(
          "SELECT DISTINCT course FROM passers WHERE course IS NOT NULL",
          callback
      )
      .end();
};



exports.get_passers_per_course = (callback) => {
    mysql.use('upcat')
      .query(
          "SELECT count(*)'passers', course FROM passers GROUP BY course",
          callback
      )
      .end();
};



exports.get_course_passers_per_campus = (campus, callback) => {
    mysql.use('upcat')
      .query(
          "SELECT count(*)'passers', course FROM passers " +
          "WHERE campus = ? GROUP BY course",
          [campus],
          callback
      )
      .end();
};

