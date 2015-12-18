'use strict';

const mysql = require('anytv-node-mysql');



exports.get_campuses = (callback) => {
    mysql.use('upcat')
      .query(
          "SELECT DISTINCT campus FROM passers WHERE campus IS NOT NULL",
          callback
      )
      .end();
};



exports.get_passers_per_campus = (callback) => {
    mysql.use('upcat')
      .query(
          "SELECT COUNT(*)'passers', campus FROM passers GROUP BY campus",
          callback
      )
      .end();
};

