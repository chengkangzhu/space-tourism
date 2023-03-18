$("#navbar li a").click(function () {
	// Remove active class from all nav links
	$("#navbar li a").removeClass("active");
	// Add active class to clicked nav link
	$(this).addClass("active");
});

// function change_destination(destination) {
// 	if (destination != undefined) {
// 		//change active state
// 		document
// 			.querySelectorAll(".destination-content-navbar li a")
// 			.forEach((i) => i.classList.remove("active"));
// 		document.getElementById(destination).classList.add("active");

// 		//change content
// 		for (let i in data["destinations"]) {
// 			if (destination == data["destinations"][i]["name"]) {
// 				document.querySelector(".destination-name").innerHTML =
// 					data["destinations"][i]["name"];
// 				document.querySelector(".destination-info").innerHTML =
// 					data["destinations"][i]["description"];
// 				document.querySelector(".destination-distance").innerHTML =
// 					data["destinations"][i]["distance"];
// 				document.querySelector(".destination-time").innerHTML =
// 					data["destinations"][i]["travel"];
// 				document
// 					.querySelector(".destination-image")
// 					.setAttribute(
// 						"src",
// 						data["destinations"][i]["images"]["png"]
// 					);
// 			}
// 			//change active state
// 			document
// 				.querySelectorAll(".small-dots")
// 				.forEach((i) => i.classList.remove("active"));
// 			document.getElementById(destination).classList.add("active");
// 		}
// 	}
// }

// function change_crew(role) {
// 	if (role != undefined) {
// 		//loop data , change content
// 		for (let i in data["crew"]) {
// 			if (role == data["crew"][i]["role"]) {
// 				setTimeout(() => {
// 					document.querySelector(".crew-role").innerHTML =
// 						data["crew"][i]["role"];
// 					document.querySelector(".crew-name").innerHTML =
// 						data["crew"][i]["name"];
// 					document.querySelector(".crew-info").innerHTML =
// 						data["crew"][i]["bio"];
// 					document
// 						.querySelector(".crew-image")
// 						.setAttribute("src", data["crew"][i]["images"]["webp"]);
// 				}, 100);
// 			}
// 			//change active state
// 			document
// 				.querySelectorAll(".small-dots")
// 				.forEach((i) => i.classList.remove("active"));
// 			document.getElementById(role).classList.add("active");
// 		}
// 	}
// }
// function change_technology(technology) {
// 	if (technology != undefined) {
// 		//loop data , change content
// 		for (let i in data["technology"]) {
// 			if (technology == data["technology"][i]["name"]) {
// 				setTimeout(() => {
// 					document.querySelector(".technology-name").innerHTML =
// 						data["technology"][i]["name"];
// 					document.querySelector(".technology-info").innerHTML =
// 						data["technology"][i]["description"];

// 					document
// 						.querySelector(".technology-image-portrait")
// 						.setAttribute(
// 							"src",
// 							data["technology"][i]["images"]["portrait"]
// 						);
// 					document
// 						.querySelector(".technology-image-landscape")
// 						.setAttribute(
// 							"src",
// 							data["technology"][i]["images"]["landscape"]
// 						);
// 				}, 100);
// 			}
// 			//change active state
// 			document
// 				.querySelectorAll(".technology-navtext")
// 				.forEach((i) => i.classList.remove("active"));
// 			document.getElementById(technology).classList.add("active");
// 		}
// 	}
// }

//responsive functions
//navbar menu
// let navbar = document.querySelector("#navbar");
// document.querySelectorAll(".navbar-icon-js").forEach((link) => {
// 	link.addEventListener("click", function () {
// 		navbar.classList.toggle("hide-navbar");
// 	});
// });
// document.querySelectorAll("#navbar li a").forEach((link) => {
// 	link.addEventListener("click", function () {
// 		navbar.classList.toggle("hide-navbar");
// 	});
// });

function change_destination(destination) {
	if (destination !== undefined) {
		// change content
		var dest = data.destinations.find((d) => d.name === destination);
		$(".destination-name").html(dest.name);
		$(".destination-info").html(dest.description);
		$(".destination-distance").html(dest.distance);
		$(".destination-time").html(dest.travel);
		$(".destination-image").attr("src", dest.images.png);

		// change active state
		$(".destination-content-navbar li a").removeClass("active");
			$("#" + destination).addClass("active");

	}
}
function change_crew(role) {
	if (role != undefined) {
		let crew = data["crew"].find((c) => c.role === role);
		if (crew) {
			setTimeout(() => {
				$(".crew-role").html(crew.role);
				$(".crew-name").html(crew.name);
				$(".crew-info").html(crew.bio);
				$(".crew-image").attr("src", crew.images.webp);
			}, 100);

			document
				.querySelectorAll(".small-dots")
				.forEach((i) => i.classList.remove("active"));
			document.getElementById(role).classList.add("active");
		}
	}
}

function change_technology(technology) {
	if (technology != undefined) {
		let tech = data["technology"].find((t) => t.name === technology);
		if (tech) {
			setTimeout(() => {
				$(".technology-name").html(tech.name);
				$(".technology-info").html(tech.description);
				$(".technology-image-portrait").attr(
					"src",
					tech.images.portrait
				);
				$(".technology-image-landscape").attr(
					"src",
					tech.images.landscape
				);
			}, 100);

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
	});

let navbar = $("#navbar");
$(".navbar-icon-js").click(function () {
	navbar.toggleClass("hide-navbar");
});

$("#navbar li a").click(function () {
	navbar.toggleClass("hide-navbar");
});
