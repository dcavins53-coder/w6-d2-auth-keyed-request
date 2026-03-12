"use strict";

async function login(url) {
  const option = {
    headers:{"Content-Type":"application/json"},
    method: "POST",
    body: JSON.stringify({
      email: "cherrymoon@example.com",
      password: "Pizza58",
    }),
  };
  try {
    const res = await fetch(url, option);
    if (!res.ok) {
      throw new Error("Error in fetch login logic");
    }
    const token = await res.json();
    return token;
  } catch (error) {
    console.error(error);
  }
}
async function getData(url) {}
async function main() {
  try {
    const jwt = await login("https://north-star-b834.onrender.com/auth/login");
    console.log(jwt);
  } catch (error) {}
}
main();
