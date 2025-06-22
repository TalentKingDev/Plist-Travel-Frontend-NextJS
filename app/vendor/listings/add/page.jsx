"use client";

import dynamic from "next/dynamic";
import AddHotel from "@/components/dashboard/vendor-dashboard/listings/property/AddHotel";
import AddSpace from "@/components/dashboard/vendor-dashboard/listings/property/AddSpace";
import AddVacation from "@/components/dashboard/vendor-dashboard/listings/property/AddVacation";
import AddEventVenue from "@/components/dashboard/vendor-dashboard/listings/property/AddEventVenue";
import AddEvent from "@/components/dashboard/vendor-dashboard/listings/property/AddEvent";
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
    "Events": <AddEvent service={"Events"} />,
  };

  return <>{addListing[service]}</>;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
