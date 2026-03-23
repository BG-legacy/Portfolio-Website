export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-20 lg:px-10">
      {children}
    </main>
  );
}
