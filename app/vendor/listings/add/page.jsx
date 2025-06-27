"use client";

import dynamic from "next/dynamic";
import AddHotel from "@/components/vendor/listings/property/AddHotel";
import AddSpace from "@/components/vendor/listings/property/AddSpace";
import AddVacation from "@/components/vendor/listings/property/AddVacation";
import AddEventVenue from "@/components/vendor/listings/property/AddEventVenue";
import AddEvent from "@/components/vendor/listings/non-property/AddEvent";
import AddActivity from "@/components/vendor/listings/non-property/AddActivity";
import AddTour from "@/components/vendor/listings/non-property/AddTour";
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
    Events: <AddEvent service={"Events"} />,
    Activities: <AddActivity service={"Activities"} />,
    Tours: <AddTour service={"Tours"} />,
  };

  return <>{addListing[service]}</>;
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
