type SectionLabelProps = {
  id?: string;
  children: React.ReactNode;
};

export default function SectionLabel({ id, children }: SectionLabelProps) {
  return (
    <h2
      id={id}
      className="mb-6 font-mono text-xs font-medium uppercase tracking-widest text-muted"
    >
      {children}
    </h2>
  );
}
