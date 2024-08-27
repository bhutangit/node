const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h2>My Name is Node JS Server</h2>')
})
app.get('/about', function (req, res) {
    res.json({
        "name":"Gaurav",
        "email":"a@a.com",
        "phone":"9987877766"
    })
  })

app.listen(8080,function(){
    console.log("Server is running at 3000")
})