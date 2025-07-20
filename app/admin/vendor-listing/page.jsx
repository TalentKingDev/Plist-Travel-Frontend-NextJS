import dynamic from "next/dynamic";
import DashboardPage from "@/components/admin/vendor-listing";

export const metadata = {
  title: "Vendor Listing Management - Admin || Plist Travel",
  description: "Vendor Listing Management",
};

const index = () => {
  return <DashboardPage />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
