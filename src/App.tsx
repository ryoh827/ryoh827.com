type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  {
    href: "https://github.com/ryoh827",
    label: "GITHUB"
  },
  {
    href: "https://scrapbox.io/ryoh827-public/",
    label: "SCRAPBOX"
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
    <div className="pixel-container">
      <div className="pixel-grid-bg" />
      <header className="pixel-header">
        <div className="pixel-nameplate">
          <h1 className="pixel-name">ryoh827</h1>
          <p className="pixel-subtitle">[ SOFTWARE ENGINEER ]</p>
        </div>
      </header>
      <main className="pixel-main">
        <section className="pixel-menu">
          <h2 className="pixel-menu-title">MENU</h2>
          <nav className="pixel-nav" aria-label="External links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="pixel-button">
                <span className="pixel-icon">&gt;</span>
                <span className="pixel-text">{link.label}</span>
              </a>
            ))}
          </nav>
        </section>
        <section className="pixel-content">
          <div className="pixel-window">
            <div className="pixel-window-header">
              <span className="pixel-window-title">BLOG & CONTENTS</span>
              <span className="pixel-window-buttons">[-][o][x]</span>
            </div>
            <div className="pixel-window-content">
              <p className="pixel-description">
                A collection of my blog posts, technical articles, and various content.
              </p>
              <div className="pixel-placeholder">
                <span className="pixel-blink">[COMING SOON...]</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="pixel-footer">
        <div className="pixel-footer-bar" />
        <div className="pixel-counter">
          <span className="pixel-counter-label">VISITORS:</span>
          <a href="https://count.getloli.com/">
            <img src={counterImageSrc} alt="Visit counter" />
          </a>
        </div>
      </footer>
    </div>
  );
}
