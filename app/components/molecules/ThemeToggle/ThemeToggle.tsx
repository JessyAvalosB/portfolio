"use client"
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Icon } from '@/components'
import { Theme, themes } from './ThemeToggleTypes';
import { IconsEnum } from '../../atoms/Icon/IconTypes';

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const toggleTheme = themes[(resolvedTheme as Theme)];
  const handdleToggleTheme = () => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <div
      className={`relative flex px-2 py-1 border-2 rounded-full gap-x-1 cursor-pointer before:content-[""] before:absolute before:h-6 before:w-6 before:rounded-full before:z-10 before:transition-all ${toggleTheme}`}
      onClick={handdleToggleTheme}>
      <Icon
        icon={IconsEnum.sun}
        size='sm'
        color='black' />
      <Icon
        icon={IconsEnum.moon}
        size='sm'
        color='white' />
    </div>
  )
}
