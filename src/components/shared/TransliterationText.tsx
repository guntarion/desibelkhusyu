// src/components/shared/TransliterationText.tsx
// Component for displaying transliteration text with proper styling

interface TransliterationTextProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function TransliterationText({ 
  text, 
  className = '', 
  size = 'md' 
}: TransliterationTextProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <p 
      className={`
        font-mono italic text-stone-600 leading-relaxed
        ${sizeClasses[size]} ${className}
      `}
    >
      {text}
    </p>
  );
}
