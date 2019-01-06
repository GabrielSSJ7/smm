module.exports = app => 
{
    app.route("/signin").post(app.components.user.signin);
    app.route("/login").post(app.components.user.login);
    app.route("/validateToken").post(app.components.user.validateToken);

}