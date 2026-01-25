import { default as BoringAvatar } from 'boring-avatars';

export const Avatar = ({
  size = 20,
  square = false,
  title = false,
  name,
  variant = 'marble',
  colors,
}: {
  name: string;
  size?: number;
  square?: boolean;
  title?: boolean;
  variant?: 'marble' | 'beam' | 'sunset' | 'ring' | 'pixel' | 'bauhaus';
  colors?: string[];
}) => {
  return (
    <BoringAvatar
      name={name}
      size={size}
      square={square}
      title={title}
      variant={variant}
      colors={colors}
    />
  );
};
