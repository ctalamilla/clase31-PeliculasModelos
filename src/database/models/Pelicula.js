module.exports = (sequelize, dataType) => {

    let alias = 'Pelicula';

    let cols = {
        id: {
            type: dataType.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: dataType.STRING(500)
        },
        rating: {
            type: dataType.DECIMAL(3,1)
        },
        awards: {
            type: dataType.INTEGER(10)
        },
        release_date: {
            type: dataType.DATE()
        },
        length: {
            type: dataType.INTEGER(10)
        },
        genre_id: {
            type: dataType.INTEGER(10)
        },
        created_at: {
            type: dataType.DATE()
        },
        updated_at: {
            type: dataType.DATE()
        }
    };

    let config = {
        tableName: 'movies',
        timestamps: false
    };

    const Pelicula = sequelize.define(alias, cols, config)

    return Pelicula

}






