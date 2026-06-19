// app/components/Container.tsx
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8 lg:px-16">
      {children}
    </div>
  );
}