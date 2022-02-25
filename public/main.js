import "../src/home/scss/style.scss";
import "../src/bootstrap/scss/bootstrap.scss";

document.querySelector("#app").innerHTML = `
  <h1 class="display-1 mb-5">Hello Vite!</h1>
  <!-- <a class="btn btn-lg btn-success rounded-pill" href="./about/">About</a> -->
  <a
    class="btn btn-lg btn-success rounded-pill mb-2"
    href="https://vitejs.dev/guide/features.html"
    target="_blank">
              Vite Documentation
    </a>
  <a
    class="btn btn-lg btn-success rounded-pill"
    href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
    target="_blank">
      Bootstrap Documentation
    </a>
`;
