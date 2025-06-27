"use client";

import dynamic from "next/dynamic";
import AddHotel from "@/components/vendor/roomtype/AddHotel";
import AddSpace from "@/components/vendor/roomtype/AddSpace";
import AddVacation from "@/components/vendor/roomtype/AddVacation";
import AddEventVenue from "@/components/vendor/roomtype/AddEventVenue";
import { useSearchParams } from "next/navigation";

// export const metadata = {
//   title: "Listings Management || Plist Travel",
//   description: "Vendor Listings Management for Plist Travel",
// };

const index = () => {
  const service = useSearchParams().get("service");

  const addListing = {
    Hotels: <AddHotel service={"Hotels"} />,
    Spaces: <AddSpace service={"Spaces"} />,
    "Vacation Rentals": <AddVacation service={"Vacation Rentals"} />,
    "Event Venues": <AddEventVenue service={"Event Venues"} />,
  };

  return <>{addListing[service]}</>;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
