const express = require("express");
const app = express();

const albumsProduced = [
    {artist:'Raekwon',
    album:'Only Build 4 Cuban Links'},
    {artist:'Ghostface Killah',
    album:'Ironman'},
    {artist:'Ole Dirty Bastard',
    album:'Return to the 36 Chambers'},
    {artist:'GZA',
    album:'Liquid Swords'},
    {artist:'Wu Tang Clan',
    album:'Enter The WuTang'},
    {artist:'Wu Tang Clan',
    album:'WuTang Forever'},
]

const producers =[
    {name:'RZA',
     group:'WuTang Productions'},
    {name:'True Master',
    group:'WuTang Productions'},
    {name:'Mathematics',
    group:'WuTang Productions'},
  
]

const affiliates =[
    {name: 'Redman',
     association:'11th member of WuTang'},
     {name: 'Nas',
       association:'Unofficial 12th memeber of Wu Tang'},
       {name: 'Killa Priest',
       association:'Wu Tang affiliate'},
       {name: 'La The Darkman',
       association:'Wu Tang affiliate'},
       {name: 'Shaheim',
       association:'Wu Tang affiliate'}
]


app.get("/albums", (req, res) =>{
    res.send(albumsProduced);  
});
app.get("/producers", (req, res) =>{
    res.send(producers); 
});

app.get("/affiliates", (req, res) =>{
        res.send(affiliates);  
});
app.listen(3000, ()=>{

    console.log("App is listening");

});