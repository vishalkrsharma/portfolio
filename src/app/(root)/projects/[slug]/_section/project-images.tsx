'use client';

import { Button } from '@/components/ui/button';
import { ImageZoom } from '@/components/ui/image-zoom';
import { cn } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { SanityImage } from '@/types/sanity.types';
import Image from 'next/image';
import { useState } from 'react';

const ProjectImages = ({ images }: { images: SanityImage[] }) => {
  const [selectedImage, setSelectedImage] = useState<SanityImage | undefined>(images[0]);

  return (
    <div className='space-y-4'>
      <ImageZoom backdropClassName='[&_[data-rmiz-modal-overlay="visible"]]:bg-black/80'>
        <Image
          alt='Placeholder image'
          className='h-full mx-auto rounded-xl border'
          width={1200}
          height={800}
          src={urlFor(selectedImage!.asset!._ref).url()}
        />
      </ImageZoom>
      <div className='overflow-x-auto flex justify-start items-center gap-4'>
        {images.map((item) =>
          item!.asset ? (
            <Button
              className='p-1 bg-transparent hover:bg-accent/10 border aspect-square h-24 w-24'
              key={item?.asset._ref}
            >
              <Image
                key={item!.asset._ref}
                alt='Placeholder image'
                className={cn('object-center object-cover', item!.asset._ref === selectedImage?.asset?._ref ? 'ring-2 ring-accent' : '')}
                width={200}
                height={150}
                src={urlFor(item!.asset._ref).url()}
                onClick={() => setSelectedImage(item)}
              />
            </Button>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ProjectImages;
