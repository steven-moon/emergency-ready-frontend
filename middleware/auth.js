import Vue from 'vue'

export default function(context) {
   // console.log("[Middleware]  Auth");
    if(process.env.USE_CHAIN){
        if(process.client) {
            if (!context.app.$Web3.isConnected()) {
                console.log("wallet is not connected");
                context.redirect("/auth/connect-wallet");
            } else {
                console.log("Wallet is connected")
            }
        }
    }else {
        if (!context.store.getters.isUserLoggedIn) {
            context.redirect("/auth/login");
            //console.log("user not logged in")
            //console.log("context.store.getters.isUserLoggedIn: " + context.store.getters.isUserLoggedIn);
        }
    }
}
