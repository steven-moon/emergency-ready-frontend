export default function(context) {
  //console.log("[Middleware] Check Auth");
  //console.log(context)
  if(process.env.USE_CHAIN){
    //do nothing
  }else {
    context.store.dispatch("initAuth", context.req);
  }
}


