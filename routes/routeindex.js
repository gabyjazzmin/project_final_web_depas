const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const Apt = require('../model/apartment');

router.get('/', async function(req, res){
    res.render('home');
});

router.get('/map', async function(req, res){
    res.render('map');
});

router.get('/apts', async function(req, res){
    let apts = await Apt.find();
    res.render('searchapts', {apts});
});

router.get('/addApt', async function(req, res){
    res.render('addapt');
});

router.post('/addApt', async function(req, res){
    let apt = new Apt(req.body);
    await apt.save();
    res.redirect("/apts");
})

module.exports = router;