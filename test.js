var express = require('express');

var app=express();

app.get('/',function(request,response){
    response.send('hello world');
    //response.end();
});

app.listen(process.env.PORT);

console.log(process.env.PORT);