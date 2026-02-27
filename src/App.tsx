type LinkItem = {
  href: string;
  label: string;
};

const links: LinkItem[] = [
  {
    href: "https://scrapbox.io/ryoh827-public/",
    label: "Scrapbox"
  },
  {
    href: "https://github.com/ryoh827",
    label: "GitHub"
  },
  {
    href: "https://x.com/ryoh827",
    label: "X"
  }
];

const counterImageSrc =
  "https://count.getloli.com/@ryoh827?name=ryoh827&theme=original-new&padding=7&offset=0&align=center&scale=1&pixelated=1&darkmode=auto";

export default function App() {
  return (
    <div className="metro-shell">
      <header className="metro-topbar" aria-label="サイトヘッダー">
        <div className="metro-topbar__title-wrap">
          <p className="metro-topbar__eyebrow">LINK DASHBOARD</p>
          <h1 className="metro-topbar__title">ryoh827.com</h1>
        </div>
        <div className="metro-topbar__chips" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </header>

      <main className="metro-grid">
        <section className="metro-panel metro-panel--links" aria-labelledby="links-title">
          <p className="metro-panel__label">LINKS</p>
          <h2 id="links-title" className="sr-only">外部リンク</h2>
          <nav className="metro-link-grid" aria-label="外部リンク">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="metro-link-tile">
                <span className="metro-link-tile__name">{link.label}</span>
                <span className="metro-link-tile__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </nav>
        </section>

        <section className="metro-panel metro-panel--counter" aria-labelledby="counter-title">
          <div className="metro-panel__head">
            <p className="metro-panel__label">VISITORS</p>
            <h2 id="counter-title" className="sr-only">訪問カウンター</h2>
          </div>
          <div className="metro-counter-card">
            <div className="metro-counter-card__grid" aria-hidden="true" />
            <div className="metro-counter-card__image">
              <a href="https://count.getloli.com/">
                <img src={counterImageSrc} alt="Visit counter" />
              </a>
            </div>
          </div>
        </section>

        <section className="metro-panel metro-panel--accent" aria-hidden="true">
          <div className="metro-accent">
            <div className="metro-accent__bar metro-accent__bar--pink" />
            <div className="metro-accent__bar metro-accent__bar--green" />
            <div className="metro-accent__bar metro-accent__bar--blue" />
            <div className="metro-accent__blocks">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
