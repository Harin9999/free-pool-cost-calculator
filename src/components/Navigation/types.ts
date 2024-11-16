import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  icon: ReactNode;
  items: NavSubItem[];
}

export interface NavSubItem {
  path: string;
  label: string;
}

export interface DesktopNavProps {
  items: NavItem[];
  activeDropdown: string | null;
  setActiveDropdown: (label: string | null) => void;
}

export interface MobileNavProps {
  items: NavItem[];
  isOpen: boolean;
  activeDropdown: string | null;
  setActiveDropdown: (label: string | null) => void;
  onClose: () => void;
}