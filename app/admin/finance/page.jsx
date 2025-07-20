import dynamic from "next/dynamic";
import DashboardPage from "@/components/admin/finance";

export const metadata = {
  title: "Financial Management - Admin || Plist Travel",
  description: "Financial Management",
};

const index = () => {
  return <DashboardPage />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
