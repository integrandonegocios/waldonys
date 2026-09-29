'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigation } from '@/data/site';
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  return (
    <header className={`header ${scrolled || open ? 'solid' : ''}`}>
      <a className="site-logo" href="/#inicio" aria-label="Waldonys — início">
        <Image unoptimized src="/images/logowaldonys.png" alt="Waldonys" width={1536} height={1024} />
      </a>
      <nav
        aria-label="Navegação principal"
        id="main-nav"
        className={open ? 'navigation open' : 'navigation'}
      >
        {navigation.map(([name, id]) => (
          <a key={id} href={name === 'Vídeos' ? '/videos' : `/#${id}`} onClick={() => setOpen(false)}>
            {name}
          </a>
        ))}
      </nav>
      <Button
        variant="ghost"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-nav"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </Button>
    </header>
  );
}
