class PencegahanItem extends HTMLElement {
  set pencegahan(pencegahan) {
    this._pencegahan = pencegahan;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="pencegahan-text">
        <h2>${this._pencegahan.title}</h2>
        <p>
          ${this._pencegahan.description}        
        </p>
      </div>
      <img
        src="${this._pencegahan.image}"
        alt="${this._pencegahan.alt}"
        class="pencegahan-image"
      />
    `;
  }
}

customElements.define("pencegahan-item", PencegahanItem);
