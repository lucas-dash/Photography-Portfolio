type SectionHeaderProps = {
  title: string;
};
export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <section className="max-sm:text-center py-8">
      <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
    </section>
  );
}
