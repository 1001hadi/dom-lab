let mainEl = document.querySelector("main");
let topMenuEl = document.getElementById("top-menu");

//part 1
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;
mainEl.classList.add("flex-ctr");

//part 2
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");
