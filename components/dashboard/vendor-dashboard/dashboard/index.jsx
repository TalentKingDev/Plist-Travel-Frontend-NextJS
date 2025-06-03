"use client";

import DashboardCard from "./components/DashboardCard";
import ChartMain from "./components/ChartMain";
import Link from "next/link";
import RercentBooking from "./components/RercentBooking";
import { useState } from "react";
import PopularList from "./components/PopularList";
import VendorDashboardLayout from "../common/layout";
import data from "./details/data";

const index = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const tabs = [
    { label: "Overview", value: "overview", data: data.overview },
    { label: "Property", value: "property", data: data.property },
    { label: "Vacation", value: "vacation", data: data.vacation },
    { label: "Tour", value: "tour", data: data.tour },
    { label: "Event", value: "event", data: data.event },
    { label: "Attraction", value: "attraction", data: data.attraction },
  ];

  return (
    <VendorDashboardLayout>
      <div className="row y-gap-20 justify-between items-center mb-5">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Vendor Dashboard</h1>
          <div className="text-15 text-light-1">
            Overview of your listings, bookings, and performance metrics.
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
      <DashboardCard
        data={tabs.find((item) => item.value === activeTab).data}
      />

      <div className="row y-gap-30 pt-20 chart_responsive">
        <div className="col-xl-7 col-lg-6">
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

        <div className="col-xl-5 col-lg-6">
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
              <div>
                <h2 className="text-18 lh-1 fw-500">Popular Listings</h2>
                <div className="text-12 text-light-1">
                  Your most booked listings this month
                </div>
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
