import dynamic from "next/dynamic";
import DashboardPage from "@/components/admin/entry";

export const metadata = {
  title: "Manual Entry Management - Admin || Plist Travel",
  description: "Manual Entry Management",
};

const index = () => {
  return <DashboardPage />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
