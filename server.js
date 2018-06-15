const express=require('express');
const hbs=require('hbs');

const app=express();

app.use(express.static(__dirname+'/public'));
app.set('view engine', 'hbs');

app.get('/', (request, response)=>{
    //response.send('<h1>Heyo!</h1>');
    response.render('welcome.hbs', {
        title:"oof",
        text:"double oof"
    });
});

//------------------------------------------------

app.get('/about', (request, response)=>{  
/*o '/about' é para indicar para onde se quer ir, 
como outros sites, mas só que é feito na consola em vez de no browser*/
    response.render('welcome.hbs',{
        title:"another oof",
        text:"another double oof"
    });
});

app.get('/corachao', (request, response)=>{
    date=new Date().toString();
    
    response.render('another_one.hbs',{
        text: date
    });
});

app.listen(3000);