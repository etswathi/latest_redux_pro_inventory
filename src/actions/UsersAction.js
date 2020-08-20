export const signUpByAction = (user) => {
    console.log(user)
    return {
      type: "SIGN_UP",
      payload: user,
    };
  };