"use client";

import DashboardCard from "./components/DashboardCard";
import ChartMain from "./components/ChartMain";
import Link from "next/link";
import RercentBooking from "./components/RercentBooking";
import { useState } from "react";
import PopularList from "./components/PopularList";
import VendorDashboardLayout from "../common/layout";
import data from "./data";

const index = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const tabs = [
    { label: "Overview", value: "overview" },
    { label: "Analytics", value: "analytics" },
    { label: "Reports", value: "reports" },
  ];

  const [option, setOption] = useState("property");
  const options = [
    { label: "Property", value: "property" },
    { label: "Vacation Rental", value: "vacation" },
    { label: "Event Venue", value: "event" },
    { label: "Tour Operator", value: "tour" },
    { label: "Activity Operator", value: "activity" },
  ];

  return (
    <VendorDashboardLayout>
      <div className="row y-gap-20 justify-between items-center mb-5">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Dashboard</h1>
          <div className="text-15 text-light-1">
            Monitor your business performance with industry-specific metrics
          </div>
        </div>
        <div className="col-auto">
          <select
            className="form-select rounded-4 border-light justify-between text-16 fw-500 px-20 h-50 w-200 sm:w-full text-14"
            onChange={(e) => setOption(e.target.value)}
          >
            {options.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
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
      <DashboardCard data={data[option][activeTab]} />

      <div className="row y-gap-30 pt-20 chart_responsive">
        <div className="col-xl-7">
          <div className="py-30 px-30 rounded-8 bg-white shadow-3">
            <div className="d-flex justify-between items-center">
              <h2 className="text-18 lh-1 fw-500">
                Revenue & Bookings Overview
              </h2>
              {/* <ChartSelect /> */}
            </div>

            <div className="pt-30">
              <ChartMain />
            </div>
          </div>
        </div>

        <div className="col-xl-5">
          <div className="py-30 px-30 rounded-8 bg-white shadow-3 h-100">
            <div className="d-flex justify-between items-center">
              <div>
                <h2 className="text-18 lh-1 fw-500">Recent Bookings</h2>
                <div className="text-12 text-light-1">
                  Overview of your listings, bookings, and performance metrics.
                </div>
              </div>
              <div>
                <Link href="#" className="text-14 text-blue-1 fw-500 underline">
                  View All
                </Link>
              </div>
            </div>

            <RercentBooking />
          </div>
        </div>

        <div className="col-12">
          <div className="py-30 px-30 rounded-8 bg-white shadow-3">
            <div className="d-flex justify-between items-center">
              <div className="d-flex items-center gap-2">
                <div>
                  <h2 className="text-18 lh-1 fw-500">Popular Listings</h2>
                  <div className="text-12 text-light-1">
                    Your most booked listings this month
                  </div>
                </div>
                <select
                  className="form-select rounded-4 border-light justify-between text-16 fw-500 px-20 w-200 sm:w-full text-14"
                  onChange={(e) => setOption(e.target.value)}
                >
                  {options.map((item) => (
                    <option value={item.value}>{item.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <Link href="#" className="text-14 text-blue-1 fw-500 underline">
                  View All
                </Link>
              </div>
            </div>

            <PopularList />
          </div>
        </div>
      </div>
    </VendorDashboardLayout>
  );
};

export default index;
