import dynamic from "next/dynamic";
import DashboardPage from "@/components/agent/user";

export const metadata = {
  title: "User Management - Agent || Plist Travel",
  description: "User Management for Plist Travel Agent",
};

const index = () => {
  return <DashboardPage />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
