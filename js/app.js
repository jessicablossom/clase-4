Vue.component("navbar", {
  template: `<nav>
      <ul>
        <li><a href>Link</a></li>
        <li><a href>Link</a></li>
      </ul>
  </nav>`,
});

Vue.component("component", {
  template: `<div><h1>Bienvenidxs</h1>
  <p>Body foam brewed, café au lait macchiato crema dripper sugar. And grinder lungo cinnamon french press affogato dark blue mountain instant. Acerbic macchiato skinny cup single shot mug trifecta. Crema ut, roast brewed affogato spoon single origin. Plunger pot seasonal flavour, medium, black cultivar americano whipped that a robusta.</p>`,
});

Vue.component("card", {
  props: ["comida"],
  template: `
    <div class="card">
    <p> {{comida.nombre}}</p>
    <p> $ {{comida.precio}}</p>
    <img :src="comida.portada"/>
    </div>
    `,
});

var app = new Vue({
  el: "#app",
  data: {
    comidas: [
      {
        nombre: "Latte",
        precio: "300",
        portada:
          "https://previews.123rf.com/images/amenic181/amenic1811702/amenic181170200033/72395893-cup-of-coffee-latte-and-coffee-beans-isolated-on-white-background.jpg",
      },
      {
        nombre: "Capuccino",
        precio: "400",
        portada:
          "https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-CAPPUCCINO-BANANA-SESAME-SEEDS.jpg",
      },
      {
        nombre: "Tea",
        precio: "500",
        portada:
          "https://image.shutterstock.com/image-photo/antique-tea-cup-full-on-260nw-473004682.jpg",
      },
      {
        nombre: "Latte 2",
        precio: "300",
        portada:
          "https://previews.123rf.com/images/amenic181/amenic1811702/amenic181170200033/72395893-cup-of-coffee-latte-and-coffee-beans-isolated-on-white-background.jpg",
      },
      {
        nombre: "Capuccino 2",
        precio: "400",
        portada:
          "https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-CAPPUCCINO-BANANA-SESAME-SEEDS.jpg",
      },
      {
        nombre: "Tea 2",
        precio: "500",
        portada:
          "https://image.shutterstock.com/image-photo/antique-tea-cup-full-on-260nw-473004682.jpg",
      },
    ],
  },
});
