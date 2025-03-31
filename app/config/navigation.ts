import { NavItem } from '../types/navigation';

export const defaultMainNavItems: NavItem[] = [
  { href: '#installation', label: '$ ./installation' },
  { href: '#commands', label: '$ ./commands' },
  { href: '#permissions', label: '$ ./permissions' },
  { href: '#troubleshooting', label: '$ ./troubleshooting' },
  { href: '#support', label: '$ ./support' },
];

export const getMainNavItems = (currentPath: string): NavItem[] => {
  // Privacy Policy page navigation
  if (currentPath === '/privacy-policy') {
    return [
      { href: '#introduction', label: '$ ./introduction' },
      { href: '#information-collection', label: '$ ./information-collection' },
      { href: '#data-usage', label: '$ ./data-usage' },
      { href: '#data-sharing', label: '$ ./data-sharing' },
      { href: '#security', label: '$ ./security' },
      { href: '#data-retention', label: '$ ./data-retention' },
      { href: '#children', label: '$ ./children-privacy' },
      { href: '#user-rights', label: '$ ./user-rights' },
      { href: '#changes', label: '$ ./policy-changes' },
      { href: '#contact', label: '$ ./contact' },
      { href: '#international', label: '$ ./international' },
      { href: '#legal-basis', label: '$ ./legal-basis' },
      { href: '#california', label: '$ ./california' },
      { href: '#consent', label: '$ ./consent' },
    ];
  }

  // Terms of Service page navigation
  if (currentPath === '/terms-of-service') {
    return [
      { href: '#acceptance', label: '$ ./introduction' },
      { href: '#service', label: '$ ./service-description' },
      { href: '#responsibilities', label: '$ ./user-requirements' },
      { href: '#intellectual-property', label: '$ ./data-usage' },
      { href: '#liability', label: '$ ./user-conduct' },
      { href: '#changes', label: '$ ./limitations' },
      { href: '#rate-limits', label: '$ ./rate-limits' },
      { href: '#ip', label: '$ ./intellectual-property' },
      { href: '#terms-changes', label: '$ ./terms-changes' },
      { href: '#termination', label: '$ ./termination' },
      { href: '#warranty', label: '$ ./warranty' },
      { href: '#liability-limits', label: '$ ./liability-limits' },
      { href: '#contact', label: '$ ./contact' },
      { href: '#governing-law', label: '$ ./governing-law' },
    ];
  }

  // Default navigation items for other pages
  return defaultMainNavItems;
};

export const getAdditionalNavItems = (currentPath: string): NavItem[] => {
  // For terms and privacy pages, only show home link
  if (currentPath === '/terms-of-service' || currentPath === '/privacy-policy') {
    return [
      { href: '/', label: '$ cd ..', isExternal: true },
      { href: '/terms-of-service', label: '$ cat terms.txt', isExternal: true },
      { href: '/privacy-policy', label: '$ cat privacy.txt', isExternal: true },
    ];
  }

  // Default navigation items for other pages
  return [
    { href: '/', label: '$ cd ..', isExternal: true },
    { href: '/terms-of-service', label: '$ cat terms.txt', isExternal: true },
    { href: '/privacy-policy', label: '$ cat privacy.txt', isExternal: true },
  ];
}; 