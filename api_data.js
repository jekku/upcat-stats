define({ "api": [
  {
    "type": "get",
    "url": "/campus/passers",
    "title": "Request the number of passers per campus",
    "name": "GetCampusPassers",
    "group": "Campus",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>Array of JSON objects containing passers and campus code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n        {\n            \"passers\": 72,\n            \"campus\": null\n        },\n        {\n            \"passers\": 75,\n            \"campus\": \"BAGUIO\"\n        },\n        {\n            \"passers\": 4,\n            \"campus\": \"CEBU\"\n        },\n        {\n            \"passers\": 843,\n            \"campus\": \"DILIMAN\"\n        },\n        {\n            \"passers\": 263,\n            \"campus\": \"LOS BAÑOS\"\n        },\n        {\n            \"passers\": 270,\n            \"campus\": \"MANILA\"\n        },\n        {\n            \"passers\": 2,\n            \"campus\": \"MINDANAO\"\n        },\n        {\n            \"passers\": 4,\n            \"campus\": \"OPEN U\"\n        },\n        {\n            \"passers\": 22,\n            \"campus\": \"PAMPANGA\"\n        },\n        {\n            \"passers\": 3,\n            \"campus\": \"VISAYAS\"\n        }\n    ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/campus.js",
    "groupTitle": "Campus"
  },
  {
    "type": "get",
    "url": "/campus",
    "title": "Request Existing Campuses",
    "name": "GetCampuses",
    "group": "Campus",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>Campus codes of existing campuses</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n       \"DILIMAN\",\n       \"VISAYAS\",\n       \"MANILA\",\n       \"LOS BAÑOS\",\n       \"BAGUIO\",\n       \"CEBU\",\n       \"PAMPANGA\",\n       \"OPEN U\",\n       \"MINDANAO\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/campus.js",
    "groupTitle": "Campus"
  },
  {
    "type": "get",
    "url": "/course/passers/:campus",
    "title": "Request Passers Per Course Regardless of Campus",
    "name": "GetCoursePassers",
    "group": "Degree_Programs",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>Degree Program Passers per Course regardless of campus</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n        {\n            \"passers\": 72,\n            \"course\": null\n        },\n        {\n            \"passers\": 1,\n            \"course\": \"B EDUCATION STUDIES (4 YRS, TRIMESTER)\"\n        },\n        {\n            \"passers\": 14,\n            \"course\": \"B FINE ARTS\"\n        },\n        {\n            \"passers\": 1,\n            \"course\": \"B FINE ARTS (STUDIO ARTS)\"\n        },\n        {\n            \"passers\": 2,\n            \"course\": \"B LANDSCAPE ARCHITECTURE\"\n        },\n        {\n            \"passers\": 3,\n            \"course\": \"B SPORTS SCIENCE\"\n        },\n        {\n            \"passers\": 4,\n            \"course\": \"BA ANTHROPOLOGY\"\n        },\n        {\n            \"passers\": 9,\n            \"course\": \"BA APPLIED PSYCHOLOGY\"\n        },\n        {\n            \"passers\": 15,\n            \"course\": \"BA BEHAVIORAL SCIENCES\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/course.js",
    "groupTitle": "Degree_Programs"
  },
  {
    "type": "get",
    "url": "/course/passers/:campus",
    "title": "Request course passers per campus",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"baguio\"",
              "\"cebu\"",
              "\"diliman\"",
              "\"los_banos\"",
              "\"manila\"",
              "\"mindanao\"",
              "\"open_u\"",
              "\"pampanga\"",
              "\"visayas\""
            ],
            "optional": false,
            "field": "campus",
            "description": "<p>Campus Name</p>"
          }
        ]
      }
    },
    "name": "GetCoursePassersPerCampus",
    "group": "Degree_Programs",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>Returns campus' degree program passers</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        campus: \"LOS BANOS\"\n        \"items\": [\n            {\n                \"passers\": 4,\n                \"course\": \"BS COMPUTER SCIENCE\"\n            },\n            {\n                \"passers\": 5,\n                \"course\": \"BS GEOGRAPHY\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/course.js",
    "groupTitle": "Degree_Programs"
  },
  {
    "type": "get",
    "url": "/course",
    "title": "Request Existing Courses",
    "name": "GetCourses",
    "group": "Degree_Programs",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>Gets Degree Programs existing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n       \"BS COMPUTER SCIENCE\",\n       \"BS GEOGRAPHY\",\n       \"BS BIOLOGY\",\n       \"BS STATISTICS\",\n       \"BS FOOD TECHNOLOGY\",\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/course.js",
    "groupTitle": "Degree_Programs"
  }
] });
