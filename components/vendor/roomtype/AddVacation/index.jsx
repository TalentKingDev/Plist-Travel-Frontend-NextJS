"use client";

import svgIcon from "@/components/data/svgIcon";
import { useState } from "react";
import BasicInfo from "./BasicInfo";
import Rates from "./Rates";
import ListingDetails from "./ListingDetails";
import ListingPrice from "./ListingPrice";
import Calendar from "../Calendar";
import { useRouter } from "next/navigation";
import VendorDashboardLayout from "../../common/layout";

const index = () => {
  const router = useRouter();
  const [bookingType, setBookingType] = useState("day-night");

  const propertySteps = [
    {
      id: 1,
      name: "Basic Info",
      content: (
        <BasicInfo bookingType={bookingType} setBookingType={setBookingType} />
      ),
    },
    {
      id: 2,
      name: "Room / Listing Details",
      content: <ListingDetails bookingType={bookingType} />,
    },
    {
      id: 3,
      name: "Competitive Rates",
      content: <Rates bookingType={bookingType}  />,
    },
    {
      id: 4,
      name: "Price",
      content: <ListingPrice />,
    },
    {
      id: 5,
      name: "Calendar",
      content: <Calendar />,
    },
  ];

  const [activeStep, setActiveStep] = useState(1);

  return (
    <VendorDashboardLayout>
      <div className="row y-gap-20 py-10 px-10 rounded-8 bg-white shadow-3">
        <div className="text-20 fw-600">Add Room Type</div>
        <div className="text-14 lh-1 text-light-1">
          Enter name and description for the room. You can also specify number
          of adults and children the room can accommodate.
        </div>
        <div className="col-12 overflow-scroll scroll-bar-1">
          <div className="d-flex justify-between">
            {propertySteps.map((step, index) => (
              <div
                className="d-flex flex-column items-center"
                style={{ minWidth: "120px" }}
                key={index}
              >
                <div
                  className={
                    "size-35 flex-center rounded-full cursor-pointer text-14 " +
                    (step.id > activeStep
                      ? "bg-light-2 text-light-1"
                      : "bg-blue-1 text-white")
                  }
                >
                  {step.id < activeStep ? svgIcon.icon_check : step.id}
                </div>
                <div className="text-12 text-center mt-10">{step.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12">
          <div className="border-light rounded-8 px-20 py-15">
            {propertySteps[activeStep - 1].content}
          </div>
        </div>

        <div className="col-12 d-flex justify-between">
          <button
            onClick={() => setActiveStep(activeStep - 1)}
            className="border-light bg-light-2 rounded-8 py-5 px-20 fw-500 bg-white text-14"
            disabled={activeStep === 1}
          >
            Previous
          </button>
          <button
            className="rounded-8 py-5 px-20 bg-dark-4 text-white text-14"
            onClick={() => {
              if (activeStep < propertySteps.length) {
                setActiveStep(activeStep + 1);
              } else {
                const property_id = localStorage.getItem(
                  "add-rateplan-property-id"
                );
                if (property_id) {
                  router.push("/vendor/rateplan/add");
                } else {
                  router.push("/vendor/room-type");
                }
              }
            }}
          >
            {activeStep < propertySteps.length ? "Continue" : "Save"}
          </button>
        </div>
      </div>
    </VendorDashboardLayout>
  );
};

export default index;
