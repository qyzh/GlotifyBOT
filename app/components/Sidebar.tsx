import React, { useCallback, memo } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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

const SCROLL_OFFSET = 80;

const NavLink = memo<{ item: NavItem; onClose: () => void }>(({ item, onClose }) => {
  const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      onClose();
    }
  }, [onClose]);

  const linkClassName = "block text-white/80 hover:text-[#4752c4] transition-colors py-1 font-mono text-sm";

  if (item.isExternal) {
    return (
      <Link 
        href={item.href}
        className={linkClassName}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <a 
      href={item.href} 
      onClick={(e) => handleScroll(e, item.href.slice(1))}
      className={linkClassName}
    >
      {item.label}
    </a>
  );
});

NavLink.displayName = 'NavLink';

const NavSection = memo<NavSectionProps>(({ title, items, onClose }) => {
  if (items.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold text-white/90 mb-4 font-mono">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <NavLink item={item} onClose={onClose} />
          </li>
        ))}
      </ul>
    </div>
  );
});

NavSection.displayName = 'NavSection';

const MobileMenuButton: React.FC<{ isOpen: boolean; onClick: () => void }> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-black border border-white/20 text-white hover:bg-white/5 lg:hidden"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
};

const Sidebar = memo<SidebarProps>(({ 
  isOpen, 
  onClose, 
  mainNavItems = [],
  additionalNavItems = [],
  title = 'Contents',
  className = ''
}) => {
  const sidebarClassName = cn(
    'fixed lg:sticky top-0 inset-y-0 left-0 w-64 p-6 border-r border-white/20 bg-black',
    'transform transition-transform duration-300 ease-in-out',
    isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
    'z-40 h-screen overflow-y-auto',
    className
  );

  return (
    <>
      <MobileMenuButton isOpen={isOpen} onClick={onClose} />
      <aside className={sidebarClassName}>
        <nav className="space-y-6">
          <NavSection 
            title={title} 
            items={mainNavItems} 
            onClose={onClose}
          />

          {additionalNavItems.length > 0 && (
            <div className="pt-4 border-t border-white/10">
              <NavSection 
                title="Navigation" 
                items={additionalNavItems} 
                onClose={onClose}
              />
            </div>
          )}
        </nav>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar; 