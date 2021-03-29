const express=require("express");

app=express();

app.use(express.static('public'));

app.get("/", (req, resp) => {
    resp.sendFile(__dirname+'public/index.html');
});

app.listen(1234);