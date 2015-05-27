app
.config(function ($routeProvider) {
$routeProvider
	.when('/add', {
		templateUrl: 'views/add.html',
		controller: 'AddController',
	})
    .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListController',
    })
	.otherwise({
        redirectTo: '/list'
	})
});
