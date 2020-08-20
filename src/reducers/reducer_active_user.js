export default function (state = null, action) {
  //right now it has only one action but  normaly many so switch v use here
console.log("reducer")
  switch (action.type) {
    case "USER_CLICKED":
      return action.payload;
      break;
  

  }
  return state;
  
}
