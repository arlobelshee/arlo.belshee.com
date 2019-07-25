import React from "react";
import ReactDOM from "react-dom";
import HideWarning from "./HideWarning.jsx";
import smoothscroll from "./smoothscroll.min.js";

("use strict");

smoothscroll.polyfill();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "start"
		});
	});
});

document
	.querySelectorAll(".no-react")
	.forEach(domContainer => ReactDOM.render(<HideWarning />, domContainer));

$(document).ready(() => $(".no-react").removeClass("hidden"));
