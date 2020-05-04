class IntroTextHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = 
    `
      <div class="intro-text-header-container">
        <h1>Pencegahan COVID-19</h1>
        <p>
          Website ini dibuat sebagai submission tugas Pemrograman Web Dasar
          dari Dicoding oleh Pandu Ananto Hogantara
        </p>
      </div>
    `
  }
}

customElements.define("intro-text-header", IntroTextHeader);