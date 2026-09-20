import * as React from 'react';

import { cn } from '@cosmas/ui';

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export function Footer({ className, style, ...props }: FooterProps) {
  const year = new Date().getFullYear();

  const quickLinks = ['Home', 'Inventory', 'Brands', 'Services', 'About', 'Contact'];
  const categories = [
    'Brand New Cars',
    'Tokunbo Cars',
    'Nigerian Used Cars',
    'SUVs',
    'Sedans',
    'Luxury Cars',
  ];

  return (
    <footer
      {...props}
      className={cn('relative w-full border-t border-white/10 bg-[#0D0D0F]', className)}
      style={style}
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#8F0B21] via-[#FF3B4E] to-[#8F0B21]" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <span className="font-[Fraunces,serif] text-2xl font-medium text-white">
              Cosmas<span className="text-[#C8102E]">Autos</span>
            </span>
            <p className="max-w-xs text-sm text-[#A1A1AA]">
              Brand new, Tokunbo, and Nigerian used vehicles — sourced with verified history,
              professional inspection, and nationwide delivery.
            </p>

            {/* social — placeholder hrefs, wire up when profiles are ready */}
            <div className="mt-2 flex items-center gap-3">
              {[
                {
                  label: 'Instagram',
                  path: 'M12 2c2.7 0 3 .01 4.1.06 1.1.05 1.8.22 2.4.46.65.25 1.2.6 1.75 1.15.55.55.9 1.1 1.15 1.75.24.6.41 1.3.46 2.4.05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1.1-.22 1.8-.46 2.4a4.9 4.9 0 0 1-1.15 1.75 4.9 4.9 0 0 1-1.75 1.15c-.6.24-1.3.41-2.4.46-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1.1-.05-1.8-.22-2.4-.46a4.9 4.9 0 0 1-1.75-1.15 4.9 4.9 0 0 1-1.15-1.75c-.24-.6-.41-1.3-.46-2.4C2.01 15 2 14.7 2 12s.01-3 .06-4.1c.05-1.1.22-1.8.46-2.4.25-.65.6-1.2 1.15-1.75A4.9 4.9 0 0 1 5.42 2.6c.6-.24 1.3-.41 2.4-.46C8.92 2.01 9.2 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4ZM17.4 6.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z',
                },
                {
                  label: 'Facebook',
                  path: 'M13.5 21v-7.4h2.5l.4-2.9h-2.9V8.8c0-.85.24-1.43 1.46-1.43h1.56V4.8c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9v2.18H8v2.9h2.44V21h3.06Z',
                },
                {
                  label: 'WhatsApp',
                  path: 'M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.36A10 10 0 1 0 12 2Zm0 18.2a8.15 8.15 0 0 1-4.16-1.14l-.3-.18-3 .82.8-2.93-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.13c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.35-1.68-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z',
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links" className="flex flex-col gap-3">
            <span className="font-[IBM_Plex_Mono,monospace] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF3B4E]">
              Quick Links
            </span>
            {quickLinks.map((label) => (
              <a
                key={label}
                href="#"
                className="text-sm text-[#A1A1AA] transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Categories */}
          <nav aria-label="Categories" className="flex flex-col gap-3">
            <span className="font-[IBM_Plex_Mono,monospace] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF3B4E]">
              Categories
            </span>
            {categories.map((label) => (
              <a
                key={label}
                href="#"
                className="text-sm text-[#A1A1AA] transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="flex flex-col gap-3">
            <span className="font-[IBM_Plex_Mono,monospace] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF3B4E]">
              Company
            </span>
            {['About Us', 'Careers', 'Privacy Policy', 'Terms of Service'].map((label) => (
              <a
                key={label}
                href="#"
                className="text-sm text-[#A1A1AA] transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Contact — placeholder details, replace with real info */}
          <div className="flex flex-col gap-3">
            <span className="font-[IBM_Plex_Mono,monospace] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF3B4E]">
              Contact
            </span>
            <p className="text-sm text-[#A1A1AA]">Abuja, Nigeria</p>
            <a
              href="tel:+234"
              className="text-sm text-[#A1A1AA] transition-colors hover:text-white"
            >
              +234 (0) XXX XXX XXXX
            </a>
            <a
              href="mailto:hello@cosmasautos.com"
              className="text-sm text-[#A1A1AA] transition-colors hover:text-white"
            >
              hello@cosmasautos.com
            </a>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[IBM_Plex_Mono,monospace] text-[11px] uppercase tracking-wide text-[#71717A]">
            © {year} Cosmas Autos. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#71717A] transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[#71717A] transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = 'Footer';
