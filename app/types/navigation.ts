export interface NavItem {
  href: string;
  label: string;
  isExternal?: boolean;
}

export interface NavSectionProps {
  title: string;
  items: NavItem[];
  onClose: () => void;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  mainNavItems?: NavItem[];
  additionalNavItems?: NavItem[];
  title?: string;
  className?: string;
} 