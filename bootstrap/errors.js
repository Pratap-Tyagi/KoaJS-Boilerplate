"use strict";

global.GenericError = function (message) {
    this.name = 'GenericError';
    this.message = message || 'There was some`` kinda GenericError';
    this.code = 500;
};
global.NotFoundError = function (message) {
    this.name = 'NotFoundError';
    this.message = message || 'The url you are looking for was not found!!';
    this.code = 404;
};
global.WrongPassword = function (message) {
    this.name = 'WrongPassword';
    this.message = message || 'You have entered a worng password!!';
    this.code = 420;
};
global.AccountNotFound = function (message) {
    this.name = 'AccountNotFound';
    this.message = message || 'This account does not exists in our database';
    this.code = 404;
};
global.FileNotFoundError = function (message) {
    this.name = 'FileNotFoundError';
    this.message = message || 'The file you are looking for was not found';
    this.code = 404;
};
global.UserNotActiveError = function (message) {
    this.name = 'UserNotActiveError';
    this.message = message || 'The user state is not active. Cannot use account until state is active';
    this.code = 499;
};
global.NotAuthorised = function (message) {
    this.name = 'NotAuthorised';
    this.message = message || 'You are not authorised to perfor this action';
    this.code = 475;
};
global.UserDoesNotExistsErrorEmail = function (message) {
    this.name = 'UserDoesNotExistsErrorEmail';
    this.message = message || 'A user with the entered email does not exists';
    this.code = 475;
};
global.ValidationError = function (message) {
    this.name = 'ValidationError';
    this.message = `There were errors in validation${message}.`;
    this.code = 420;
};