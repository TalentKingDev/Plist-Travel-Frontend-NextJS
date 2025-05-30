"use client";

import svgIcon from "@/components/data/svgIcon";
import VendorDashboardLayout from "../../common/layout";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const index = () => {
  return (
    <VendorDashboardLayout>
      <div className="row y-gap-10 justify-between items-end mb-10">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Booking Calendar</h1>
          <div className="text-15 text-light-1">
            Manage and track bookings for your listings in calendar view.
          </div>
        </div>
      </div>

      <div className="bg-white border-light rounded-8 py-20 px-20">
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
          <span className="bg-blue-1 text-white text-10 rounded-100 px-10 mr-5">
            Confirmed
          </span>
          <span className="bg-dark-yellow text-white text-10 rounded-100 px-10 mr-5">
            Pending
          </span>
          <span className="bg-red-1 text-white text-10 rounded-100 px-10 mr-5">
            Cancelled
          </span>
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
          />
        </div>
      </div>
    </VendorDashboardLayout>
  );
};

export default index;
