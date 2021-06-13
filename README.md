sofa-data-studio
===

Abstract:
---


**Sofa Data Studio** is a project developed for node.js, using the Electron project as its main form of distribution. The main objective of the project is to allow non-technical users to make API calls and Database Queries; viewing, processing and exporting the obtained data.  
  
The working premise is that a technical employee can describe, through standardized documentation, the detailed operation of an API that he wants to make available to his non-technical team. Once the patterns of each API endpoint are described, users will be able to define the data inputs through an intelligent form pattern and receive the answer filtered and organized according to the created specification.

Likewise, technical employees will be able to create database queries, where the input data will be filled in by users in a simplified form and the data response will be received filtered and with their fields identified and/or translated.

The export mechanisms will be modular in order to allow the data to be sent to other software such as spreadsheet editors, downloaded as scripts for import into databases or to serve as input data for a new API / Database Query call , resulting in a chain of processes that are triggered once.


API Documentation Scheema
---
In order for the APIs to be supported by the system, and to allow users to have their work easier, it will be necessary for a technical employee to describe the following data structure, describing details of each supported endpoint, the methods of authentication. translations and informations about each field that must be filled in by users.

**(Notice) Documentation for creating an API documentation is pending.**

```json
// Blank API Example 
{
    "name": "",
    "description": "",
    "endpoints": [{
        "id": "",
	"name": "",
	"description": "",
	"uri": "",
	"method": "",
	"in_params": [{
            "internal_name": "",
            "method": "post",
            "type": "",
            "is_required": true,
            "inputs": [{
                "internal_name": "",
                "name": "",
                "type": "",
                "description": "",
                "is_required": true
            }]
        }],
	"out_schema": [{
            "type": "",
            "internal_name": "",
            "address": "",
            "name": "",
            "is_visible": true
        }],
	"is_authenticated": false
    }],
    "urlref": "",
    "auth_type": "Bearer",
    "login": {
        "endpoint_id": "",
	"input_login": {
            "internal_name": "",
            "method": "post",
            "type": "",
            "is_required": true,
            "inputs": [{
                "internal_name": "",
                "name": "",
                "type": "",
                "description": "",
                "is_required": true
            }]
        },
	"input_pass": {
            "internal_name": "",
            "method": "post",
            "type": "",
            "is_required": true,
            "inputs": [{
                "internal_name": "",
                "name": "",
                "type": "",
                "description": "",
                "is_required": true
            }]
        },
	"output_token": {
            "type": "",
            "internal_name": "",
            "address": "",
            "name": "",
            "is_visible": true
        },
	"output_user": {
            "type": "",
            "internal_name": "",
            "address": "",
            "name": "",
            "is_visible": true
        }
    }
}

```

Installation
---

Use a package manager of your choice (npm, yarn, etc.) in order to install all dependencies

```
npm install
```

```
yarn install
```
  
Usage
---

In order to run this project 2 scripts will need to be executed dev:react and dev:electron, run each one in a different terminal and always run dev:react before dev:electron, or dev to run them in order automatically

```
npm run dev:react
```
```
npm run dev:electron
```

or

```
npm run dev
```

Packaging
---
To generate a project package run package

```
npm run package
```

Contributing
---
Pull requests are always welcome :)

License
---
[https://choosealicense.com/licenses/mit/] MIT