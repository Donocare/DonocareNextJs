const getUser = async (email) => {
  const res = await fetch("api/getEmployee", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  });
  const ServerResponse = await res.json();
  return ServerResponse;
};
export default getUser;
