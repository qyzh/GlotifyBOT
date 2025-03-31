import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem, NavSectionProps, SidebarProps } from '../types/navigation';
import { getMainNavItems, getAdditionalNavItems } from '../config/navigation';

const NavLink: React.FC<{ item: NavItem; onClose: () => void }> = ({ item, onClose }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      onClose();
    }
  };

  if (item.isExternal) {
    return (
      <Link 
        href={item.href}
        className="block text-white/80 hover:text-[#00ff00] transition-colors py-1 font-mono text-sm"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <a 
      href={item.href} 
      onClick={(e) => handleScroll(e, item.href.slice(1))}
      className="block text-white/80 hover:text-[#00ff00] transition-colors py-1 font-mono text-sm"
    >
      {item.label}
    </a>
  );
};

const NavSection: React.FC<NavSectionProps> = ({ title, items, onClose }) => {
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
};

export const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  onClose, 
  mainNavItems,
  additionalNavItems,
  title = 'Contents',
  className = ''
}) => {
  const pathname = usePathname();
  const defaultMainItems = getMainNavItems(pathname);
  const defaultAdditionalItems = getAdditionalNavItems(pathname);

  return (
    <>
      <aside className={`
        fixed lg:sticky top-0 inset-y-0 left-0 w-64 p-6 border-r border-white/20 bg-black
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        z-40 h-screen overflow-y-auto
        ${className}
      `}>
        <nav className="space-y-6">
          <NavSection 
            title={title} 
            items={mainNavItems || defaultMainItems} 
            onClose={onClose}
          />

          {(additionalNavItems || defaultAdditionalItems).length > 0 && (
            <div className="pt-4 border-t border-white/10">
              <NavSection 
                title="Navigation" 
                items={additionalNavItems || defaultAdditionalItems} 
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
}; 