let db = require("../database/models/index");

let genresController = {
    list: function(req, res){
        db.Genero.findAll()
            .then(generos=> res.render("genresList",{genres:generos}))
    },
    detail: function(req, res){
        db.Genero.findByPk(req.params.id)
            .then(generos=> res.render("genresDetail",{genre:generos}))
    }
    
}

module.exports = genresController;