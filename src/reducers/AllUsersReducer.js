const AllUsersReducer = function AllUsersReducer(state = null, action) {
  var users = [
    {
      firstName: "Reena",
      lastName: "ET",
      userName: "reenaet",
      email: "reena@gmail.com",
      password: "reena",
      id: 1,
    },
    {
      firstName: "Swathi",
      lastName: "E T",
      userName: "swathiet",
      email: "swathiet@gmail.com",
      password: "swathiet",
      id: 2,
    },
    {
      firstName: "Anoop",
      lastName: "Rahul",
      userName: "anooprahul",
      email: "anooprahul@gmail.com",
      password: "anooprahul",
      id: 3,
    },
    {
      firstName: "Asha",
      lastName: "T",
      userName: "Asha",
      email: "asha@gmail.com",
      password: "asha",
      id: 4,
    },
  ];

  switch (action.type) {
    case "SIGN_UP":
      console.log(state);
      let newUser = [
        {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          userName: action.payload.userName,
          email: action.payload.email,
          password: action.payload.password
         
        },
        ...state,
      ];
      return newUser;
  }

  return users;
};
export default AllUsersReducer;
