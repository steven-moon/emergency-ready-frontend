export default function(context) {
   // console.log("[Middleware]  Auth");
    if(process.env.USE_CHAIN){
        if (!context.store.getters.isWalletConnected) {
            console.log("wallet is not connected");
        }else{
            console.log("Wallet is connected")
        }
    }else {
        if (!context.store.getters.isUserLoggedIn) {
            context.redirect("/auth/login");
            //console.log("user not logged in")
            //console.log("context.store.getters.isUserLoggedIn: " + context.store.getters.isUserLoggedIn);
        }
    }
}
