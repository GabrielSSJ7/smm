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
    app.route("/subscribe").all(app.config.passport.authenticate()).post(app.components.pages.follow);
    app.route("/getallsubscribers").all(app.config.passport.authenticate()).get(app.components.pages.getAllSubscribers);
    app.route("/getsubscribedpagesforchoosepage").all(app.config.passport.authenticate()).get(app.components.pages.searchPageSubscribed);
    app.route("/searchPageForPost").all(app.config.passport.authenticate()).get(app.components.pages.searchPageForPost);
    //app.route("/createpost").all(app.config.passport.authenticate()).post(app.components.post.createPost);

    app.route("/createpostuser").all(app.config.passport.authenticate()).post(app.components.post.createPostUser);
    app.route("/createpostuserpage").all(app.config.passport.authenticate()).post(app.components.post.createPostUserPage);
    app.route("/createpostmemepage").all(app.config.passport.authenticate()).post(app.components.post.createPostMemePage);

    app.route("/updownvote").all(app.config.passport.authenticate()).post(app.components.post.upDownVotePost);
    app.route("/comment").all(app.config.passport.authenticate()).post(app.components.post.insertUpdateDeleteComment);
    app.route("/fetchcomments").get(app.components.post.fetchComments);
    app.route("/view").all(app.config.passport.authenticate()).post(app.components.post.viewPost);
    app.route("/allviews").all(app.config.passport.authenticate()).get(app.components.post.allViewsOfPost);
    app.route("/postdetails").all(app.config.passport.authenticate()).get(app.components.post.postDetails);

    app.route("/results").get(app.components.pages.searchMemePage);
    app.route("/resultsup").get(app.components.pages.searchUserPage);
    app.route("/searchPage").post(app.components.post.searchByPage);

    app.route("/searchBar").post(app.components.post.searchBar);

    app.route("/searchadminforpage").all(app.config.passport.authenticate()).get(app.components.pages.searchUsersForAdminPage);


    app.route("/loadCats").get(app.components.post.loadCats)
}