import dynamic from "next/dynamic";
import DashboardPage from "@/components/dashboard/vendor-dashboard/property";

export const metadata = {
  title: "Property Management || Plist Travel",
  description: "Vendor Property Management for Plist Travel",
};

const index = () => {
  return (
    <>
      <DashboardPage />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
