const div = document.createElement("div");
document.body.append(div);
const url = "https://type.fit/api/quotes";

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
}

function showData(data) {
  console.log(data);
  for (let i = 0; i < 10; i++) {
    const num = document.createElement("span");
    const text = document.createElement("span");
    const author = document.createElement("span");
    const br = document.createElement("br");

    num.textContent =` ${i + 1}. `;
    text.textContent = data[i].text;
    author.textContent = ` - ${data[i].author}`;


    div.append(num);
    div.append(text);
    div.append(author);
    div.append(br);

    console.log(`${data[i].text} - ${data[i].author}`);
  }
}

getData();
