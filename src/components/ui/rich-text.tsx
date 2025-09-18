import { PortableText, PortableTextBlock, PortableTextComponents } from '@portabletext/react';

const myPortableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={value.imageUrl}
        alt=''
      />
    ),
    callToAction: ({ value, isInline }) => (isInline ? <a href={value.url}>{value.text}</a> : <div className='callToAction'>{value.text}</div>),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = value?.href?.startsWith('/') ? undefined : 'noreferrer noopener';
      return (
        <a
          href={value?.href ?? '#'}
          rel={rel}
        >
          {children}
        </a>
      );
    },
  },
};

const RichText = ({ value }: { value: any }) => {
  return (
    <PortableText
      value={value}
      components={myPortableTextComponents}
    />
  );
};

export default RichText;
