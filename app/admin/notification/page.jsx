import dynamic from "next/dynamic";
import Notification from "@/components/admin/notification";

export const metadata = {
  title: "Admin Dashboard || Plist Travel",
  description: "Admin Dashboard for Plist Travel",
};

const index = () => {
  return <Notification />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
