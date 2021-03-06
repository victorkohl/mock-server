(function() {

    'use strict';

    angular
        .module('MockServerApp', [
            'ui.router',
            'ngResource',
            'ngMessages',
            'ngMaterial',
            'md.data.table'
        ])
        .config(['$mdThemingProvider', setTheme]);


    function setTheme($mdThemingProvider) {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('teal')
            .accentPalette('lime')
            .warnPalette('red');
    }
        
})();