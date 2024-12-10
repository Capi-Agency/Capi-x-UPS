'use client';
import React, { useState } from 'react';
import { ThemeProvider } from '@/providers/theme-provider';
import TheHeader from '@/components/common/the-header/page';
import TheFooter from '@/components/common/the-footer/page';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TheHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`${isOpen ? 'pt-[130px]' : 'pt-[45px]'} md:pt-14 lg:pt-16 xl:pt-[70px]`}
      >
        {children}
      </div>
      <TheFooter />
    </ThemeProvider>
  );
};

export default MainLayout;
