app.controller('AddController', function($scope, MovieService) {
    $scope.name = 'Nme';
    $scope.year = 'Year';
    
    $scope.addMovie = function() {
        MovieService.add({name:$scope.name, year:$scope.year});
        console.log('name', $scope.name, 'year', $scope.year);
    }
});
