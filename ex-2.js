//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

getJohnProfile()
  .then((profiles) => {
    console.log(profiles);
  })
  .catch((error) => {
    console.log(`errorCode : ${error.errorCode}`);
    console.log(`message: ${error.message}`);
  });
