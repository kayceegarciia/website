'use client';

import { useRouter, usePathname } from 'next/navigation';
import { MdHome, MdMailOutline, MdCode, MdInterests } from 'react-icons/md';
import Dock from './Dock';

export default function DockNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const items = [
    { 
      icon: <MdHome size={24} />, 
      label: 'Home', 
      onClick: () => router.push('/'),
      active: pathname === '/'
    },
    { 
      icon: <MdMailOutline size={24} />, 
      label: 'Contact', 
      onClick: () => router.push('/contact'),
      active: pathname === '/contact'
    },
    { 
      icon: <MdCode size={24} />, 
      label: 'Projects & Skills', 
      onClick: () => router.push('/projects'),
      active: pathname === '/projects'
    },
    { 
      icon: <MdInterests size={24} />, 
      label: 'Interests', 
      onClick: () => router.push('/interests'),
      active: pathname === '/interests'
    },
  ];

  return (
    <Dock 
      items={items}
      panelHeight={80}
      baseItemSize={60}
      magnification={100}
    />
  );
}
