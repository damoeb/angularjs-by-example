var app = angular.module('MovieApp', []);

app.controller('ListController', function($scope, MOVIES) {
            $scope.movies = MOVIES;
});
