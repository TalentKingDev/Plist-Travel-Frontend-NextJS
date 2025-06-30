import dynamic from "next/dynamic";
import DashboardPage from "@/components/vendor/addon/add";

export const metadata = {
  title: "Add-On Service Management || Plist Travel",
  description: "Add-On Service Management for Plist Travel",
};

const index = () => {
  return <DashboardPage />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
