angular.module('MovieApp')
    .directive('movieItem', function () {
        return {
            restrict: 'E',
//        scope: {},
            templateUrl: 'template_movie.html'
        }
    });
