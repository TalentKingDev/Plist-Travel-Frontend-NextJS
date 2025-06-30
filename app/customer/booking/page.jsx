import dynamic from "next/dynamic";
import DashboardPage from "@/components/dashboard/dashboard/db-booking";

export const metadata = {
  title: "Plist || Travel Platform",
  description: "Plist - Travel Package Builder",
};

const BookingPage = () => {
  return <DashboardPage />;
};

export default dynamic(() => Promise.resolve(BookingPage), {
  ssr: false,
});
