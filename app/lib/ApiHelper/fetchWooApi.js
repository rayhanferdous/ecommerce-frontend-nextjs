export const fetchWooApi = async (
  endpoint,
  method = "GET",
  data = null,
  params
) => {
  const url = `${process.env.BASE_API}${endpoint}`;
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${btoa(
        `${process.env.USER_NAME}:${process.env.PASSWORD}`
      )}`,
    },
  };

  return await fetch(url, options);
};
