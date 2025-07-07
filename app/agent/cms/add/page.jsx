import dynamic from "next/dynamic";
import AddStaticPage from "@/components/agent/cms/manage/AddStaticPage";
import AddBanner from "@/components/agent/cms/manage/AddBanner";
import { useSearchParams } from "next/navigation";

export const metadata = {
  title: "Agent Dashboard || Plist Travel",
  description: "Agent Dashboard for Plist Travel",
};

const index = () => {
  const service = useSearchParams().get("service");
  return service == "static" ? <AddStaticPage /> : <AddBanner />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
