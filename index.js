const express=require('express');
const app=express();
const session=require('express-session');

var socket=require('socket.io');

const MongoDBStore=require('connect-mongodb-session')(session);
const path=require('path');
var csrf=require('csurf');
var EMail;
var csrfprotection=csrf();
const nodemailer=require('nodemailer');
const bodyParser=require('body-parser');
const Add_product=require('./controller/Add_product.js');
const passportx=require('passport');
const passport=require('./modal/passport.js');
const order=require('./controller/Add_product.js');
const Admin_product=require('./controller/Add_product.js');
const cart=require('./controller/Add_product.js');
const product=require('./controller/Add_product.js');
const shop=require('./controller/Add_product.js');
const home=require('./controller/Add_product.js');
const signup=require('./controller/Add_product.js');
const add_product=require('./controller/Add_product.js');
var texsting=require('./index.js');

var mongoConnect=require('./util/database.js').mongoConnect;
var products=require('./modal/all_file_data.js');//product data
var User=require('./modal/user.js');
var Cart=require('./modal/cart.js');//cart
// var port=process.env.PORT ||5060;
app.set("view engine","pug");
app.set("views","view");

var store = new MongoDBStore({
  uri: 'mongodb+srv://DARSHITgajjar:Zxcvb@123@cluster0-sjkiq.mongodb.net/gajju?retryWrites=true',
  collection: 'mySessions',
});
app.use(session({
	secret:'Gajjar darshit Hasmukhbhai',/*any text given sigin time e hash code ma hash code rupe cookie ma te store te thase production ma long string hovi joie*/
	resave:false,/*aa em batave upcoming req ma te session te save thato nathi*/
	saveUninitialized:false,/*the session cookie will not be set on the browser unless the session is modified.*/
	store:store,
	// cookie:{
	// 	maxAge:50000,
	// }
}));




// app.use(csrfprotection);//csrf protected website
app.use(passportx.initialize());
app.use(passportx.session());


app.use("/socket",express.static(path.join(__dirname,"socketIo/")));
app.use("/mdB",express.static(path.join(__dirname,"mdBootstrap/")));
app.use("/md",express.static(path.join(__dirname,"MDBPro/")));
app.use("/css",express.static(path.join(__dirname,"css/css/")));
app.use("/bootstrap",express.static(path.join(__dirname,"node_modules/bootstrap/dist/css/")));
app.use("/bootstrap-js",express.static(path.join(__dirname,"node_modules/bootstrap/dist/js/")));
app.use("/jquery",express.static(path.join(__dirname,"node_modules/jquery/dist/")));
app.use("/anime-js",express.static(path.join(__dirname,"node_modules/anime/")));
app.use('/notification',express.static(path.join(__dirname,"node_modules/toastr/")));
app.use(bodyParser.urlencoded({extended:true}));

//social service//Gajjar ready to rock or not
app.get('/passport-google',passportx.authenticate('google',{
	scope:['email'],
}));
app.get('/github',passportx.authenticate('github'));
app.get('/instagramx',passportx.authenticate('instagram'));

app.post("/signup-enter",Add_product.signup_enter_controller);

app.post("/add_product_data",csrfprotection,Add_product.add_product_data_controller);
app.get("/Admin_product",csrfprotection,Admin_product.admin_product_controller);
app.get("/Admin_product/:id",csrfprotection,Admin_product.admin_edit_product_controller);
app.post("/admin_product_update_data/:Id",csrfprotection,Admin_product.admin_update_product_controller);
app.get("/Admin_delete_product/:iid",csrfprotection,Admin_product.admin_delete_product_controller);
let sk=215;

app.get("/chat",csrfprotection,add_product.chat);

app.get("/signUp",signup.SignUp_controller);
app.get("/order",csrfprotection,order.order_controller);
app.get("/Add_product",csrfprotection,add_product.add_product_controller);
app.post("/Add_product",add_product.add_products_controller);
app.get("/cart",csrfprotection,cart.cart_controller);
app.post("/Cart",csrfprotection,cart.carts_controller);
app.get("/Carts",csrfprotection,cart.cart_show_controller);//change
app.get("/LOGOUT",csrfprotection,Add_product.Logout_controller);//change
app.post("/Cart/:deleteId",csrfprotection,cart.carts_delete_controller);
app.get("/mypassword",add_product.social_service);
app.post('/socialservice_enter',add_product.social_service_signup);
//serializeUser and deserializeUser basically use for session create and destory so identify unique user
//serialize call when user click 

passportx.serializeUser(function(user, done) {
  done(null, user);
})
passportx.deserializeUser(function(user, done) {
  done(null, user);
});


app.get('/gajjurock', 
  passportx.authenticate('google'),
  (req,res)=>{
    
    res.redirect('/mypassword');
  });
app.get('/instagram', 
  passportx.authenticate('instagram'),
  (req,res)=>{

    res.redirect('/mypassword');
  });

app.get('/gajjurocks',passportx.authenticate('github'),
  (req,res)=>{
    // Successful authentication, redirect home.
    // console.log('hello->',EMail);
    res.redirect('/mypassword');
  });
app.get('/instagram', 
  passportx.authenticate('instagram'),
  (req,res)=>{
    // Successful authentication, redirect home.
    // console.log('hello->',EMail);
    res.redirect('/');
  });
// app.use('/gajjurock',passportx.authenticate('google',{
// 	successRedirect: '/',failureRedirect: '/login' 
// },(req,res,next)=>{
// 	res.redirect('/');
// }));

app.get("/product",csrfprotection,product.products_controller);
app.get("/product/:productId",csrfprotection,product.product_controller);
app.get("/cart_redirect",csrfprotection,cart.carts_redirect_controller);
app.get("/shop",csrfprotection,shop.shop_controller);

app.get("/",home.home_controller);
app.use((req,res,next)=>{
	res.status(404).render("404",{error:"url is wrong"});
})
var port=process.env.PORT ||4040;
var server;
mongoConnect(() => {
    server=app.listen(port, (wer) => console.log("i am new"));
    var io=socket(server);
    console.log(io);  
    io.on('connection',(socket)=>{
      console.log('Gajjar I am calling for chat',socket.id);
      socket.on('chat',(data)=>{
        console.log('->>>>',data);
        io.sockets.emit('chat',data);
      });
    });  
});


