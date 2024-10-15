// Exercise #5
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

async function getProfileJohn() {
  try {
    const profile = await getJohnProfile();
    console.log(profile);
  } catch (error) {
    console.log(`errorCode: ${error.errorCode}`);
    console.log(`message: ${error.message}`);
  }
}
getProfileJohn();
