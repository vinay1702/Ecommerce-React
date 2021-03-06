import userList from "./USERS.json";

export function loginAPI(payload) {
  return new Promise((resolve, reject) => {
    const userInfo = userList.users.find(
      (user) =>
        payload.email === user.email && payload.password === user.password
    );

    if (userInfo) {
      resolve(userInfo);
    } else {
      reject("User Not Found");
    }
  });
}

export async function productsAPI() {
  const products = await fetch(
    "https://fakestoreapi.com/products"
  ).then((res) => res.json());
  return products;
}
