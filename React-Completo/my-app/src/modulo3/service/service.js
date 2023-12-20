export async function getProduct(itemApi) {
  let url = `https://ranekapi.origamid.dev/json/api/produto/${itemApi}`;

  try {
    const response = await fetch(url);

    return response;
  } catch (error) {
    console.error("Error: ", error);
  }
}
