export default function(context) {
   // console.log("[Middleware]  Auth");
    if (!context.store.getters.isUserLoggedIn) {
        context.redirect("/auth/login");
      //console.log("user not logged in")
      //console.log("context.store.getters.isUserLoggedIn: " + context.store.getters.isUserLoggedIn);
    }
}
