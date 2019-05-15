'use strict';

const express = require('express');
const routerRoot = express.Router();

const search = require('../services/db');

// Health check
routerRoot.get('/ping', function(req, res) {
  res.send('PONG');
});

// monsite.com/search?q=maRequerte =>  req.query.q;
// monsite.com/search/maRequerte =>  req.params.q;
routerRoot.get('/', function(req, res) {
//res.render("COucou22");
const searchQuery = req.query.MaRecherche;
console.log(searchQuery);
//console.log("ON est al ");
//console.log(searchQuery2);
const rechercheF = search.searchSql(searchQuery);
//search.searchSql(searchQuery2);
res.render('search_page', { results: rechercheF });
console.log("Le resultat : ",rechercheF);
});
module.exports = routerRoot;
