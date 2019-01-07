module.exports = app => 
{
    app.route("/signin").post(app.components.user.signin);
    app.route("/login").post(app.components.user.login);
    app.route("/signin-with-facebook").post(app.components.user.signinWithFacebook);
    app.route("/validateToken").post(app.components.user.validateToken);

}