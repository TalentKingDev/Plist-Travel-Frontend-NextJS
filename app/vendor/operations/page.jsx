import dynamic from "next/dynamic";
import DashboardPage from "@/components/vendor/operations";

export const metadata = {
  title: "Vendor Profile || Plist Travel",
  description: "Vendor Profile for Plist Travel",
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
