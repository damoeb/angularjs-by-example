app.factory('MovieService', function() {
	var movies = [
		{name:'The Shawshank Redemption', year:'1994'},
		{name:'The Godfather', year:'1972'},
		{name:'The Dark Knight', year:'2008'},
		{name:'Pulp Fiction', year:'1994'},
		{name:'Schindlers List', year:'1993'},
		{name:'12 Angry Men', year:'1957'},
		{name:'The Good, the Bad and the Ugly', year:'1966'},
		{name:'The Lord of the Rings: The Return of the King', year:'2003'},
		{name:'Fight Club', year:'1999'},
		{name:'Forrest Gump', year:'1994'}
	];

        return {
            list: function() { return movies; },
            add: function(movie) {movies.push(movie); }
        };        
    }
);
