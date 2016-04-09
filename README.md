HTTP-friendly error objects

[![Current Version]](https://www.npmjs.com/package/pretty-errors)

Lead Maintainer: [Sahil Arora](https://github.com/sahilarora946)

<!-- toc -->

- [pretty-errors](#pretty-errors)
  - [Helper Methods](#helper-methods)
    - [`create(statusCode, message, [data])`](#createstatuscode-message-data)
  - [HTTP 4xx Errors](#http-4xx-errors)
    - [`badRequest(message, [data])`](#badrequestmessage-data)
    - [`unauthorized(message, [scheme])`](#unauthorizedmessage-scheme-attributes)
    - [`forbidden(message, [data])`](#forbiddenmessage-data)
    - [`notFound(message, [data])`](#notfoundmessage-data)
    - [`methodNotAllowed(message, [data])`](#methodnotallowedmessage-data)
    - [`notAcceptable(message, [data])`](#notacceptablemessage-data)
    - [`proxyAuthRequired(message, [data])`](#proxyauthrequiredmessage-data)
    - [`clientTimeout(message, [data])`](#clienttimeoutmessage-data)
    - [`conflict(message, [data])`](#conflictmessage-data)
    - [`resourceGone(message, [data])`](#resourcegonemessage-data)
    - [`lengthRequired(message, [data])`](#lengthrequiredmessage-data)
    - [`preconditionFailed(message, [data])`](#preconditionfailedmessage-data)
    - [`entityTooLarge(message, [data])`](#entitytoolargemessage-data)
    - [`uriTooLong(message, [data])`](#uritoolongmessage-data)
    - [`unsupportedMediaType(message, [data])`](#unsupportedmediatypemessage-data)
    - [`rangeNotSatisfiable(message, [data])`](#rangenotsatisfiablemessage-data)
    - [`expectationFailed(message, [data])`](#expectationfailedmessage-data)
    - [`badData(message, [data])`](#baddatamessage-data)
    - [`preconditionRequired(message, [data])`](#preconditionrequiredmessage-data)
    - [`tooManyRequests(message, [data])`](#toomanyrequestsmessage-data)
    - [`illegal(message, [data])`](#illegalmessage-data)
  - [HTTP 5xx Errors](#http-5xx-errors)
    - [`badImplementation(message, [data])`](#badimplementationmessage-data)
    - [`notImplemented(message, [data])`](#notimplementedmessage-data)
    - [`badGateway(message, [data])`](#badgatewaymessage-data)
    - [`serverTimeout(message, [data])`](#servertimeoutmessage-data)
    - [`gatewayTimeout(message, [data])`](#gatewaytimeoutmessage-data)

<!-- tocstop -->

# pretty-errors

**pretty-errors** provides a set of utilities for returning HTTP errors. Each utility returns a `pretty-errors` error response
object (instance of `Error`) which includes the following properties:
statusCode: 400, message: message
- `statusCode` - the error code.
- `message` - the error message.
-  all the keys in data json and corresponding values


```

### `create(statusCode, message, [data])`

Generates an `Error` object with the **pretty-codes** decorations where:
- `statusCode` - an HTTP error code number. Must be greater or equal 400.
- `message` - message string.
- `data` - additional error data set to `error.data` property.

```js
var error = create(400, 'Bad request', { timestamp: Date.now() });
```

## HTTP 4xx Errors

### `badRequest(message, [data])`

Returns a 400 Bad Request error where:
- `message` - message.
- `data` - optional additional error data.

```js
badRequest('invalid query');
```

Generates the following response payload:

```json
{
    "statusCode": 400,
    "message": "invalid query"
}
```

### `unauthorized(message, [scheme])`

Returns a 401 Unauthorized error where:
- `message` - message.
- `data` - optional additional error data.

```js
unauthorized('invalid password');
```

Generates the following response:

```json
{
    "statusCode": 401,
    "message": "invalid password"
},
"headers" {}
```

```js
unauthorized('invalid password');
```

Generates the following response:

```json
{
    "statusCode": 401,
    "message": "invalid password",
},
```

```js
unauthorized('invalid password', { ttl: 0, cache: null, foo: 'bar' });
```

Generates the following response:

```json
{
    "statusCode": 401,
    "message": "invalid password",
    "ttl": 0,
    "cache": "",
    "foo": "bar"
},
```

### `forbidden(message, [data])`

Returns a 403 Forbidden error where:
- `message` - message.
- `data` - optional additional error data.

```js
forbidden('try again some time');
```

Generates the following response payload:

```json
{
    "statusCode": 403,
    "message": "try again some time"
}
```

### `notFound(message, [data])`

Returns a 404 Not Found error where:
- `message` - message.
- `data` - optional additional error data.

```js
notFound('missing');
```

Generates the following response payload:

```json
{
    "statusCode": 404,
    "message": "missing"
}
```

### `methodNotAllowed(message, [data])`

Returns a 405 Method Not Allowed error where:
- `message` - message.
- `data` - optional additional error data.

```js
methodNotAllowed('that method is not allowed');
```

Generates the following response payload:

```json
{
    "statusCode": 405,
    "message": "that method is not allowed"
}
```

### `notAcceptable(message, [data])`

Returns a 406 Not Acceptable error where:
- `message` - message.
- `data` - optional additional error data.

```js
notAcceptable('unacceptable');
```

Generates the following response payload:

```json
{
    "statusCode": 406,
    "message": "unacceptable"
}
```

### `proxyAuthRequired(message, [data])`

Returns a 407 Proxy Authentication Required error where:
- `message` - message.
- `data` - optional additional error data.

```js
proxyAuthRequired('auth missing');
```

Generates the following response payload:

```json
{
    "statusCode": 407,
    "message": "auth missing"
}
```

### `clientTimeout(message, [data])`

Returns a 408 Request Time-out error where:
- `message` - message.
- `data` - optional additional error data.

```js
clientTimeout('timed out');
```

Generates the following response payload:

```json
{
    "statusCode": 408,
    "message": "timed out"
}
```

### `conflict(message, [data])`

Returns a 409 Conflict error where:
- `message` - message.
- `data` - optional additional error data.

```js
conflict('there was a conflict');
```

Generates the following response payload:

```json
{
    "statusCode": 409,
    "message": "there was a conflict"
}
```

### `resourceGone(message, [data])`

Returns a 410 Gone error where:
- `message` - message.
- `data` - optional additional error data.

```js
resourceGone('it is gone');
```

Generates the following response payload:

```json
{
    "statusCode": 410,
    "message": "it is gone"
}
```

### `lengthRequired(message, [data])`

Returns a 411 Length Required error where:
- `message` - message.
- `data` - optional additional error data.

```js
lengthRequired('length needed');
```

Generates the following response payload:

```json
{
    "statusCode": 411,
    "message": "length needed"
}
```

### `preconditionFailed(message, [data])`

Returns a 412 Precondition Failed error where:
- `message` - message.
- `data` - optional additional error data.

```js
preconditionFailed();
```

Generates the following response payload:

```json
{
    "statusCode": 412,
    }
```

### `entityTooLarge(message, [data])`

Returns a 413 Request Entity Too Large error where:
- `message` - message.
- `data` - optional additional error data.

```js
entityTooLarge('too big');
```

Generates the following response payload:

```json
{
    "statusCode": 413,
    "message": "too big"
}
```

### `uriTooLong(message, [data])`

Returns a 414 Request-URI Too Large error where:
- `message` - message.
- `data` - optional additional error data.

```js
uriTooLong('uri is too long');
```

Generates the following response payload:

```json
{
    "statusCode": 414,
    "message": "uri is too long"
}
```

### `unsupportedMediaType(message, [data])`

Returns a 415 Unsupported Media Type error where:
- `message` - message.
- `data` - optional additional error data.

```js
unsupportedMediaType('that media is not supported');
```

Generates the following response payload:

```json
{
    "statusCode": 415,
    "message": "that media is not supported"
}
```

### `rangeNotSatisfiable(message, [data])`

Returns a 416 Requested Range Not Satisfiable error where:
- `message` - message.
- `data` - optional additional error data.

```js
rangeNotSatisfiable();
```

Generates the following response payload:

```json
{
    "statusCode": 416,
    }
```

### `expectationFailed(message, [data])`

Returns a 417 Expectation Failed error where:
- `message` - message.
- `data` - optional additional error data.

```js
expectationFailed('expected this to work');
```

Generates the following response payload:

```json
{
    "statusCode": 417,
    "message": "expected this to work"
}
```

### `badData(message, [data])`

Returns a 422 Unprocessable Entity error where:
- `message` - message.
- `data` - optional additional error data.

```js
badData('your data is bad and you should feel bad');
```

Generates the following response payload:

```json
{
    "statusCode": 422,
    "message": "your data is bad and you should feel bad"
}
```

### `preconditionRequired(message, [data])`

Returns a 428 Precondition Required error where:
- `message` - message.
- `data` - optional additional error data.

```js
preconditionRequired('you must supply an If-Match header');
```

Generates the following response payload:

```json
{
    "statusCode": 428,
    "message": "you must supply an If-Match header"
}
```

### `tooManyRequests(message, [data])`

Returns a 429 Too Many Requests error where:
- `message` - message.
- `data` - optional additional error data.

```js
tooManyRequests('you have exceeded your request limit');
```

Generates the following response payload:

```json
{
    "statusCode": 429,
    "message": "you have exceeded your request limit"
}
```

### `illegal(message, [data])`

Returns a 451 Unavailable For Legal Reasons error where:
- `message` - message.
- `data` - optional additional error data.

```js
illegal('you are not permitted to view this resource for legal reasons');
```

Generates the following response payload:

```json
{
    "statusCode": 451,
    "message": "you are not permitted to view this resource for legal reasons"
}
```

## HTTP 5xx Errors

All 500 errors hide your message from the end user. Your message is recorded in the server log.

### `badImplementation(message, [data])`

Returns a 500 Internal Server Error error where:
- `message` - message.
- `data` - optional additional error data.

```js
badImplementation('terrible implementation');
```

Generates the following response payload:

```json
{
    "statusCode": 500,
    "message": "An internal server error occurred"
}
```

### `notImplemented(message, [data])`

Returns a 501 Not Implemented error where:
- `message` - message.
- `data` - optional additional error data.

```js
notImplemented('method not implemented');
```

Generates the following response payload:

```json
{
    "statusCode": 501,
    "message": "method not implemented"
}
```

### `badGateway(message, [data])`

Returns a 502 Bad Gateway error where:
- `message` - message.
- `data` - optional additional error data.

```js
badGateway('that is a bad gateway');
```

Generates the following response payload:

```json
{
    "statusCode": 502,
    "message": "that is a bad gateway"
}
```

### `serverTimeout(message, [data])`

Returns a 503 Service Unavailable error where:
- `message` - message.
- `data` - optional additional error data.

```js
serverTimeout('unavailable');
```

Generates the following response payload:

```json
{
    "statusCode": 503,
    "message": "unavailable"
}
```

### `gatewayTimeout(message, [data])`

Returns a 504 Gateway Time-out error where:
- `message` - message.
- `data` - optional additional error data.

```js
gatewayTimeout("error");
```

Generates the following response payload:

```json
{
    "message": "error"
    "statusCode": 504,
}
```
