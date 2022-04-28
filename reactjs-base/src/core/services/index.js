// get all
const getProductList = async (url) => {
  try {
    let res = await fetch(url, {
        method: "GET"
    });
    let dataUsers = await res.json();
    return dataUsers;
  } catch (error) {
    console.log(error);
  }
}

export {getProductList};

