const tagA = document.getElementById("origamid");

console.dir(tagA);

if (tagA instanceof HTMLAnchorElement) {
  console.log("Antes: ", tagA.href);

  tagA.href = tagA.href.replace("http", "https");

  console.log("Depois: ", tagA.href);
}
