export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between">
        <a
          href="#"
          className="font-serif text-lg tracking-widest text-foreground"
        >
          GRAVITAS
        </a>
        <nav className="flex items-center gap-8">
          <a
            href="#collection"
            className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Collection
          </a>
          <a
            href="#philosophy"
            className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="https://instagram.com/gravitas_official"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-6xl text-center md:text-left">
        <p className="text-xs text-muted-foreground">
          &copy; 2026 GRAVITAS. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
