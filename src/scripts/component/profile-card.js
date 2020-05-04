class ProfileCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <aside>
        <div class="profile-card-container">
          <div class="profile-picture"></div>
          <div class="profile-info">
            <h2>Pandu Ananto Hogantara</h2>
            <span
              >Saya biasa dipanggil Pandu. Sekarang sedang kuliah di
              Universitas Pembangunan Nasional Veteran Jakarta jurusan
              Informatika</span
            >
          </div>
          <div class="profile-socmed">
            <span>
              <a href="https://github.com/panduananto">
                <svg
                  class="icon-socmed"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  width="100%"
                  height="100%"
                >
                  <path
                    d="M10.015 9.949h-.03c-1.191 0-2.24-.303-2.861.268a1.57 1.57 0 00-.527 1.197c0 1.852 1.483 2.08 3.389 2.08h.029c1.905 0 3.389-.229 3.389-2.08 0-.443-.156-.856-.527-1.197-.622-.571-1.671-.268-2.862-.268zM8.393 12.48c-.363 0-.656-.408-.656-.91s.293-.908.656-.908.657.406.657.908c.001.502-.293.91-.657.91zm3.213 0c-.363 0-.657-.408-.657-.91s.294-.908.657-.908c.362 0 .656.406.656.908.001.502-.293.91-.656.91zM10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm.876 13.539c-.172 0-.514 0-.876.002-.362-.002-.704-.002-.876-.002-.76 0-3.772-.059-3.772-3.689 0-.834.286-1.445.755-1.955-.074-.184-.078-1.232.32-2.236 0 0 .916.1 2.301 1.051.289-.081.781-.122 1.272-.122s.982.041 1.273.121c1.385-.951 2.301-1.051 2.301-1.051.398 1.004.395 2.053.32 2.236.469.51.755 1.121.755 1.955-.001 3.632-3.013 3.69-3.773 3.69z"
                  />
                </svg>
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/panduaa/">
                <svg
                  class="icon-socmed"
                  data-name="Instagram w/circle"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.2 19.2"
                  width="100%"
                  height="100%"
                >
                  <path
                    d="M13.498 6.651a1.656 1.656 0 00-.95-.949 2.766 2.766 0 00-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 00-.929.172 1.656 1.656 0 00-.949.95 2.766 2.766 0 00-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 00.172.929 1.656 1.656 0 00.95.949 2.766 2.766 0 00.928.172c.527.024.685.029 2.02.029s1.493-.005 2.02-.03a2.766 2.766 0 00.929-.171 1.656 1.656 0 00.949-.95 2.766 2.766 0 00.172-.928c.024-.527.029-.685.029-2.02s-.005-1.493-.03-2.02a2.766 2.766 0 00-.171-.929zM9.6 12.168A2.568 2.568 0 1112.168 9.6 2.568 2.568 0 019.6 12.168zm2.669-4.637a.6.6 0 11.6-.6.6.6 0 01-.6.6zM11.267 9.6A1.667 1.667 0 119.6 7.933 1.667 1.667 0 0111.267 9.6zM9.6 0a9.6 9.6 0 109.6 9.6A9.6 9.6 0 009.6 0zm4.97 11.661a3.67 3.67 0 01-.233 1.214 2.556 2.556 0 01-1.462 1.462 3.67 3.67 0 01-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 01-1.213-.233 2.556 2.556 0 01-1.462-1.462 3.67 3.67 0 01-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 01.232-1.213 2.556 2.556 0 011.463-1.463 3.67 3.67 0 011.213-.232c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 011.213.232 2.556 2.556 0 011.462 1.463 3.67 3.67 0 01.233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z"
                  />
                </svg>
              </a>
            </span>
            <span>
              <a href="mailto:panduanantoh@gmail.com">
                <svg
                  class="icon-socmed"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  width="100%"
                  height="100%"
                >
                  <path
                    d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM6.231 7h7.52c.399 0 .193.512-.024.643-.217.13-3.22 1.947-3.333 2.014s-.257.1-.403.1a.793.793 0 01-.402-.1L6.255 7.643C6.038 7.512 5.833 7 6.231 7zM14 12.5c0 .21-.252.5-.444.5H6.444C6.252 13 6 12.71 6 12.5V8.853c0-.092-.002-.211.172-.11l3.417 2.015a.69.69 0 00.402.1.69.69 0 00.403-.1l3.434-2.014c.174-.102.172.018.172.11V12.5z"
                  />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </aside>
    `;
  }
}

customElements.define("profile-card", ProfileCard);
