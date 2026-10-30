import React, { useState } from 'react';
import { motion } from 'motion/react';

export interface AvatarDisplayProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  onDarkOrCrimson?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  floating?: boolean;
  priority?: boolean;
}

export const AvatarDisplay: React.FC<AvatarDisplayProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  onDarkOrCrimson = false,
  size = 'lg',
  floating = true,
  priority = false,
}) => {
  const [, setHasError] = useState(false);

  const sizeClasses = {
    sm: 'w-24 h-24 sm:w-28 sm:h-28',
    md: 'w-40 h-40 sm:w-48 sm:h-48',
    lg: 'w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72',
    xl: 'w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96',
  };

  const isLocalAvatarPng = src.startsWith('/avatars/') && src.endsWith('.png');
  const avifSrc = isLocalAvatarPng ? src.replace(/\.png$/, '.avif') : null;
  const webpSrc = isLocalAvatarPng ? src.replace(/\.png$/, '.webp') : null;

  const imageElement = (
    <motion.div
      animate={floating ? { y: [0, -8, 0] } : undefined}
      transition={floating ? { duration: 4, repeat: Infinity, ease: 'easeInOut' } : undefined}
      whileHover={{ scale: 1.04 }}
      className="w-full h-full flex items-center justify-center"
    >
      <picture className="w-full h-full flex items-center justify-center">
        {avifSrc && <source srcSet={avifSrc} type="image/avif" />}
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          src={src}
          alt={alt}
          width={800}
          height={800}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setHasError(true)}
          className={`w-full h-full object-contain ${
            onDarkOrCrimson ? '' : 'mix-blend-multiply'
          } drop-shadow-xl select-none transition-transform duration-300 ${imgClassName}`}
        />
      </picture>
    </motion.div>
  );

  if (onDarkOrCrimson) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="bg-[#FAF8F5] rounded-3xl p-4 sm:p-5 shadow-2xl border border-white/60 flex items-center justify-center overflow-hidden">
          <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
            {imageElement}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        {imageElement}
      </div>
    </div>
  );
};
