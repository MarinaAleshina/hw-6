const request = {
  get(url, callback) {
    try {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);

      xhr.addEventListener("load", function() {
        let response = JSON.parse(xhr.responseText);
        callback(response);
      });
      xhr.send();
    } catch {
      callBack(error);
    }
  }
};
request.get("https://jsonplaceholder.typicode.com/users", showList);
function showList(el) {
  const btn = document.querySelector(".btn-click");

  console.log(el);

  btn.addEventListener("click", () => {
    const ul = document.createElement("ul");
    const output = document.querySelector(".output");
    ul.classList.add("ul");
    // output.appendChild(ul);
    el.forEach(key => {
      let li = document.createElement("li");
      li.classList.add("user");
      li.innerHTML = `${key.name}`;
      ul.appendChild(li);
      li.addEventListener("click", foo);
      function foo(e) {
        const newEl = document.createElement("div");
        newEl.classList.add("about-user", "js-about-user");
        newEl.innerHTML += `username: ${key.name} <br/>`;
        newEl.innerHTML += `email: ${key.email} <br/>`;
        newEl.innerHTML += `website: ${key.website} <br/>`;
        const wrap = document.querySelector(".wrapper");
        wrap.appendChild(newEl);
      }
    });
    output.appendChild(ul);
  });
}
