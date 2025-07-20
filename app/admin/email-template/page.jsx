import dynamic from "next/dynamic";
import EmailTemplate from "@/components/admin/email-template";

export const metadata = {
  title: "Admin Dashboard || Plist Travel",
  description: "Admin Dashboard for Plist Travel",
};

const index = () => {
  return <EmailTemplate />;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
