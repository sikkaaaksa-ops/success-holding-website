interface DividerProps {
  className?: string;
}

export default function Divider({ className = '' }: DividerProps) {
  return <div className={`w-12 h-0.5 bg-brand-gold ${className}`} />;
}
