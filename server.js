const express=require('express')
let app=express()

app.use(express.static(__dirname+ '/public'));

app.get('/',function(request,response){
    response.send('Hello');

})

// Start the server on port 8000
app.listen(8000)
 



