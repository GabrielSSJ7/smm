module.exports = app => 
{
    // ~/components/user.js
    app.route("/signin").post(app.components.user.signin);
    app.route("/login").post(app.components.user.login);
    app.route("/signin-with-facebook").post(app.components.user.signinWithFacebook);
    app.route("/validateToken").post(app.components.user.validateToken);
    app.route("/buscaapelido/:nickname").get(app.components.user.buscaApelido);
    app.route("/temapelido").all(app.config.passport.authenticate()).post(app.components.user.temApelido);
    app.route("/adicionaapelido").all(app.config.passport.authenticate()).post(app.components.user.adicionaApelido);

    //  ~/components/pages.js
    app.route("/createnewmemepage").all(app.config.passport.authenticate()).post(app.components.pages.createNewMemePage);
    app.route("/createnewuserpage").all(app.config.passport.authenticate()).post(app.components.pages.createNewUserPage);
    app.route("/subscribe").all(app.config.passport.authenticate()).post(app.components.pages.follow);
    app.route("/getallsubscribers").get(app.components.pages.getAllSubscribers);
    app.route("/getsubscribedpagesforchoosepage").all(app.config.passport.authenticate()).get(app.components.pages.searchPageSubscribed);
    app.route("/searchPageForPost").all(app.config.passport.authenticate()).get(app.components.pages.searchPageForPost);
    //app.route("/createpost").all(app.config.passport.authenticate()).post(app.components.post.createPost);
    app.route("/results").get(app.components.pages.searchMemePage);
    app.route("/resultsup").get(app.components.pages.searchUserPage);
    app.route("/searchadminforpage").all(app.config.passport.authenticate()).get(app.components.pages.searchUsersForAdminPage);

    // ~/components/post/post.js
    app.route("/createpostuser").all(app.config.passport.authenticate()).post(app.components.post.post.createPostUser);
    app.route("/createpostuserpage").all(app.config.passport.authenticate()).post(app.components.post.post.createPostUserPage);
    app.route("/createpostmemepage").all(app.config.passport.authenticate()).post(app.components.post.post.createPostMemePage);
    app.route("/updownvote").all(app.config.passport.authenticate()).post(app.components.post.post.upDownVotePost);
    app.route("/comment").all(app.config.passport.authenticate()).post(app.components.post.post.insertUpdateDeleteComment);
    app.route("/fetchcomments").get(app.components.post.post.fetchComments);
    app.route("/view").all(app.config.passport.authenticate()).post(app.components.post.post.viewPost);
    app.route("/allviews").all(app.config.passport.authenticate()).get(app.components.post.post.allViewsOfPost);
    //app.route("/postdetails").all(app.config.passport.authenticate()).get(app.components.post.postDetails);
    app.route("/postdetails").get(app.components.post.post.postDetails);
    app.route("/loadCats").get(app.components.post.post.loadCats)

    // ~/components/post/posts.js
    app.route("/searchPage").post(app.components.post.posts.searchByPage);
    app.route("/searchBar").post(app.components.post.posts.searchBar);



    
}