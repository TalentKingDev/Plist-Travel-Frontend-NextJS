import dynamic from "next/dynamic";
import DashboardPage from "@/components/agent/email-template/manage/add";

export const metadata = {
  title: "Agent Dashboard || Plist Travel",
  description: "Agent Dashboard for Plist Travel",
};

const index = () => {
  return <DashboardPage />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
