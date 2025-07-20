import dynamic from "next/dynamic";
import CustomerSupport from "@/components/admin/customer-support";

export const metadata = {
  title: "Admin Dashboard || Plist Travel",
  description: "Admin Dashboard for Plist Travel",
};

const index = () => {
  return <CustomerSupport />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
