import dynamic from "next/dynamic";
import Oversight from "@/components/admin/oversight";

export const metadata = {
  title: "Admin Dashboard || Plist Travel",
  description: "Admin Dashboard for Plist Travel",
};

const index = () => {
  return <Oversight />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
