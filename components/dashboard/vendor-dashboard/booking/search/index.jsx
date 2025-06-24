"use client";

import svgIcon from "@/components/data/svgIcon";
import VendorDashboardLayout from "@/components/dashboard/vendor-dashboard/common/layout";
import HotelProperties from "@/components/hotel-list/hotel-list-v5/HotelProperties";
import DatePicker, { DateObject } from "react-multi-date-picker";
import Pagination from "@/components/hotel-list/common/Pagination";
import HotelsSearch from "./property/HotelsSearch";
import SpacesSearch from "./property/SpacesSearch";
import EventVenuesSearch from "./property/EventVenuesSearch";
import VacationRentalsSearch from "./property/VacationRentalsSearch";
import ActivitiesSearch from "./non-property/ActivitiesSearch"
import EventsSearch from "./non-property/EventsSearch"
import ToursSearch from "./non-property/ToursSearch"

import { useSearchParams } from "next/navigation";

const index = () => {

  const service = useSearchParams().get("service");
  let SearchComponent;

  switch (service) {
// Properties
    case "Hotel":
      SearchComponent = HotelsSearch;
      break;
    case "Spaces":
      SearchComponent = SpacesSearch;
      break;
    case "Event Venues":
      SearchComponent = EventVenuesSearch;
      break;
    case "Vacation Rentals":
      SearchComponent = VacationRentalsSearch;
      break;
// Non-properties
    case "Activities":
      SearchComponent = ActivitiesSearch;
      break;
    case "Events":
      SearchComponent = EventsSearch;
      break;
    case "Tours":
      SearchComponent = ToursSearch;
      break;
    default:
      SearchComponent = HotelsSearch;
  }

  return (
    <VendorDashboardLayout>
      <SearchComponent />
      <div className="row y-gap-30 mt-20">
        <HotelProperties />
      </div>
      <Pagination />
    </VendorDashboardLayout>
  );
};

export default index;
