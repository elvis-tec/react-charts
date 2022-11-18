export const getApi = async () => {
  const url = `http://api.simplus.kiubix.biz/api/gaday`;

  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};