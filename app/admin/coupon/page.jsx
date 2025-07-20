import dynamic from "next/dynamic";
import DashboardPage from "@/components/admin/coupon";

export const metadata = {
  title: "Coupon & Promotion Management - Admin || Plist Travel",
  description: "Coupon & Promotion Management",
};

const index = () => {
  return <DashboardPage />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
