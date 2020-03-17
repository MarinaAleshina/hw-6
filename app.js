const request = {
  get(url, callback) {
    try {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);

      xhr.addEventListener("load", function() {
        let response = JSON.parse(xhr.responseText);
        callback(response);
      });
      xhr.addEventListener("error", () => {
        callback("error");
      });
      xhr.send();
    } catch (e) {
      callback(e);
    }
  }
};

const btnClick = document.querySelector(".btn-click");
btnClick.addEventListener("click", userList);

function userList() {
  request.get("https://jsonplaceholder.typicode.com/users", getUsers);
  btnClick.removeEventListener("click", userList);
  return getUsers;
}
const output = document.querySelector(".output");
let div = document.querySelector(".about-user");

function getUsers(user) {
  let ul = document.createElement("ul");
  ul.classList.add("ul");

  output.appendChild(ul);

  user.forEach(key => {
    let li = document.createElement("li");
    li.classList.add("user");
    li.innerHTML = `${key.name}`;
    ul.appendChild(li);
    li.addEventListener("click", renderUser);
  });

  renderUser(user);
}

function renderUser(user) {
  let array = user;
}
