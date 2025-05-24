import { useState } from "react";
import svgIcon from "@/components/data/svgIcon";
import SubscriptionPlan from "./SubscriptionPlan";
import FeeBookingPlan from "./FeeBookingPlan";
import BothPlan from "./BothPlan";

const index = () => {
  const paymentModel = [
    {
      title: "Subscription Plan",
      value: "subscription",
      description: "Pay a monthly/yearly fee with different features",
      icon: (
        <div className="d-flex align-items-center justify-center">
          {svgIcon.subscription_plan}
        </div>
      ),
      content: <SubscriptionPlan />,
    },
    {
      title: "Fee Per Booking",
      value: "fee-per-booking",
      description: "Pay a monthly/yearly fee with different features",
      icon: (
        <div className="d-flex align-items-center justify-center">
          {svgIcon.fee_model}
        </div>
      ),
      content: <FeeBookingPlan />,
    },
    {
      title: "Both",
      value: "both",
      description: "Pay a monthly/yearly fee with different features",
      icon: (
        <div className="d-flex align-items-center justify-center">
          {svgIcon.subscription_plan} + {svgIcon.fee_model}
        </div>
      ),
      content: <BothPlan />,
    },
  ];
  const [selectedModel, setSelectedModel] = useState("subscription");

  return (
    <>
      <div className="px-15">
        <div className="row y-gap-20 py-10 px-10 rounded-8 bg-white border-light shadow-3 mb-20">
          <h1 className="text-18 lh-1 fw-600">Choose Your Payment Model</h1>
          <div className="text-16 text-light-1 lh-1">
            Select how you want to be charged for using our platform.
          </div>
          {paymentModel.map((item, index) => (
            <div
              className="col-md-4"
              key={index}
              onClick={() => setSelectedModel(item.value)}
            >
              <div
                className={
                  "d-flex flex-column items-center justify-between rounded-8 bg-white px-15 py-15 h-100 cursor-pointer " +
                  (selectedModel === item.value
                    ? "border-blue-1"
                    : "bg-light-2 border-light")
                }
              >
                {item.icon}
                <h3 className="text-14 lh-1 fw-500 mt-15 mb-5">{item.title}</h3>
                <div className="text-12 lh-1 text-light-1 mb-10">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {paymentModel.find((item) => item.value === selectedModel)["content"]}
    </>
  );
};

export default index;
