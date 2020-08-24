export const signUpByAction = (user) => {
    console.log(user)
    return {
      type: "SIGN_UP",
      payload: user,
    };
  };
  export const getAllUsersAction = (users) => {
    console.log(users)
    return {
      type: "ALL_USERS",
      payload: users,
    };
  };