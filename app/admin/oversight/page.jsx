import dynamic from "next/dynamic";
import SettingPage from "@/components/admin/oversight";

export const metadata = {
  title: "Admin Dashboard || Plist Travel",
  description: "Admin Dashboard for Plist Travel",
};

const index = () => {
  return <SettingPage />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
