let data = {};
let device;
let sectionx = "home";

function defineDevice() {
	if (window.innerWidth <= 480) {
		device = "mobile";
	} else if (window.innerWidth <= 1024) {
		device = "tablet";
	} else {
		device = "desktop";
	}
}
defineDevice();

window.addEventListener("resize", function () {
	defineDevice();

	if (document.querySelector("#body")) {
		document.querySelector(
			"#body"
		).style.backgroundImage = `url(/assets/${sectionx}/background-${sectionx}-${device}.jpg)`;
	}
});

function change_bg(section) {
	sectionx = section;
	//change background
	if (section != undefined) {
		document.querySelector(
			"#body"
		).style.backgroundImage = `url(/assets/${section}/background-${section}-${device}.jpg)`;
		document
			.querySelectorAll("#navbar li a")
			.forEach((i) => i.classList.remove("active"));
		document.getElementById(section).classList.add("active");
	}

	//toggle home and iframe
	if (section == "home") {
		document.querySelector("#main").style.display = "flex";
		document.querySelector("#iframe").style.display = "none";
	} else {
		document.querySelector("#main").style.display = "none";
		setTimeout(() => {
			document
				.querySelector("#iframe")
				.setAttribute("src", `/${section}.html`);

			//iframe width change on technology page
		}, 300);
		setTimeout(() => {
			document.querySelector("#iframe").style.display = "flex";
		}, 500);
	}
}

//click logo change to
// document.querySelector('#logo').addEventListener('click',function(){change_bg('home')})

function change_destination(destination) {
	if (destination != undefined) {
		//change active state
		document
			.querySelectorAll(".destination-content-navbar li a")
			.forEach((i) => i.classList.remove("active"));
		document.getElementById(destination).classList.add("active");

		//change content
		for (let i in data["destinations"]) {
			if (destination == data["destinations"][i]["name"]) {
				document.querySelector(".destination-name").innerHTML =
					data["destinations"][i]["name"];
				document.querySelector(".destination-info").innerHTML =
					data["destinations"][i]["description"];
				document.querySelector(".destination-distance").innerHTML =
					data["destinations"][i]["distance"];
				document.querySelector(".destination-time").innerHTML =
					data["destinations"][i]["travel"];
				document
					.querySelector(".destination-image")
					.setAttribute(
						"src",
						data["destinations"][i]["images"]["png"]
					);
			}
			//change active state
			document
				.querySelectorAll(".small-dots")
				.forEach((i) => i.classList.remove("active"));
			document.getElementById(destination).classList.add("active");
		}
	}
}

function change_crew(role) {
	if (role != undefined) {
		//loop data , change content
		for (let i in data["crew"]) {
			if (role == data["crew"][i]["role"]) {
				setTimeout(() => {
					document.querySelector(".crew-role").innerHTML =
						data["crew"][i]["role"];
					document.querySelector(".crew-name").innerHTML =
						data["crew"][i]["name"];
					document.querySelector(".crew-info").innerHTML =
						data["crew"][i]["bio"];
					document
						.querySelector(".crew-image")
						.setAttribute("src", data["crew"][i]["images"]["png"]);
				}, 100);
			}
			//change active state
			document
				.querySelectorAll(".small-dots")
				.forEach((i) => i.classList.remove("active"));
			document.getElementById(role).classList.add("active");
		}
	}
}

function change_technology(technology) {
	if (technology != undefined) {
		//loop data , change content
		for (let i in data["technology"]) {
			if (technology == data["technology"][i]["name"]) {
				setTimeout(() => {
					document.querySelector(".technology-name").innerHTML =
						data["technology"][i]["name"];
					document.querySelector(".technology-info").innerHTML =
						data["technology"][i]["description"];
					document
						.querySelector(".technology-image")
						.setAttribute(
							"src",
							data["technology"][i]["images"]["portrait"]
						);
				}, 100);
			}
			//change active state
			document
				.querySelectorAll(".technology-navtext")
				.forEach((i) => i.classList.remove("active"));
			document.getElementById(technology).classList.add("active");
		}
	}
}

fetch("./data.json")
	.then(function (resp) {
		return resp.json();
	})
	.then(function (d) {
		data = d;
		console.log(d);
	});

$(document).ready(function () {
	//responsive functions
	//navbar menu
	let navbar = document.querySelector("#navbar");
	document.querySelectorAll(".navbar-icon-js").forEach((link) => {
		link.addEventListener("click", function () {
			navbar.classList.toggle("hide-navbar");
		});
	});
	document.querySelectorAll("#navbar li a").forEach((link) => {
		link.addEventListener("click", function () {
			navbar.classList.toggle("hide-navbar");
		});
	});
});
