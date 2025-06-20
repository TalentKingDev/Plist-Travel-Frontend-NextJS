"use client";

import DashboardCard from "./components/DashboardCard";
import ChartMain from "./components/ChartMain";
import Link from "next/link";
import RercentBooking from "./components/RercentBooking";
import { useState } from "react";
import PopularList from "./components/PopularList";
import VendorDashboardLayout from "../common/layout";
import data from "./data";
import DatePicker, { DateObject } from "react-multi-date-picker";

const index = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [startDate, setStartDate] = useState(new DateObject());
  const [endDate, setEndDate] = useState(new DateObject());
  const tabs = [
    { label: "Overview", value: "overview" },
    { label: "Analytics", value: "analytics" },
    { label: "Reports", value: "reports" },
  ];

  const [option, setOption] = useState("hotel");

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
            <optgroup label="Property List">
            <option value="hotel">Hotel</option>
            <option value="vacation">Vacation Rental</option>
            <option value="venue">Event Venue</option>
            <option value="spaces">Spaces</option>
          </optgroup>
          <optgroup label="Non-Property List">
            <option value="tour">Tour</option>
            <option value="activity">Activity</option>
            <option value="event">Event</option>
          </optgroup>
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

      <div className="row y-gap-10 x-gap-10 mb-10">
        {activeTab === "reports" &&<div className="col-md-2 col-sm-6">
          <select className="form-select rounded-4 border-light justify-between text-14 h-50 w-full text-14">
            <option value="category">Select Reports</option>
          </select>
        </div>}
        <div className="col-md-2 col-sm-6">
          <select className="form-select rounded-4 border-light justify-between text-14 h-50 w-full text-14">
            <option value="category">Select Category</option>
          </select>
        </div>
        <div className="col-md-2 col-sm-6">
          <select className="form-select rounded-4 border-light justify-between text-14 h-50 w-full text-14">
            <option value="category">Select Subcategory</option>
          </select>
        </div>
        <div className="col-md-2 col-sm-6">
          <div className="border-light rounded-8 py-10 px-20 w-full cursor-text text-light-1 h-50 bg-white">
            <DatePicker
              inputClass="custom_input-picker"
              containerClassName="custom_container-picker"
              value={startDate}
              onChange={(date) => {
                setStartDate(date);
              }}
              numberOfMonths={1}
              offsetY={10}
              format="MMMM DD"
            />
          </div>
        </div>
        <div className="col-md-2 col-sm-6">
          <div className="border-light rounded-8 py-10 px-20 w-full cursor-text text-light-1 h-50 bg-white">
            <DatePicker
              inputClass="custom_input-picker"
              containerClassName="custom_container-picker"
              value={endDate}
              onChange={(date) => {
                setEndDate(date);
              }}
              numberOfMonths={1}
              offsetY={10}
              format="MMMM DD"
            />
          </div>
        </div>
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
              <div className="flex-shrink-0">
                <h2 className="text-18 lh-1 fw-500">Recent Bookings</h2>
                <div className="text-12 text-light-1">
                  Overview of your listings, bookings, and performance metrics.
                </div>
              </div>
              <div className="flex-grow-1 d-flex justify-end gap-2">
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
