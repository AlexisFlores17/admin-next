import { TabBar } from "@/components";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
    title: "Cookies page",
    description: "Seo title",
  };
  

export default function CoockesPage() {
  const cookieStore = cookies()
  const cookieTab = cookieStore.get('selectedTab')?.value ?? "1";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col">
        <span className="text-3xl">Tabs</span>
        <TabBar currentTab={+cookieTab}/>
      </div>
    </div>
  );
}