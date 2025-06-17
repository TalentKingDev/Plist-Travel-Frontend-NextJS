"use client";

import dynamic from "next/dynamic";
import DashboardPage from "@/components/dashboard/vendor-dashboard/roomtype/AddRoomType";
import { useSearchParams } from "next/navigation";

// export const metadata = {
//   title: "Listings Management || Plist Travel",
//   description: "Vendor Listings Management for Plist Travel",
// };

const index = () => {
  const service = useSearchParams().get("service");
  return (
    <>
      <DashboardPage service={service} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
