'use strict';

const config   = require(__dirname + '/config');
const importer = require('anytv-node-importer');
const upload   = require('multer')({dest: config.UPLOAD_DIR});

module.exports = (router) => {
    const __ = importer.dirloadSync(__dirname + '/../controllers');

    router.del = router.delete;

    router.get('/campus', __.campus.get_campuses);
    router.get('/campus/passers', __.campus.get_passers_per_campus);

    router.get('/course', __.course.get_courses);
    router.get('/course/passers', __.course.get_passers_per_course);
    router.get('/course/passers/:campus', __.course.get_course_passers_per_campus);

    router.all('*', (req, res) => {
        res.status(404)
            .send({message: 'Nothing to do here.'});
    });

    return router;
};

