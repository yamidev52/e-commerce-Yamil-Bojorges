// '<li class="nav-item">
//     <a class="nav-link active" aria-current="page" href="#">Home</a>
//  </li>'

let header = document.querySelector(".navbar");
let menu = [];

let categorias = [
  {
    name: "Home",
    href: "/index.html",
  },
  {
    name: "Productos",
    href: "/productos.html",
  },
  {
    name: "Nosotros",
    href: "#",
  },
];

for (const i of categorias) {
  menu.push(
    `<li> 
        <a href="${i.href}">${i.name}</a>
    </li>`
  );
  // console.log(categorias[i].href)
  // console.log(i.href)
}
header.innerHTML = menu.join("")
// header.innerHTML = menu.join().replaceAll(",", "");


