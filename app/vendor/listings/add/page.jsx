"use client";

import dynamic from "next/dynamic";
import AddHotel from "@/components/dashboard/vendor-dashboard/listings/AddHotel";
import { useSearchParams } from "next/navigation";

// export const metadata = {
//   title: "Listings Management || Plist Travel",
//   description: "Vendor Listings Management for Plist Travel",
// };

const index = () => {
  const service = useSearchParams().get("service");
  return (
    <>
      <AddHotel service={service} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
