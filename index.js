// document.querySelector("h1").classList.add("title", "margin-30");
$("h1").addClass("title margin-30");

// document.querySelector("h1").textContent = "Title";
$("h1").text("Title");

// $("a").attr("href", "https://www.yahoo.com/");

// document.querySelector("h1").addEventListener("click", function () {
//   document.querySelector("h1").style.color = "red";
// });
$("h1").click(function () {
  $("h1").css("color", "red");
});

// for (let i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "red";
//   });
// }
$("button").click(function () {
  $("h1").css("color", "red");
});

// document.querySelector("input").addEventListener("keypress", function (e) {
//   console.log(e.key);
// });
// $("body").keypress(function (event) {
//   $("h1").text(event.key);
// });
$("body").on("keypress", function (event) {
  $("h1").text(event.key);
});

$("h1").before("<button>Before</button>");
$("h1").after("<button>After</button>");
$("h1").prepend("<button>prepend</button>");
$("h1").append("<button>append</button>");
