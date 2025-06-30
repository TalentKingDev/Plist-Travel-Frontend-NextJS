import dynamic from "next/dynamic";
import DashboardPage from "@/components/vendor/conversation/manage";

export const metadata = {
  title: "Message & Conversation || Plist Travel",
  description: "Vendor Message & Conversation for Plist Travel",
};

const index = () => {
  return <DashboardPage />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
