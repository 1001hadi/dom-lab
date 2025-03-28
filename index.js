var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
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

// part 3
for (let item of menuLinks) {
  let link = document.createElement("a");
  link.setAttribute("href", item.href);
  link.textContent = item.text;
  topMenuEl.appendChild(link);
}
