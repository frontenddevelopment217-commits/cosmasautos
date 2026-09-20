export type NavigationItem = {
  label: string;
  href: string;
};

export const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Inventory', href: '/products' },
  { label: 'Brands', href: '/brands' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
