import { Sidebar, Topmenu } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />

      {/* Main Layout content - Contenido principal del Layout */}
      <div className="ml-auto pb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <Topmenu />
        {/* TODO: Contenido en el Layout.tsx */}
        <div className="px-6 pt-6">{children}</div>
      </div>
    </>
  );
}
