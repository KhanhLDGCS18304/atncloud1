let express =require('express');
let app = express();
var http = require('http');
const port = process.env.port || 5500

//Set public startic folder
app.use(express.static(__dirname+'/public'));

// use view enginear
let expressHbs= require('express-handlebars');
let hbs =expressHbs.create({
    extname: 'hbs',
    defaultLayout:'layout',
    layoutsDir:__dirname+'/views/layouts/',
    partialsDir:__dirname+'/views/partials'
});
app.engine('hbs',hbs.engine);
app.set('view engine','hbs');

// define your routes hear
app.get('/',(req,res) => {
    res.render('index')
});

app.get('/:page',(req,res) =>{
    let banners={
        blog:'Our Blog',
        category:'Shop Category',
        cart:'Shopping Cart',
        checkout:'Product Checkout',
        confirmation:'Order Confirmation',
        contact:'Contact Us',
        login:'Login / Register',
        register:'Register',
        singleblog:'Blog Details',
        singleproduct:'Shop Single',
        trackingorder:'Order Tracking'

    };
    let page= req.params.page;
res.render(page, {banner:banners[page]});
});
// set server port and start server
app.set('port',process.env.PORT ||5500);
app.listen(app.get('port'),() =>{
    console.log(`Server are running at port ${app.get('port')}`)
});
