'use client';
import Image from 'next/image';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { SectionHeading, DemoNote } from '@/components/editorial';
import type { GalleryImage, GalleryCategory } from '@/types/content';
const categories: ('Todos' | GalleryCategory)[] = [
  'Todos',
  'Shows',
  'Bastidores',
  'Aviação',
  'Paraquedismo',
  'Momentos',
];
export function Gallery({ images }: { images: GalleryImage[] }) {
  const [category, setCategory] =
    useState<(typeof categories)[number]>('Todos');
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const visible = images.filter(
    (image) => category === 'Todos' || image.category === category,
  );
  return (
    <section id="galeria" className="section gallery">
      <SectionHeading
        number="06"
        label="UM OLHAR, MUITAS HISTÓRIAS"
        title={
          <>
            Instantes que <em>ficam.</em>
          </>
        }
      />
      <fieldset
        className="gallery-filters"
        aria-label="Filtrar fotos por categoria"
      >
        {categories.map((item) => (
          <Button
            variant="ghost"
            className={category === item ? 'filter active' : 'filter'}
            key={item}
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
          </Button>
        ))}
      </fieldset>
      <div className="gallery-grid" aria-live="polite">
        {visible.length === 0 && (
          <p className="gallery-empty">Ainda não há fotografias nesta categoria.</p>
        )}
        {visible.map((image) => (
          <button
            className="gallery-item"
            key={image.id}
            onClick={() => setSelected(image)}
            aria-label={`Ampliar: ${image.caption}`}
          >
            <Image
              unoptimized
              src={image.src}
              alt={image.alt}
              loading="lazy"
              width={800}
              height={600}
            />
            <span>
              <small>{image.category}</small>
              {image.caption}
              <ArrowUpRight size={20} />
            </span>
            {image.illustrative && <em>IMAGEM ILUSTRATIVA</em>}
          </button>
        ))}
      </div>
      <DemoNote>
        Acervo visual de demonstração. As fotografias oficiais do artista serão
        inseridas nesta galeria.
      </DemoNote>
      <Dialog
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="lightbox">
          <DialogTitle>{selected?.caption}</DialogTitle>
          <DialogDescription>
            {selected?.illustrative
              ? 'Imagem ilustrativa, não pertencente ao acervo oficial de Waldonys.'
              : selected?.category}
          </DialogDescription>
          {selected && (
            <Image
              unoptimized
              src={selected.src}
              alt={selected.alt}
              width={1200}
              height={800}
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
