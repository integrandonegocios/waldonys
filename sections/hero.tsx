'use client';

import Image from 'next/image';
import { HeroContent } from '@/components/hero-content';
import type { ShowEvent } from '@/types/content';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { bannerSlots, type Banner } from '@/data/banners';

const banners = bannerSlots.filter((banner): banner is Banner => banner !== null);

export function Hero({ events = [] }: { events?: ShowEvent[] }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const multiple = banners.length > 1;

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPlaying(!preference.matches);
    const visibility = () => setVisible(!document.hidden);
    update();
    visibility();
    preference.addEventListener('change', update);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      preference.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, []);

  useEffect(() => {
    if (!multiple || !playing || hovered || !visible) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % banners.length), 6000);
    return () => window.clearInterval(timer);
  }, [multiple, playing, hovered, visible]);

  function navigate(index: number) {
    setActive((index + banners.length) % banners.length);
    setPlaying(false);
  }

  return (
    // Carousel region listens for pointer and keyboard navigation without becoming a button.
    // oxlint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <section
      id="inicio"
      className="banner-hero"
      aria-labelledby="banner-title"
      aria-roledescription={multiple ? 'carrossel' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setPlaying(false)}
      onKeyDown={(event) => {
        if (!multiple || !(event.target instanceof Element) || !event.target.closest('.banner-controls, .banner-arrow')) return;
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          navigate(active + (event.key === 'ArrowRight' ? 1 : -1));
        }
      }}
      onTouchStart={(event) => {
        if (event.target instanceof Element && event.target.closest('a, button, iframe, #hero-player')) return;
        touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
      }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        touchStart.current = null;
        if (!multiple || !start) return;
        const dx = event.changedTouches[0].clientX - start.x;
        const dy = event.changedTouches[0].clientY - start.y;
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) navigate(active + (dx < 0 ? 1 : -1));
      }}
    >

      {banners.map((banner, index) => (
        <fieldset
          key={`${index}-${banner.src}`}
          className={`banner-slide${index === active ? ' is-active' : ''}`}
          aria-hidden={index !== active}
          aria-roledescription="slide"
          aria-label={`${index + 1} de ${banners.length}`}
        >
          <Image
            unoptimized
            className="banner-art"
            width={1693}
            height={929}
            src={banner.src}
            alt={banner.alt}
            style={{ objectPosition: banner.position ?? 'center' }}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        </fieldset>
      ))}
      <div className="hero-live-shade" aria-hidden="true" />
      <HeroContent events={events} />
      {multiple && (
        <>
          <Button variant="ghost" className="banner-arrow previous" aria-label="Banner anterior" onClick={() => navigate(active - 1)}><ChevronLeft /></Button>
          <Button variant="ghost" className="banner-arrow next" aria-label="Próximo banner" onClick={() => navigate(active + 1)}><ChevronRight /></Button>
          <div className="banner-controls" aria-label="Controles dos banners">
            {banners.map((banner, index) => (
              <Button key={`${index}-${banner.src}`} variant="ghost" className="banner-dot" aria-label={`Mostrar banner ${index + 1}`} aria-pressed={index === active} onClick={() => navigate(index)}><span /></Button>
            ))}
            <Button variant="ghost" className="banner-play" aria-label={playing ? 'Pausar banners' : 'Iniciar troca automática'} onClick={() => setPlaying(!playing)}>{playing ? <Pause size={18} /> : <Play size={18} />}</Button>
          </div>
          <p className="sr-only" aria-live={playing ? 'off' : 'polite'}>Banner {active + 1} de {banners.length}</p>
        </>
      )}
      <p className="sr-only">Arte de apresentação. Datas e controles dentro das imagens são ilustrativos.</p>
    </section>
  );
}
