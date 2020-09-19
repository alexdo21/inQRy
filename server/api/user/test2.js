const {
    createUser,
    getUserByUserEmail,
    checkIn,
    getEntriesByUserId,
    getLocationById,
    getEntriesAroundLocationTime,
    consoleCheck
  } = require("./user.service");
   

  let mo = {
    userId: "mo@email",
    locationId: "location1",
    time: "2018-04-29 11:20:31.557", //SHOULD HIT
  };
  let bob = {
    userId: "bob@email",
    locationId: "location2",
    time: "2018-04-29 9:50:30.557", //SHOULD HIT
  };
  let neal = {
    userId: "neal@email",
    locationId: "location3",
    time: "2018-04-29 7:45:30.557", //SHOULD NOT
  };
  let doe = {
    userId: "do@email",
    locationId: "location4",
    time: "2018-04-29 10:30:30.557", //CORONAMAN
  };
  let zach = {
    userId: "zach@email",
    locationId: "location5",
    time: "2018-04-29 8:30:30.557", //SHOULD NOT
  };
   
/*   checkIn(mo);
  checkIn(bob);
  checkIn(neal);
  checkIn(doe);
  checkIn(zach);
   
  setTimeout(() => {
    console.log("Updating DB....");
  }, 3000); */
   
  let req1 = {
    body: {
      userId: "do@email",
      locationId: "location4",
      time: "2018-04-29 10:30:30.557",
    },
  };

  consoleCheck("Mo");

  