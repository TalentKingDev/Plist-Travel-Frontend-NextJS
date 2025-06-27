"use client";

import { useState } from "react";
import ServiceCard from "@/components/vendor/common/ServiceCard";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/navigation";
import VendorDashboardLayout from "../../common/layout";

const index = () => {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState();
  const [showSnackbar, setShowSnackbar] = useState(false);

  const data = [
    {
      name: "Spaces",
      image: "/img/dashboard/services/property_spaces.svg",
      icon: "/img/dashboard/icons/hotel-icon.svg"
    },
    {
      name: "Hotels",
      image: "/img/dashboard/services/property_service.jpg",
      icon: "/img/dashboard/icons/hotel-icon.svg"
    },
    {
      name: "Event Venues",
      image: "/img/dashboard/services/property_event_venues.png",
      icon: "/img/dashboard/icons/hotel-icon.svg",
      end: "vacaton-rentals",
    },
    {
      name: "Vacation Rentals",
      image: "/img/dashboard/services/property_vacation_rentals.jpg",
      icon: "/img/dashboard/icons/hotel-icon.svg",
    },
    {
      name: "Events",
      image: "/img/dashboard/services/attr_events_service.jpg",
      icon: "/img/dashboard/icons/hotel-icon.svg",
      end: "events",
    },
    {
      name: "Tours",
      image: "/img/dashboard/services/noproperty_tours.jpg",
      icon: "/img/dashboard/icons/hotel-icon.svg",
    },
    {
      name: "Activities",
      image: "/img/dashboard/services/noproperty_activities.jpg",
      icon: "/img/dashboard/icons/hotel-icon.svg",
    },
  ];

  return (
    <VendorDashboardLayout>
      <div className="row y-gap-20 py-10 px-10 rounded-8 bg-white shadow-3">
        <h1 className="text-20 lh-14 fw-600">Select Services</h1>
        <h1 className="text-18 lh-14 fw-500">Select Type of Services</h1>
        <div className="text-15 text-light-1">
          Choose one or more services to include in your booking. Selecting
          multiple services will create a package.
        </div>
        <div className="col-12">
          <ServiceCard
            data={data}
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        </div>
        <div className="col-12 px-30 mt-20 mb-10">
          <div className="row y-gap-20 justify-between items-end">
            <button
              className="button rounded-8 py-10 px-30 text-14 -dark-1 border-light text-light-1 col-auto"
              onClick={() => setIsListings(true)}
            >
              <i className="icon icon-chevron-left mr-10" /> Back
            </button>
            <button
              className="button rounded-8 py-10 px-30 text-14 -dark-1 bg-dark-3 text-white col-auto"
              onClick={() => {
                if (selectedService) {
                  router.push(
                    "/vendor/booking/search?service=" +
                    selectedService.name
                  );
                } else {
                  setShowSnackbar(true);
                }
              }}
            >
              Continue
              <i className="icon icon-chevron-right ml-10" />
            </button>
          </div>
        </div>
      </div>

      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
      >
        <Alert severity="warning" variant="filled" sx={{ width: "100%" }}>
          Please select a service to continue.
        </Alert>
      </Snackbar>
    </VendorDashboardLayout>
  );
};

export default index;
