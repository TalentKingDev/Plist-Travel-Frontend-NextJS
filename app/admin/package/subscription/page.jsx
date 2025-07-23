import dynamic from "next/dynamic";
import PackageSubscription from "@/components/admin/package/subscription";

export const metadata = {
  title: "Admin Dashboard || Plist Travel",
  description: "Admin Dashboard for Plist Travel",
};

const index = () => {
  return <PackageSubscription />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
