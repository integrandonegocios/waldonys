import Image from 'next/image';
import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { site } from '@/data/site';
import type { Platform } from '@/types/content';
export function SectionHeading({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span />
          {number} — {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
export function DemoNote({
  children = 'Conteúdo demonstrativo · aguardando material oficial',
}: {
  children?: ReactNode;
}) {
  return <p className="demo-note">{children}</p>;
}
export function PlatformLink({
  platform,
  children,
}: {
  platform: Platform;
  children: ReactNode;
}) {
  const url = site.socials[platform];
  return url ? (
    <a
      className="text-link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={15} />
    </a>
  ) : (
    <span className="platform-pending">
      <span className="text-link">
        {children}
        <ArrowUpRight size={15} />
      </span>
      <small>Perfil oficial a confirmar</small>
    </span>
  );
}
export function EditorialImage({
  src,
  alt,
  caption,
  className = '',
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  return (
    <figure className={`editorial-image ${className}`}>
      <Image
        unoptimized
        src={src}
        alt={alt}
        loading="lazy"
        width={1200}
        height={800}
      />
      <figcaption>
        {caption} <span>IMAGEM ILUSTRATIVA</span>
      </figcaption>
    </figure>
  );
}
