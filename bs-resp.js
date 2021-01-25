const injection = function() {

  const html_template = `
        <div class="d-sm-none">xs</div>
        <div class="d-none d-sm-block d-md-none">sm</div>
        <div class="d-none d-md-block d-lg-none">md</div>
        <div class="d-none d-lg-block d-xl-none">lg</div>
        <div class="d-none d-xl-block">xl</div>
        <style>
        #bs-responsive-size-floater {
          position: fixed;
          bottom: 15px;
          left: 15px;
          text-align: center;
          width: 30px;
          height: 30px;
          line-height: 30px;
          font-size: 12px;
          background-color: teal;
          border-radius: 100%;
          z-index: 9999;
        }
        </style>`;

  const element = document.createElement('div');
  element.setAttribute('id', 'bs-responsive-size-floater');
  element.innerHTML = html_template;
  document.body.appendChild(element);

};

window.onload = function() {
  injection();
};