const UI = require("./ui");
const Github = require("./github");
const { client_id, client_secret } = require("./config.json");

const ui = new UI();
const github = new Github(client_id, client_secret);

const userForm = document.getElementById("userForm");
userForm.addEventListener("submit", (e) => {
  const textSearch = document.getElementById("textSearch").value;
  if (textSearch != "") {
    github.fetchUser(textSearch).then((data) => {
      if (data.res.message === "Not Found") {
        ui.showMessage("User Not Found", "alert alert-danger col-md-12 mt-3");
      } else {
        console.log(data.res);
        ui.showProfile(data.res);
        ui.showRepositories(data.repores);
      }
    });
  }
  e.preventDefault();
});
