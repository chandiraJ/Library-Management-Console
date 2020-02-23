const Express = require("express");

const LoginRoute = require('./Routes/loginRoute')
const HealthRoute = require("./Routes/Health");
const BookRoutes = require("./Routes/bookRoutes");
const MemberRoutes = require("./Routes/memberRoutes");
const IssueBookRoutes = require("./Routes/issueBookRoutes");

const app =  Express();

app.use('/login', LoginRoute)
app.use('/health', HealthRoute);
app.use('/book', BookRoutes);
app.use('/member', MemberRoutes);
app.use('/issue', IssueBookRoutes);

module.exports = app;