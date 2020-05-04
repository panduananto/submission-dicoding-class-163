class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML =
    `
      <nav>
        <span class="logo">UDNAP</span>
        <ul id="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#pencegahan">Pencegahan</a></li>
        </ul>
        <span class="navbar-toggle" id="navbar-toggler">
          <svg
            class="menu-button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="100%"
            height="100%"
          >
            <path
              d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z"
            />
          </svg>
        </span>
      </nav>
    `
  }
}

customElements.define("nav-bar", NavBar);