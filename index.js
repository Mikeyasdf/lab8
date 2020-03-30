const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", function(req, res){
    res.render("home");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("Express server is running...");
});