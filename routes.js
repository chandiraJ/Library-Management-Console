const Express = require("express");
const HealthRoute = require("./Routes/Health");

const app =  Express();

app.use('/health', HealthRoute);

module.exports = app;