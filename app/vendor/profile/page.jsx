import dynamic from "next/dynamic";
import DashboardPage from "@/components/vendor/profile";

export const metadata = {
  title: "Operations Management || Plist Travel",
  description: "Vendor Operations Management for Plist Travel",
};

const index = () => {
  return <DashboardPage />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
