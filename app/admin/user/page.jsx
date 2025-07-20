import dynamic from "next/dynamic";
import DashboardPage from "@/components/admin/user";

export const metadata = {
  title: "User Management - Admin || Plist Travel",
  description: "User Management for Plist Travel Admin",
};

const index = () => {
  return <DashboardPage />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
