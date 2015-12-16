{
  "swagger": "2.0",
  "info": {
    "title": "lifecycle-demo",
    "description": "",
    "version": "1.0.0"
  },
  "host": "example.com",
  "schemes": [
    "http"
  ],
  "basePath": "/v1/catalogs",
  "paths": {
    "/address": {
      "get": {
        "description": "Name Address",
        "parameters": [
          {
            "name": "sample",
            "in": "query",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "==> tbd",
            "schema": {
              "$ref": "#/definitions/Response"
            }
          },
          "404": {
            "description": "==> tbd",
            "schema": {
              "$ref": "#/definitions/Error"
            }
          }
        }
      }
    }
  },
  "definitions": {
    "Body": {
      "properties": {
        "bodyParam": {
          "description": "tbd",
          "type": "string"
        }
      }
    },
    "Response": {
      "properties": {
        "responseParam": {
          "description": "tbd",
          "type": "string"
        }
      }
    },
    "Error": {
      "properties": {
        "errorParam": {
          "description": "tbd",
          "type": "string"
        }
      }
    }
  }
}
