app.controller('ListController', function($scope, MovieService) {
    $scope.movies = MovieService.list();
});
