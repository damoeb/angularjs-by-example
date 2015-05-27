app
.config(function ($routeProvider) {
$routeProvider
	.when('/add', {
		templateUrl: 'views/add.html',
		controller: 'AddMovieController',
	})
	.otherwise({
		templateUrl: 'views/list.html',
		controller: 'ListMovieController',
	})
});
