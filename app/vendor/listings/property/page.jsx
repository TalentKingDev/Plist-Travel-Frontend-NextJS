import dynamic from "next/dynamic";
import DashboardPage from "@/components/vendor/listings/property";

export const metadata = {
  title: "Listings Management || Plist Travel",
  description: "Vendor Listings Management for Plist Travel",
};

const index = () => {
  return <DashboardPage />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
