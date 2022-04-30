(async () => {
  const response = await fetch(
    `https://api.allorigins.win/raw?url=${encodeURIComponent(
      "https://quack.duckduckgo.com/api/auth/waitlist/status"
    )}`
  );
  const data = await response.json();

  const date = new Date(data.timestamp * 1000).toLocaleString();

  const node = document.createElement("p");
  const textNode = document.createTextNode(
    `People that applied before ${date} have been accepted into Email Protection.`
  );
  node.appendChild(textNode);
  document.getElementById("container").appendChild(node);

  console.log(date);
})();
