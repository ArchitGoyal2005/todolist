"use strict";

const form = document.querySelector("form");
const input = document.querySelector("input");
const tasks = document.querySelector(".task-container");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!input.value) return alert("Please enter a task");
  const html = `
  <div class="task">
  <input class="value" value="${input.value}" type="text" readonly></input>
  <button class="edit">Edit</button>
  <button class="delete">Delete</button>
  </div>
  `;
  tasks.insertAdjacentHTML("afterbegin", html);
  input.value = " ";
});

tasks.addEventListener("click", function (e) {
  const btn = e.target;
  console.log(e.target);

  console.log(btn);
  if (btn.classList.contains("delete")) {
    if (confirm("Do you really want to delete?")) {
      btn.closest(".task").remove();
    }
  }
  if (btn.classList.contains("edit")) {
    const a = btn.closest(".task").children[0];
    if (btn.innerText.toLowerCase() === "edit") {
      btn.innerText = "Save";
      a.removeAttribute("readonly");
      a.focus();
    } else {
      a.setAttribute("readonly", "readonly");
      btn.innerText = "Edit";
    }
  }
});
