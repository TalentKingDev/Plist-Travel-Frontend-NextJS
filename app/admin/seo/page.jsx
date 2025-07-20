import dynamic from "next/dynamic";
import SEOOptimization from "@/components/admin/seo";

export const metadata = {
  title: "Admin Dashboard || Plist Travel",
  description: "Admin Dashboard for Plist Travel",
};

const index = () => {
  return <SEOOptimization />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
