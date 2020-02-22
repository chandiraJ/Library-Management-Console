const Express = require("express");

const HealthRoute = require("./Routes/Health");
const BookRoutes = require("./Routes/bookRoutes");

const app =  Express();

app.use('/health', HealthRoute);
app.use('/book', BookRoutes);

module.exports = app;