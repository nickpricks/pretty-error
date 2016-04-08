var errorCreator = function(options){
	var error = new Error();
	if(options){
		for(var attrname in options){
			error[attrname] = options[attrname];
		}
	}
	return error;
};
exports.badRequest = function(message, options) {
	var error_options = {statusCode: 400, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.unauthorized = function(message, options) {
	var error_options = {statusCode: 401, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.forbidden = function(message, options) {
	var error_options = {statusCode: 403, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.notFound = function(message, options) {
	var error_options = {statusCode: 404, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.MethodNotAllowed = function(message, options) {
	var error_options = {statusCode: 405, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.badRequest = function(message, options) {
	var error_options = {statusCode: 400, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.notAcceptable = function(message, options) {
	var error_options = {statusCode: 406, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.proxyAuthRequired = function(message, options) {
	var error_options = {statusCode: 407, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.clientTimeout = function(message, options) {
	var error_options = {statusCode: 408, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.conflict = function(message, options) {
	var error_options = {statusCode: 409, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.resourceGone = function(message, options) {
	var error_options = {statusCode: 410, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.lengthRequired = function(message, options) {
	var error_options = {statusCode: 411, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.preconditionFailed = function(message, options) {
	var error_options = {statusCode: 412, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.entityTooLarge = function(message, options) {
	var error_options = {statusCode: 413, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.uriTooLong = function(message, options) {
	var error_options = {statusCode: 414, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.unsupportedMediaType = function(message, options) {
	var error_options = {statusCode: 415, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.rangeNotSatisfiable = function(message, options) {
	var error_options = {statusCode: 416, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.expectationFailed = function(message, options) {
	var error_options = {statusCode: 417, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.badData = function(message, options) {
	var error_options = {statusCode: 422, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.preconditionRequired = function(message, options) {
	var error_options = {statusCode: 428, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.tooManyRequests = function(message, options) {
	var error_options = {statusCode: 429, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.illegal = function(message, options) {
	var error_options = {statusCode: 451, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.badImplementation = function(message, options) {
	var error_options = {statusCode: 500, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.notImplemented = function(message, options) {
	var error_options = {statusCode: 501, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.badGateway = function(message, options) {
	var error_options = {statusCode: 502, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.serverTimeout = function(message, options) {
	var error_options = {statusCode: 503, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.gatewayTimeout = function(message, options) {
	var error_options = {statusCode: 504, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
exports.create = function(statusCode, message, data) {
	var error_options = {statusCode: statusCode, message: message};
	if(options){
		for(var attrname in options){
			error_options[attrname] = options[attrname];
		}
	}
	return errorCreator(error_options);
}
