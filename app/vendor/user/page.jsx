import dynamic from "next/dynamic";
import DashboardPage from "@/components/vendor/user";

export const metadata = {
  title: "User Management || Plist Travel",
  description: "User Management for Plist Travel",
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
