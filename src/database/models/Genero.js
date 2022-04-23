module.exports = (sequelize, dataType) => {
    let alias = 'Genero';
    let cols = {
        id: {
            type: dataType.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataType.STRING(100)
        },
        ranking: {
            type: dataType.INTEGER(10)
        },
        active: {
            type: dataType.INTEGER(1)
        },
        
        created_at: {
            type: dataType.DATE()
        },
        updated_at: {
            type: dataType.DATE()
        }
    };
    let config = {
        tableName: 'genres',
        timestamps: false
    };


    const Genero = sequelize.define(alias, cols, config)

    return Genero

}

