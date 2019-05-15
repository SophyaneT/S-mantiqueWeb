'use strict';


const request = require('sync-request');
const cheerio = require('cheerio');
const logger = require('../libs/logger');

const insert2 = require('../services/db');

var url0 = "https://scratch.mit.edu";
var url1 = "https://www.facebook.com";
var url2 = "https://twitter.com";
var url3 = "http://www.allocine.fr";
var url4 = "http://www.fff.fr";
var url5 = "https://www.audi.fr";
var url6 = "https://www.amazon.fr";
var url7 = "https://www.youtube.com";
var url8 = "https://www.twitch.tv";
var url9 = "https://www.google.fr";
var url10 = "https://fr.wikipedia.org";
var url11 = "http://www.kravmaga-concept.fr";
var url12 = "https://9gag.com";
var url13 = "https://www.reddit.com";
var url14 = "https://www.netflix.com";
var url15 = "https://www.w3schools.com";
var url16 = "https://openclassrooms.com";
var url17 = "https://www.ogcnice.com";
var url18 = "https://www.avelia.fr";
var url19 = "https://deliveroo.fr";
var url20 = "http://unice.fr";

function getInfos(url) {
  logger.info('Parsing URL [%s]', url);
  const response = request('GET', url);
  const $ = cheerio.load(response.getBody());
  // TODO extraire les meta data et les stocker dans la base de donnee
  //console.log($("meta").attr("content"));
  //console.log($("meta[property='og:title']").attr("content"));
  //console.log($("meta[property='og:type']").attr("content"));
  //console.log($('meta[property="og:coverage"]').attr('name'));

  var nom_site = $("meta[property='og:site_name']").attr("content");


  if (nom_site == undefined){
  	nom_site = $("title").text();
  	console.log(nom_site);


  }
  else{
  	console.log(" Voici le nom du site : " + nom_site);

  }

  var titre = $("meta[property='og:title']").attr("content");


  if (titre == undefined){
  	titre = " no value";
  	console.log(titre);


  }
  else{
  	console.log(" Voici le titre du site : " + titre);

  }

  var type = $("meta[property='og:type']").attr("content");

  if (type == undefined){
  	type = " no value";
  	console.log(type);

  }
  else{
  	console.log(" Voici le type du site : " + type);

  }

   var description = $("meta[property='og:description']").attr("content");

  if (description == undefined){
  	description = " no value";
  	console.log(description);
  }
  else{
  	console.log(" Voici la description du site :  " + description);


  }
  //console.log($);
  return [nom_site, titre, type, description, url];

}

var nom = "commrgrdthfg";
var code = getInfos(url20);
var titre2 =  escape(code[1]);
var type2 =  escape(code[2]);
var description2 =  escape(code[3]);
var nom_site2 =  escape(code[0]);
var url2 =  escape(code[4]);
//console.log(nom_site2,titre2,type2,description2,url2,code);
console.log("------code-----",code);
console.log("-----titre-----",titre2);
console.log("----type-----",type2);
console.log("----desc-------",description2);
console.log("-----nom-----",nom_site2);
console.log("-----url-------",url2);
console.log("---------------");

// getInfos(url1);
// getInfos(url2);
// getInfos(url3);
// getInfos(url4);
// getInfos(url5);
// getInfos(url6);
// getInfos(url7);
// getInfos(url8);
// getInfos(url9);
// getInfos(url10);
// getInfos(url11);
// getInfos(url12);
// getInfos(url13);
// getInfos(url14);
// getInfos(url15);
// getInfos(url16);
// getInfos(url17);
// getInfos(url18);
// getInfos(url19);
// getInfos(url20);
insert2.insert(nom_site2,type2,description2,titre2,url2);
console.log("Insertion faite de : ", nom_site2);
console.log("Fin ");
