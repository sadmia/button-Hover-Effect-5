"use strict";



let bg_1 = document.getElementById("bg-1");
let bg_2 = document.getElementById("bg-2");


let text_1 = document.getElementById("text-1");
let text_2 = document.getElementById("text-2");


text_1.addEventListener("mouseenter", function() {
	text_1.style.color= "#5CACEB";
	text_2.style.color= "#fff";

	bg_2.classList.add("bg-active");
	bg_1.classList.add("bg-active-2");

})

text_2.addEventListener("mouseenter", function() {
	text_1.style.color= "#fff";
	text_2.style.color= "#5CACEB";

	bg_2.classList.remove("bg-active");
	bg_1.classList.remove("bg-active-2");

})