const Express = require("express");

const HealthRoute = require("./Routes/Health");
const BookRoutes = require("./Routes/bookRoutes");
const MemberRoutes = require("./Routes/memberRoutes");

const app =  Express();

app.use('/health', HealthRoute);
app.use('/book', BookRoutes);
app.use('/member', MemberRoutes);

module.exports = app;