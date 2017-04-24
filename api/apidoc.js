// global definitions for apidoc

/**
 * @apiDefine OKSuccess
 * @apiSuccess (200) OK The resource was found.
 */

/**
 * @apiDefine ProcessedSuccess
 * @apiSuccess (204) Processed The server successfully processed the request and is not returning any content.
 */

/**
 * @apiDefine SuccessJSONAPIArray
 * @apiSuccess {Array} data JSON-API `data` array
 * @apiSuccessExample {json} 200 Success-Response (example)
{
  "data": [
    {
      "type": "__data_type__",
      "id": "__mongoose_id__",
      "attributes": {
        "field1": "___field1_value__",
        "field2": "___field2_value__",
        "etc": "etc"
      }
    }
  ]
}
 */

/**
 * @apiDefine SuccessJSONAPIUserLoggedIn
 * @apiSuccess {Object} data JSON-API `data` object for logged in user
 * @apiSuccessExample {json} 200 Success-Response (example)
{
  "data": {
    "type": "user",
    "id": "588b7c4ea6c616bd5d103e11",
    "attributes": {
      "role": "admin",
      "local": {
        "firstName": "William",
        "lastName": "Windsor",
        "email": "will.i.am@royal.uk"
      }
    }
  }
}
*/

/**
 * @apiDefine SuccessJSONAPIUserCreated
 * @apiSuccess {Object} data JSON-API `data` object for created user
 * @apiSuccessExample {json} 201 Success-Response (example)
{
  "data": {
    "type": "user",
    "id": "588b7c4ea6c616bd5d103e11",
    "attributes": {
      "role": "admin",
      "local": {
        "firstName": "William",
        "lastName": "Windsor",
        "email": "will.i.am@royal.uk"
      }
    }
  }
}
 */

 /**
  * @apiDefine SuccessJSONAPIUser
  * @apiSuccess {Object} data JSON-API `data` object
  * @apiSuccessExample {json} 200 Success-Response (example)
 {
   "data": {
     "type": "user",
     "id": "588b7c4ea6c616bd5d103e11",
     "attributes": {
       "role": "admin",
       "local": {
         "firstName": "William",
         "lastName": "Windsor",
         "email": "will.i.am@royal.uk"
       }
     }
   }
 }
  */

/**
 * @apiDefine SuccessJSONAPIUsers
 * @apiSuccess {Array} data JSON-API `data` array
 * @apiSuccessExample {json} 200 Success-Response (example)
{
  "data": [
    {
      "type": "user",
      "id": "588b7c4ea6c616bd5d103e11",
      "attributes": {
        "role": "admin",
        "local": {
          "firstName": "William",
          "lastName": "Windsor",
          "email": "will.i.am@royal.uk"
        }
      }
    },
    {
      "type": "user",
      "id": "588b7c4ea6c616bd5d103e12",
      "attributes": {
        "role": "standard",
        "local": {
          "firstName": "Harry",
          "lastName": "Windsor",
          "email": "harry.windsor@royal.uk"
        }
      }
    }
  ]
}
 */

/**
 * @apiDefine SuccessMetaJSONAPI
 * @apiSuccessExample {json} 200 Success-Response (example)
{
  "meta": {
    "message": "Resource was successfully deleted"
  }
}
 */

/**
 * @apiDefine CreatedSuccess
 * @apiSuccess (201) Created The resource was successfully created.
 * @apiSuccessExample {json} 201 Success-Response (example)
{
  "meta": {
    "message": "Resource was successfully created"
  }
}
 */

/**
 * @apiDefine BadRequestError
 * @apiError (400) BadRequest The HTTP request was badly-formed.
 * @apiErrorExample {json} 400 Error response (example)
{
  "errors": [
    {
      "status": 400,
      "title": "Passwords do not match"
    }
  ]
}
 */

/**
 * @apiDefine UnauthorizedError
 * @apiError (401) Unauthorized You are trying to access a resource that requires authentication.
 */

/**
 * @apiDefine ForbiddenError
 * @apiError (401) Forbidden You do not have sufficient authorisation to access this resource.
 */

 /**
  * @apiDefine ResourceNotFoundError
  * @apiError (404) ResourceNotFound The resource was not found.
  * @apiErrorExample {json} 404 Error response (example)
 {
   "errors": [
     {
       "status": 404,
       "title": "User was not found"
     }
   ]
 }
  */

/**
 * @apiDefine ConflictError
 * @apiError (409) Conflict The resource you are trying to create already exists.
 */

/**
 * @apiDefine InternalServerError
 * @apiError (500) InternalServer An error occurred on the server while trying to process your request.
 */
