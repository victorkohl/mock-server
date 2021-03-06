(function() {

    'use strict';

    angular.module('MockServerApp')
        .factory('Mock', ['$resource', Mock]);


    function Mock($resource) {
        return $resource('api/mocks/:_id', { _id: "@_id" }, {
            'update': { method: 'PATCH' }
        });
    }

})();