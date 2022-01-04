const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('landing')
});
router.get('/contact',(req,res)=>{
    res.render('contactus',{layout:"onlyNav",point:"Contact Us"});
})
router.get('/achievements',(req,res)=>{
    res.render('achievements',{layout:"onlyNav",point:"Achievements"});
})
router.get('/gallery',(req,res)=>{
    res.render('gallery',{layout:"onlyNav",point:"gallery"});
})
router.get('/notices',(req,res)=>{
    res.render('notices',{layout:"onlyNav",point:"notices"});
})
router.get('/principal',(req,res)=>{
    res.render('principal',{
        layout:"onlyNav",
        point:"Principal"
   
});
});
router.get('/:socName',(req,res)=>{
    const socdata = {
        subHead:"The Hip Hop Music Society",
        pBold:"Rapbeats was the first ever Hip Hop Music society formed in Delhi University.",
        paragraphs:["This is the society which follows hip hop from the soul.Rapbeats represent three vital elements of Hip hop. Rapbeats-The Hip hop Music Society of PGDAV College is a group of talented beatboxers, rappers and music producers",
        "The artists of Rapbeats performs in various competition across India and had won competitions at the Biggest Asia Cultural Fest Mood Indigo organized by IIT Bombay 4 times across two mazor Competitions ,i.e. Mood Indigo Got Talent and MI-NEM ( The Rap Battle) apart form winning rap battles,Dj Wars and Talent Hunts across 25+ colleges across Delhi.",
        "Music Producers from our society have their Music launched from Speed Records and also produced music for the aftermovies of various college festivals"
    ],
    links:[{username:"/rapbeats7",link:"https://www.instagram.com/rapbeats7/",image:"logos/InstagramLogo.png"},{username:"/rapbeatspgdav",link:"https://www.facebook.com/rapbeatspgdav/",image:"logos/FacebookLogo.png"}]

    }
    res.render('socView',{
        layout:"navnSide",
        name:req.params.socName,
        data:socdata
});
})


module.exports = router;