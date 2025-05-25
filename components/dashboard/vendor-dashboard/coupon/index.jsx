"use client";

import { useState } from "react";

import CouponCard from "./CouponCard";
import VenderDashboardLayout from "../common/layout";
import CouponList from "./CouponList";

const index = () => {
  const [activeTab, setActiveTab] = useState("active");
  const tabs = [
    { label: "Active", value: "active" },
    { label: "Scheduled", value: "scheduled" },
    { label: "Expired", value: "expired" },
  ];
  const data = [
    {
      title: "Active Coupons",
      amount: "5",
      improve: "+1 from last month",
      icon: "/img/dashboard/icons/1.svg",
    },
    {
      title: "Total Redemptions",
      amount: "128",
      improve: "+23.5% from last month",
      icon: "/img/dashboard/icons/2.svg",
    },
    {
      title: "Discount Value",
      amount: "$2,450",
      improve: "+15.2% from last month",
      icon: "/img/dashboard/icons/3.svg",
    },
    {
      title: "Conversion Rate",
      amount: "18.5%",
      improve: "+2.1% from last month",
      icon: "/img/dashboard/icons/4.svg",
    },
  ];

  return (
    <VenderDashboardLayout>
      <div className="row y-gap-20 justify-between items-center mb-5">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">
            Coupon & Promotional Management
          </h1>
          <div className="text-15 text-light-1">
            Create and manage coupon codes and promotional campaigns.
          </div>
        </div>
        <div className="col-auto ms-auto">
          <button className="bg-dark-blue text-white fw-400 text-13 py-5 px-15 rounded-8">
            <i className="icon-plus mr-10 fw-400 text-10"></i>
            Create New Coupon
          </button>
        </div>
      </div>

      <CouponCard data={data} />

      <div className="row px-10 mt-20 mb-20">
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

      <div className="d-flex justify-between items-center">
        <div className="position-relative d-flex items-center">
          <input
            type="text"
            placeholder="Search coupons..."
            className="border-light bg-white rounded-8 px-10 py-5 pl-30"
          />
          <i
            className="icon-search text-light-1 position-absolute"
            style={{
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          ></i>
        </div>
      </div>

      <div className="py-30 px-30 rounded-8 bg-white shadow-3 h-100 mt-20">
        <CouponList />
      </div>
    </VenderDashboardLayout>
  );
};

export default index;
