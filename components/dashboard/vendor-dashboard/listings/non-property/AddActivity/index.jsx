import svgIcon from "@/components/data/svgIcon";
import { useState } from "react";
import Description from "./Description";
import Image from "./Image";
import Location from "./Location";
import Amenities from "./Amenities";
import GuestReviews from "./GuestReviews";
import { useRouter } from "next/navigation";
import VendorDashboardLayout from "../../../common/layout";
import FAQs from "../../common/FAQs";

const index = ({ service }) => {
  const router = useRouter();

  const propertySteps = [
    {
      id: 1,
      name: "Listing Description",
      content: <Description />,
    },
    {
      id: 2,
      name: "Listing Images",
      content: <Image />,
    },
    {
      id: 3,
      name: "Location",
      content: <Location />,
    },
    {
      id: 4,
      name: "Listing Amenities",
      content: <Amenities />,
    },
    {
      id: 5,
      name: "Guest Reviews & Ratings",
      content: <GuestReviews />,
    },
    {
      id: 6,
      name: "FAQs",
      content: <FAQs />,
    },
  ];

  const [activeStep, setActiveStep] = useState(1);

  return (
    <VendorDashboardLayout>
      <div className="row y-gap-20 py-10 px-10 rounded-8 bg-white shadow-3">
        <h1 className="text-30 lh-14 fw-600">
          Add Your Listing
          <span className="text-12 text-white rounded-100 px-10 bg-dark-4 ml-10 fw-400">
            {service}
          </span>
        </h1>
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
                localStorage.setItem("add-rateplan-property-id", 2);
                router.push("/vendor/room-type/add?service=" + service);
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
