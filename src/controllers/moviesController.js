let db = require("../database/models/index");

let moviesController = {
    list: function(req, res){
        db.Pelicula.findAll()
            .then(peliculas=> res.render("moviesList",{movies:peliculas}))
    },
    detail: function(req, res){
        db.Pelicula.findByPk(req.params.id)
            .then(peliculas=> res.render("moviesDetail",{movie:peliculas}))
    },
    new: function(req, res){
        db.Pelicula.findAll({order:[['release_date', 'DESC']]})
            .then(peliculas=> res.render("newestMovies",{movies:peliculas}))
    },
    recomended: function(req, res){
        db.Pelicula.findAll({order:[['rating', 'DESC']],
                            limit: 5})
            .then(peliculas=> res.render("recommendedMovies",{movies:peliculas}))
    }
}

module.exports = moviesController;