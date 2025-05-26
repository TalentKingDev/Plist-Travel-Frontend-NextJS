"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import BookingCard from "./BookingCard";
import VendorDashboardLayout from "../common/layout";
import BookingList from "./BookingList";
import svgIcon from "@/components/data/svgIcon";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const index = () => {

  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");
  const tabs = [
    { label: "All Bookings", value: "all" },
    { label: "Upcoming", value: "upcoming" },
    { label: "Past", value: "past" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Walk-in", value: "walk-in" },
  ];
  const data = [
    {
      title: "Total Bookings",
      amount: "432",
      improve: "+8.2% from last month",
      icon: (
        <span className="material-symbols-outlined text-blue-1">
          calendar_today
        </span>
      ),
    },
    {
      title: "Confirmed",
      amount: "356",
      improve: "82.4% of total bookings",
      icon: (
        <span className="material-symbols-outlined text-green-3">check</span>
      ),
    },
    {
      title: "Pending",
      amount: "48",
      improve: "11.1% of total bookings",
      icon: (
        <span className="material-symbols-outlined text-yellow-1">
          calendar_today
        </span>
      ),
    },
    {
      title: "Cancelled",
      amount: "28",
      improve: "6.5% of total bookings",
      icon: <span className="material-symbols-outlined text-red-1">close</span>,
    },
  ];

  return (
    <VendorDashboardLayout>
      <div className="row y-gap-20 justify-between items-center mb-5">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Booking Management </h1>
          <div className="text-15 text-light-1">
            Manage and track bookings for your listings.
          </div>
        </div>
        <div className="col-auto ms-auto">
          <button onClick={() => {
            router.push("/vendor/booking/select-service");
            // router.push("/vendor/booking/process");
          }} className="bg-dark-blue text-white fw-400 text-13 py-5 px-15 rounded-8">
            {svgIcon.user_add}&nbsp;&nbsp; New Walk-in Booking
          </button>
        </div>
      </div>

      <BookingCard data={data} />

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

      <div className="py-20 px-30 rounded-8 bg-white shadow-3 h-100 mt-20">
        <div className="row y-gap-20 x-gap-10 justify-between items-center mb-20">
          <div className="col-md-auto position-relative d-flex items-center">
            <input
              type="text"
              placeholder="Search booking..."
              className="border-light bg-white rounded-8 px-10 py-10 pl-30"
            />
            <i
              className="icon-search text-light-1 position-absolute"
              style={{
                left: "15px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            ></i>
          </div>
          <div className="col-auto">
            <select className="form-select rounded-8 border-light justify-between text-16 px-15 h-50 w-140 text-14">
              <option value="" defaultValue>
                All Statuses
              </option>
            </select>
          </div>
          <div className="col-auto">
            <select className="form-select rounded-8 border-light justify-between text-16 px-15 h-50 w-210 text-14">
              <option value="" defaultValue>
                Listing Category
              </option>
            </select>
          </div>
          <div className="col-auto ms-auto">
            <button className="size-50 rounded-8 flex-center border-light">
              {svgIcon.filter_alt}
            </button>
          </div>
        </div>

        <BookingList />
      </div>

      <div className="bg-white border-light rounded-8 py-20 px-20 mt-20">
        <div className="row y-gap-10 x-gap-10 justify-between items-center mb-10">
          <div className="col-auto">
            <h1 className="text-24 fw-600">Booking Calendar</h1>
          </div>
          <div className="col-md-auto d-flex justify-end items-center">
            <button className="border-light text-16 h-50 px-15 rounded-8 mr-10 d-flex items-center">
              {svgIcon.filter_alt}&nbsp;<span>Status Filter</span>
            </button>
            <select className="form-select rounded-8 border-light justify-between text-16 px-15 h-50 w-140 text-14">
              <option value="" defaultValue>
                All Statuses
              </option>
            </select>
          </div>
        </div>
        <div className="d-flex items-center mb-20">
          <span className="bg-blue-1 text-white text-10 rounded-100 px-10 mr-5">Confirmed</span>
          <span className="bg-dark-yellow text-white text-10 rounded-100 px-10 mr-5">Pending</span>
          <span className="bg-red-1 text-white text-10 rounded-100 px-10 mr-5">Cancelled</span>
        </div>
        <div className="border-light rounded-8 py-20 px-20">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            headerToolbar={{
              start: "prev,next,today",
              center: "title",
              end: "dayGridMonth,dayGridWeek,dayGridDay",
            }}
            // events={events}
            // eventContent={renderEventContent}
          />
        </div>
      </div>
    </VendorDashboardLayout>
  );
};

export default index;
