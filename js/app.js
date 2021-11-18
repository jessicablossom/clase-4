Vue.component("navbar", {
  template: `<nav>
    <div>
      <ul>
        <li><a href>Link</a></li>
        <li><a href>Link</a></li>
      </ul>
    </div>
  </nav>`,
});

Vue.component("component", {
  template: `<div><h1>Bienvenidxs</h1>
  <p>Body foam brewed, café au lait macchiato crema dripper sugar. And grinder lungo cinnamon french press affogato dark blue mountain instant. Acerbic macchiato skinny cup single shot mug trifecta. Crema ut, roast brewed affogato spoon single origin. Plunger pot seasonal flavour, medium, black cultivar americano whipped that a robusta.</p>`,
});

var app = new Vue({
  el: "#app",
  data: {},
});
