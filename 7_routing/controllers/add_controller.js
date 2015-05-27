app.controller('AddController', function($scope, MovieService) {
    $scope.submit = function() {
        MovieService.add({name:$scope.name, year:$scope.year});
    }
});
