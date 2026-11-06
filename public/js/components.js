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

  const items = [
    ['/index.html',       'index',       'Hjem'],
    ['/directions.html',  'directions',  'Veibeskrivelse'],
    ['/ourservices.html', 'ourservices', 'Våre tjenester'],
    ['/contact.html',     'contact',     'Kontakt og åpningstider']
  ];

  const menuLink = (href, page, text) =>
    `<a${active === page ? ' class="active" aria-current="page"' : ''} href="${href}">${text}</a>`;

  const navHTML =
    '<header class="topnav">' +
      '<a class="logo-link" href="/index.html"><img class="logo" src="/media/logo.png" width="120" height="118" alt="Bærum Lungeklinikk Logo"></a>' +
      '<nav class="nav-links" aria-label="Hovedmeny">' +
        items.map(i => menuLink(i[0], i[1], i[2])).join('') +
      '</nav>' +
      '<div class="dropdown">' +
        '<button class="dropbtn" type="button" aria-expanded="false" aria-controls="mobile-menu">' +
          '<span class="burger" aria-hidden="true"></span><span>Meny</span>' +
        '</button>' +
        '<nav class="dropdown-content" id="mobile-menu" aria-label="Mobilmeny">' +
          items.map(i => menuLink(i[0], i[1], i[2])).join('') +
        '</nav>' +
      '</div>' +
    '</header>';

  const footerHTML =
    '<div class="footer-inner">' +
    '<h3>Kontaktinformasjon</h3>' +
    '<p>Adresse: <a class="email-link" href="https://www.google.com/maps/search/?api=1&query=Brodtkorbs+gate+7+1338+Sandvika" target="_blank" rel="noopener">Thon Senter Sandvika, Servicebygget, 4. etasje, Brodtkorbs gate 7, 1338 Sandvika</a></p>' +
    '<p>E-post: <a class="email-link" href="mailto:lungelege@gmail.com">lungelege@gmail.com</a></p>' +
    '<p>Telefon: <a class="email-link" href="tel:+4767799911">67 79 99 11</a></p>' +
    '<p>Org. nr.: 933 379 728</p>' +
    '<p class="footer-note">Vi ser frem til å hjelpe deg med dine helsebehov!</p>' +
    '</div>';

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  document.addEventListener('DOMContentLoaded', () => {
    const dd = document.querySelector('.dropdown');
    const btn = dd.querySelector('.dropbtn');
    const setOpen = (open) => {
      dd.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    };
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      setOpen(!dd.classList.contains('open'));
    });
    document.addEventListener('click', (e) => { if (!dd.contains(e.target)) setOpen(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { setOpen(false); btn.focus(); } });
    window.addEventListener('resize', () => { if (window.innerWidth > 740) setOpen(false); });

    const topnav = document.querySelector('.topnav');
    const onScroll = () => topnav.classList.toggle('scrolled', window.scrollY > 4);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    let footer = document.querySelector('footer');
    if (!footer) {
      footer = document.createElement('footer');
      document.body.appendChild(footer);
    }
    footer.innerHTML = footerHTML;
  });
})();
