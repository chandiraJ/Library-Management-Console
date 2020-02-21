const Express = require("express");
const mongoose = require("mongoose");
const BodyParser = require("body-parser");

// Imports routes collection from ./routes.
const Routes = require("./routes");

const app = Express();

// Extract the entire body of the request. Makes it easy to access request details.
app.use(BodyParser.json());

// Executes the imported module when a request hits the specified URL
app.use('/library', Routes);

// Creates a server listening on the port 8080
app.listen(8080, 'localhost', function (err) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log("Server listening port 8080");
})

//Creates the connection to the Mongo database
mongoose.connect('mongodb://libuser:libadmin123@ds029831.mlab.com:29831/librarydb', function (err) {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log("Connected to the DB");
});
