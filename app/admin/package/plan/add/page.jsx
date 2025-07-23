import dynamic from "next/dynamic";
import PackagePlan from "@/components/admin/package/plan/AddPackage";

export const metadata = {
  title: "Admin Dashboard || Plist Travel",
  description: "Admin Dashboard for Plist Travel",
};

const index = () => {
  return <PackagePlan />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
