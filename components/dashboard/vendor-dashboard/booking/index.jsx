"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import BookingCard from "./BookingCard";
import VendorDashboardLayout from "../common/layout";
import BookingList from "./BookingList";
import svgIcon from "@/components/data/svgIcon";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const index = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");
  const [anchorEl, setAnchorEl] = useState(null);
  const showBookingMenu = Boolean(anchorEl);

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
          <button
            id="booking-button"
            aria-controls={showBookingMenu ? "booking-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={showBookingMenu ? "true" : undefined}
            onClick={(event) => {
              setAnchorEl(event.currentTarget);
            }}
            className="bg-dark-blue text-white fw-400 text-14 py-10 px-15 rounded-8"
          >
            {svgIcon.user_add}&nbsp;&nbsp; New Walk-in Booking
          </button>
          <Menu
            id="booking-menu"
            anchorEl={anchorEl}
            open={showBookingMenu}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{
              "aria-labelledby": "booking-button",
            }}
          >
            <MenuItem
              onClick={() => {
                router.push("/vendor/booking/select-service");
              }}
            >
              Single Booking
            </MenuItem>
            <MenuItem
              onClick={() => {
                router.push("/vendor/booking/process");
              }}
            >
              Travel Package Builder
            </MenuItem>
          </Menu>
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
    </VendorDashboardLayout>
  );
};

export default index;
