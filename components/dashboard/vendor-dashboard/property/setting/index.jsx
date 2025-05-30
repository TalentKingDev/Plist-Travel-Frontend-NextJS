"use client";

import { useState } from "react";
import VendorDashboardLayout from "../../common/layout";
import BaseRate from "./BaseRate";
import Promotion from "./Promotion";
import BookingRules from "./BookingRules";
import Fee from "./Fee";
import Taxes from "./Taxes";
import Security from "./Security";
import PaymentTerms from "./PaymentTerms";

const index = () => {
  const [activeTab, setActiveTab] = useState("base-rate");

  const tabs = [
    {
      label: "Base Rate & Discounts",
      value: "base-rate",
      content: <BaseRate key="base-rate" />,
    },
    {
      label: "Promotions",
      value: "promotions",
      content: <Promotion key="promotions" />,
    },
    {
      label: "Booking Rules",
      value: "booking-rules",
      content: <BookingRules key="booking-rules" />,
    },
    { label: "Fee", value: "fee", content: <Fee key="fee" /> },
    { label: "Taxes", value: "taxes", content: <Taxes key="taxes" /> },
    {
      label: "Security Deposit",
      value: "security",
      content: <Security key="security" />,
    },
    {
      label: "Payment Terms",
      value: "payment-terms",
      content: <PaymentTerms key="payment-terms" />,
    },
  ];

  return (
    <VendorDashboardLayout>
      <div className="row y-gap-20 justify-between items-center mb-5">
        <div className="col-md-auto">
          <h1 className="text-30 lh-14 fw-600">Setting</h1>
          <div className="text-15 text-light-1">
            Set your base rates, promotions, booking rules and so on.
          </div>
        </div>
      </div>

      <div className="row px-10 mb-20">
        {tabs.map((item) => (
          <div className="col-auto px-5" key={item.value}>
            <button
              className={`text-14 px-10 fw-500 py-5 rounded-8 ${
                activeTab === item.value ? "bg-white" : "text-light-1"
              }`}
              onClick={() => setActiveTab(item.value)}
            >
              {item.label}
            </button>
          </div>
        ))}
      </div>

      <div className="border-light bg-white rounded-8 px-20 py-20">
        {tabs.map((tab) => tab.value === activeTab && tab.content)}
      </div>
    </VendorDashboardLayout>
  );
};

export default index;
