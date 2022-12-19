let express = require("express");


let ourApp = express();
ourApp.use(express.urlencoded({extended: false}));
ourApp.get("/", function(req, res){
    res.send(`
    <form action= "/answer" method= "POST">
        <p>what color is the sky on sunny day</p>
        <input name="skyColor" autocomplete= "off">
        <button>Submit Answer</button>
    </form>
    `)
});

ourApp.post("/answer", (req, res)=>{
    if(req.body.skyColor.toUpperCase()=="BLUE"){
        res.send(`
            <p>correct</p>
            <a href="/">Back to home page</a>
        `);
    }else{
        res.send(`
            <p>wrong</p>
            <a href="/">Back to home page</a>
        `);
    }

})
ourApp.get("/answer", (req, res)=>{
    res.send("are you lost");
})
ourApp.listen(3000);