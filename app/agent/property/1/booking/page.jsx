import dynamic from "next/dynamic";
import DashboardPage from "@/components/agent/booking/property";

export const metadata = {
  title: "Plist || Travel Platform",
  description: "Plist - Property Booking",
};

const BookingPage = () => {
  return (
    <>
      <DashboardPage serviceType={"Property"} />
    </>
  );
};

export default dynamic(() => Promise.resolve(BookingPage), {
  ssr: false,
});
