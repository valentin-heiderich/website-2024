import { io } from "https://cdn.socket.io/4.7.4/socket.io.esm.min.js";const socket = io();
let links_btn = document.getElementById("links_btn");
let home_btn = document.getElementById("home_btn");
let container = document.getElementById("container");
function toggle_visibility(element) {element.style.visibility = element.style.visibility === "hidden" ? "visible" : "hidden";}
links_btn.addEventListener("click", () => {container.style.visibility="visible";});
home_btn.addEventListener("click", () => {container.style.visibility="hidden";});
toggle_visibility(container);
socket.on("users", (active_users) => {document.getElementById("active_users").innerHTML = active_users;});