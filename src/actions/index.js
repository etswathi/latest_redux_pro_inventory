export const selectUser = (user) => {
  console.log("you clicked on" + user.first);

  return {
    type: "USER_CLICKED",
    payload: user,

  };
 
};
//this whole fn is an action creator