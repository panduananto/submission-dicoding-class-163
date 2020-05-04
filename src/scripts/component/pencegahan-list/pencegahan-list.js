import "./pencegahan-item.js";

class PencegahanList extends HTMLElement {
  set pencegahanMany(pencegahanMany) {
    this._pencegahanMany = pencegahanMany;
    this.render();
  }

  render() {
    this._pencegahanMany.forEach((pencegahan) => {
      const pencegahanItemElement = document.createElement("pencegahan-item");
      // setter dari pencegahan-item.js
      pencegahanItemElement.pencegahan = pencegahan;
      this.appendChild(pencegahanItemElement);
    });
  }
}

customElements.define("pencegahan-list", PencegahanList);
