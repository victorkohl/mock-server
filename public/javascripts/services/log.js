(function() {

    'use strict';

    angular.module('MockServerApp')
        .factory('Log', ['$resource', Log]);


    function Log($resource) {
        return $resource('api/logs/:_id', { _id: "@_id" });
    }

})();