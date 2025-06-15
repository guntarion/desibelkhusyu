// src/components/shared/ArabicText.tsx
// Component for displaying Arabic text with proper styling

interface ArabicTextProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function ArabicText({ 
  text, 
  className = '', 
  size = 'md' 
}: ArabicTextProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <p 
      className={`
        font-arabic text-right leading-relaxed
        ${sizeClasses[size]} ${className}
      `}
      dir="rtl"
      lang="ar"
    >
      {text}
    </p>
  );
}
