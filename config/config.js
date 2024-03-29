'use strict';

const _    = require('lodash');
const path = require('path');

const config = {
    APP_NAME: 'UPCAT Stats',

    PORT: 6969,

    CORS:  {
        allowed_headers: 'Access-Token, X-Requested-With, Content-Type, Accept',
        allowed_origins: '*',
        allowed_methods: 'GET, POST, PUT, OPTIONS, DELETE'
    },

    UPLOAD_DIR: path.normalize(__dirname + '/../uploads/'),
    ASSETS_DIR: path.normalize(__dirname + '/../assets'),
    VIEWS_DIR: path.normalize(__dirname + '/../views'),
    LOGS_DIR: path.normalize(__dirname + '/../logs'),

    CAMPUS_HASH: {
        baguio: "BAGUIO",
        cebu: "CEBU",
        diliman: "DILIMAN",
        los_banos: "LOS BAÑOS",
        manila: "MANILA",
        mindanao: "MINDANAO",
        open_u: "OPEN U",
        pampaga: "PAMPAGA",
        visayas: "VISAYAS"
    },

    use: (env) => {
        _.assign(config, require(__dirname + '/env/' + env));
        return config;
    }
};

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}

module.exports = config.use(process.env.NODE_ENV);
