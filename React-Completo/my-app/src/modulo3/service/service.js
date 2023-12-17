export async function getProduct(itemApi) {
  let url;

  switch (itemApi) {
    case "tablet":
      url = "https://ranekapi.origamid.dev/json/api/produto/tablet";
      break;
    case "smarthphone":
      url = "https://ranekapi.origamid.dev/json/api/produto/smartphone";
      break;
    case "notebook":
      url = "https://ranekapi.origamid.dev/json/api/produto/notebook";
      break;
    default:
      console.log("valor inválido");
  }

  try {
    const response = await fetch(url);

    return response;
  } catch (error) {
    console.error("Error: ", error);
  }
}
