
const express = require("express");
const mongoose = require("mongoose");
const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport");
const User = require("./models/User");
const authRoutes = require("./routes/auth");
const custRoutes = require("./routes/CustomerRoute");
const orderRoutes = require("./routes/OrderRoute");
const ShippingRoutes = require("./routes/ShippingRoute")
const app = express(); 
// require("dotenv").config();

const port = 8080;

// app.use(cors());
app.use(express.json());





mongoose.connect("mongodb+srv://guptaa1607:Aryan2003@cluster0.gs0co55.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", 
         {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         }
       )
       .then((x) => {
        console.log("Connected to Mongo!");
       })
       .catch((err) => {
        console.log("Error while connecting to Mongo");
       });
 


let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisKeyIsSupposedToBeSecret";
passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    console.log(jwt_payload)
    try {
        
        const user = await User.findOne({id: jwt_payload.sub});
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        
        }
    } catch (err) {
        return done(err, false);
    }
}));


app.get("/", (req,res) => {
    
   res.send("Hello World");
});

app.use("/auth", authRoutes);
app.use("/customer",custRoutes);
app.use("/order",orderRoutes);
app.use("/shipping",ShippingRoutes);



app.listen(port, () => {
    console.log("App is running on port" + port);
})
