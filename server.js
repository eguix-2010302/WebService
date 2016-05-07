/**
 * Created by Armando on 06/05/2016.
 */
(function(){
     var express=require('express');
     var bodyParser=require('body-parser');
     var morgan=require('morgan');
     var mySql=require('mysql');
     var cors=require('cors');
     var Sequelize = require('sequelize');
     var sequelize = new Sequelize('db_androidTurismo','root','',{
         host: 'localhost',
         dialect: 'mysql',
         pool: {
             max: 20,
             min: 0,
             idle: 10000
         }
     });

    var Departamento = sequelize.define('departamento',{
        idDepartamento: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        nombre: { type: Sequelize.STRING, allowNull: false },
        direccion: { type: Sequelize.STRING, allowNull: false }
    });
        sequelize.sync({ force:true});
        var puerto=3000;
        var conf=require('./config');
        var app=express();
        app.use(bodyParser.urlencoded({
            extended: true
        }));

        app.use(bodyParser.json());
        app.use('/api/v1', require('./routes')(app));
        app.listen(puerto,function () {
           console.log("Servidor iniciado: " + puerto);
        });
    }
)
