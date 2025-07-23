import dynamic from "next/dynamic";
import DashboardPage from "@/components/admin/category";

export const metadata = {
  title: "Category Management - Admin || Plist Travel",
  description: "Category Management for Plist Travel Admin",
};

const index = () => {
  return <DashboardPage />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
