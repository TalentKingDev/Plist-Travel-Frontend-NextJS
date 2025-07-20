import dynamic from "next/dynamic";
import DashboardPage from "@/components/admin/commission";

export const metadata = {
  title: "Commission Management - Admin || Plist Travel",
  description: "Commission Management",
};

const index = () => {
  return <DashboardPage />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
