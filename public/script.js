import { io } from "https://cdn.socket.io/4.7.4/socket.io.esm.min.js";
const socket = io();
let links_btn = document.getElementById("links_btn");
let home_btn = document.getElementById("home_btn");
let container = document.getElementById("container");
function toggle_visibility(element) {element.style.visibility = element.style.visibility === "hidden" ? "visible" : "hidden";}
function toggle_transition_time(group){for(let _child_i in group){if(_child_i === "length") break;let _child = group[_child_i]; _child.style.transition = _child.style.transition === "all 0.5s ease 0s" ? "0s" : "0.5s";console.log(_child.style.transition);}}
links_btn.addEventListener("click", () => {container.style.visibility="visible";});
home_btn.addEventListener("click", () => {toggle_transition_time(container.children);container.style.visibility="hidden";setTimeout(() => {toggle_transition_time(container.children);}, 500);});
toggle_visibility(container);
toggle_transition_time(container.children);
socket.on("users", (active_users) => {document.getElementById("active_users").innerHTML = active_users;});