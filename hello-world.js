console.log("hello world")

// create server 

const http = require ("http")

const server = http.createServer((req, res)=>{
    res.end("<h1>Hello Node!!!! from Azer</h1> <p>paragrph</p>")
})

server.listen(5000, (err)=>{
    if (err) {
        console.log(err)
    }else {
        console.log("ok")
    }
})

// create file 


const fs = require ("fs")

fs.writeFile( "welcome.txt",  "hello node", (err)=>{
    if(err) {
        console.log(err)
    }else{
        console.log("file created")
    }
})


fs.readFile("welcome.txt","utf-8" ,(err, data)=>{
    if(err) {
        console.error(err)
    }else{
        console.log( "data : ",  data)
    }
})


// generate password 

const genarate = require("generate-password")


const pass = genarate.generate({
    numbers : true, 
    symbols : false, 
    uppercase : true,
    length : 20,
})

console.log( "this password : ",  pass)


// email sender 


const nodemailer = require ("nodemailer")


const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : "oussamaelkadhi1@gmail.com",
        pass : "uwjk eivf hmir juep"
    }
})

const optionMails = {
    from : "",
    to : "",
    subject : "test from node",
    text : "hello guys"
}

transporter.sendMail(optionMails, (err, res)=>{
    if(err){
        console.error(err)
    }else{
        console.log(res)
    }
})