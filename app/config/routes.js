module.exports = app => 
{
    app.route("/signin").post(app.components.user.signin);
    app.route("/login").post(app.components.user.login);
    app.route("/signin-with-facebook").post(app.components.user.signinWithFacebook);
    app.route("/validateToken").post(app.components.user.validateToken);
    app.route("/buscaapelido/:nickname").get(app.components.user.buscaApelido);
    app.route("/temapelido").all(app.config.passport.authenticate()).post(app.components.user.temApelido);
    app.route("/adicionaapelido").all(app.config.passport.authenticate()).post(app.components.user.adicionaApelido);


    app.route("/createnewmemepage").all(app.config.passport.authenticate()).post(app.components.pages.createNewMemePage);
    app.route("/createnewuserpage").all(app.config.passport.authenticate()).post(app.components.pages.createNewUserPage);
    app.route("/createpost").all(app.config.passport.authenticate()).post(app.components.post.createPost);

    app.route("/results").get(app.components.pages.searchMemePage);
    app.route("/resultsup").get(app.components.pages.searchUserPage);
    app.route("/searchPage").post(app.components.post.searchByPage);

    app.route("/searchBar").get(app.components.post.searchBar);

    app.route("/searchadminforpage").all(app.config.passport.authenticate()).get(app.components.pages.searchUsersForAdminPage);
}