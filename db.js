'use strict';

//const Sequelize = require('sequelize');
//const sequelize = new Sequelize(process.env.DB_UR); //'postgres://user:pass@example.com:5432/dbname'

/*
// http://docs.sequelizejs.com/manual/getting-started.html
// Option 1: Passing parameters separately

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: // one of 'mysql' | 'mariadb' | 'postgres' | 'mssql'
});

// Option 2: Using a connection URI
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
*/
//module.exports = sequelize;

//function conn_ins(nom,desc,titre,type) {
const express = require('express');
const routerRoot = express.Router();
var mysql = require('mysql');
 
console.log('Get connection ...');
 
var conn = mysql.createConnection({
  database: 'sémantiqueweb',
  host: "127.0.0.1",
  user: "root",
  password: "",
  port:"3308"
});
 
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected a la base MySql");
});


function insert(nom,type,desc,titre,url){
	//console.log("--------",url);
	var description = desc;
	conn.connect(function(err) { 
  	console.log(err);
  	if (err) throw err; 
  		// if connection is successful
  		//console.log()

  		conn.query("INSERT INTO site (nom, type, description, titre, url) values ('"+ nom +"', '"+ type +"', '" + description + "', '" + titre +"', '" + url +"')", function (err, result, fields) { 
    	// if any error while executing above query, throw error
    	if (err) throw err; 
   	 		// if there is no error, you have the result
    		console.log(result); 
  	}
  	); 
});
};

function searchSql(mot){
 //conn.query("SELECT * FROM site WHERE nom='"+ mot +"')", function (err, result) {
  routerRoot.get('/ping', function(req, res) {
  res.send('PONG');
  });
   conn.query("SELECT * FROM site WHERE nom= '"+ mot +"' ", function (err, result) {
      // if any error while executing above query, throw error
      if (result.length == 0){
        console.log("je trouve pas");
        var result2 = "Aucun resultat";
        routerRoot.get('/', function(req, res) {
          res.render('search_page', { results: result });
        });
        //return "Aucun resultat"
      }else
      {
        console.log("je trouve");
        var result2 = "resulat trouve";
        console.log(result);
        routerRoot.get('/', function(req, res) {
          res.render('search_page', { results: result });
        });
        return result;
        //return "resulat trouve"
      }

      // if there is no error, you have the result
    }
    );
}


//SELECT * FROM utilisateurs WHERE Nom="male"

module.exports.insert = insert;
module.exports.searchSql = searchSql;
