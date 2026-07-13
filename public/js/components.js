(() => {
  const path = window.location.pathname;

  const activePage = () => {
    if (path === '/' || /\/index\.html$/.test(path)) return 'index';
    if (/directions/.test(path)) return 'directions';
    if (/ourservices/.test(path)) return 'ourservices';
    if (/contact/.test(path)) return 'contact';
    return '';
  };

  const active = activePage();

  const link = (href, page, text) =>
    `<a${active === page ? ' class="active"' : ''} href="${href}">${text}</a>`;

  const navHTML =
    '<div class="topnav">' +
      '<a href="/index.html"><img class="logo" src="/media/logo.png" alt="Bærum Lungeklinikk Logo"></a>' +
      '<div class="nav-links">' +
        link('/index.html',       'index',       'Hjem') +
        link('/directions.html',  'directions',  'Veibeskrivelse') +
        link('/ourservices.html', 'ourservices', 'Våre tjenester') +
        link('/contact.html',     'contact',     'Kontakt og åpningstider') +
      '</div>' +
      '<div class="dropdown">' +
        '<button class="dropbtn">Meny</button>' +
        '<div class="dropdown-content">' +
          '<a href="/index.html">Hjem</a>' +
          '<a href="/directions.html">Veibeskrivelse</a>' +
          '<a href="/ourservices.html">Våre tjenester</a>' +
          '<a href="/contact.html">Kontakt og åpningstider</a>' +
        '</div>' +
      '</div>' +
    '</div>';

  const footerHTML =
    '<h3>Kontaktinformasjon</h3>' +
    '<p>Adresse: Thon Senter Sandvika, Servicebygget, 4. etasje, Brodtkorbs gate 7, 1338 Sandvika</p>' +
    '<p>E-post: <a class="email-link" href="mailto:lungelege@gmail.com">lungelege@gmail.com</a></p>' +
    '<p>Telefon: 67 79 99 11</p>' +
    '<p>Org. nr.: 933 379 728</p>' +
    '<p style="text-align:center">Vi ser frem til å hjelpe deg med dine helsebehov!</p>';

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  document.addEventListener('DOMContentLoaded', () => {
    let footer = document.querySelector('footer');
    if (!footer) {
      footer = document.createElement('footer');
      document.body.appendChild(footer);
    }
    footer.innerHTML = footerHTML;
  });
})();
