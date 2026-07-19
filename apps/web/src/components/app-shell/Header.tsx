'use client';

import * as React from 'react';

import { IconButton, PrimaryButton } from '@cosmas/ui';

import { NavigationMenu } from './NavigationMenu';
import { MobileNav } from './MobileNav';
import Image from 'next/image';
import Link from 'next/link';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function Header({ className, style, ...props }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header
      {...props}
      className={className}
      style={{
        width: '100%',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: '1px solid rgba(255,255,255,.08)',
        background: 'rgba(0,0,0,.72)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        ...style,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 12,
          paddingBottom: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <Link
          href="/"
          aria-label="Cosmas Autos"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <Image
            src="/images/logos/hero-banner.svg"
            alt="Cosmas Autos"
            width={240}
            height={56}
            priority
            style={{ width: 'auto', height: 52, objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop nav */}
        <div
          style={{
            flex: 1,
            display: 'none',
          }}
          className="cosmas-desktop-nav"
        >
          <div style={{ width: '100%' }}>
            <NavigationMenu />
          </div>
        </div>

        {/* Desktop: divider + icons + request button */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 18,
            flexShrink: 0,
          }}
          className="cosmas-desktop-actions"
        >
          <div
            aria-hidden
            style={{
              width: 1,
              height: 24,
              background: 'rgba(255,255,255,0.12)',
            }}
          />

          <nav
            aria-label="Header quick actions"
            style={{ display: 'flex', alignItems: 'center', gap: 2 }}
          >
            <span className="cosmas-icon">
              <IconButton
                aria-label="Search"
                style={{
                  color: '#fff',
                  background: 'transparent',
                }}
              >
                <SearchIcon width={18} height={18} />
              </IconButton>
            </span>

            <span className="cosmas-icon">
              <IconButton
                aria-label="Wishlist"
                style={{
                  color: '#fff',
                  background: 'transparent',
                }}
              >
                <HeartIcon width={18} height={18} />
              </IconButton>
            </span>

            <span className="cosmas-icon">
              <IconButton
                aria-label="Account"
                style={{
                  color: '#fff',
                  background: 'transparent',
                }}
              >
                <UserIcon width={18} height={18} />
              </IconButton>
            </span>
          </nav>

          <PrimaryButton
            size="md"
            style={{
              background: '#C8102E',
              color: '#fff',
              borderRadius: 8,
              paddingLeft: 18,
              paddingRight: 18,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.02em',
              boxShadow: '0 8px 24px rgba(200,16,46,0.28)',
              transition: 'background 150ms ease, box-shadow 150ms ease',
            }}
            className="cosmas-cta"
          >
            Request Vehicle
          </PrimaryButton>
        </div>

        {/* Mobile */}
        <div
          style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div className="cosmas-mobile-menu">
            <IconButton
              aria-label="Open mobile menu"
              onClick={() => setMobileOpen(true)}
              style={{
                color: '#fff',
                background: 'transparent',
                borderRadius: 10,
              }}
            >
              <MenuIcon width={20} height={20} />
            </IconButton>
          </div>
        </div>
      </div>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <style jsx>{`
        @media (min-width: 1024px) {
          .cosmas-desktop-nav,
          .cosmas-desktop-actions {
            display: flex !important;
          }

          .cosmas-mobile-menu {
            display: none !important;
          }
        }

        @media (max-width: 1023px) {
          .cosmas-mobile-menu {
            display: flex;
          }
        }

        .cosmas-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          transition: background 150ms ease;
        }

        .cosmas-icon:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .cosmas-icon:hover :global(*) {
          color: #c8102e !important;
        }

        .cosmas-cta:hover {
          background: #8f0b21 !important;
        }

        /* NavigationMenu renders in a separate component, so these rules
           must be :global to actually reach its markup. */
        :global(nav[aria-label='Primary']) {
          color: #fff;
        }

        :global(nav[aria-label='Primary'] a) {
          position: relative;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #fff;
          transition: color 150ms ease;
        }

        :global(nav[aria-label='Primary'] a::after) {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: #c8102e;
          transition: width 200ms ease;
        }

        :global(nav[aria-label='Primary'] a:hover) {
          color: #c8102e;
        }

        :global(nav[aria-label='Primary'] a:hover::after) {
          width: 100%;
        }
      `}</style>
    </header>
  );
}
