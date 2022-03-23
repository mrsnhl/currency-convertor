const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

function valueOfPi(request, response) {
    console.log('Pi');
    response.send(`3.14159265358979323846`);
}

function valueOfE(request, response) {
    console.log('E');
    response.send(`2.71828182845904`);
}

app.get('/pi', valueOfPi);
app.get('/e', valueOfE);

function serverStarted(port) {
    console.log('Server started at port ' + port);
}

app.listen(4000, function() { 
    serverStarted(4000)
});