import dynamic from "next/dynamic";
import DashboardPage from "@/components/admin/cms";

export const metadata = {
  title: "Content Management System - Admin || Plist Travel",
  description: "Content Management System for Plist Travel",
};

const index = () => {
  return <DashboardPage />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
