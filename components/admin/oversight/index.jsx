"use client";

import { Download } from "lucide-react";
import AdminDashboardLayout from "../common/layout";
import DashboardCard from "./DashboardCard";
import data from "./data";
import Filter from "../common/Filter";
import BookingList from "./BookingList";

const index = () => {
  return (
    <AdminDashboardLayout>
      <div className="row y-gap-15 x-gap-10 items-center mb-5">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Booking Oversight</h1>
          <div className="text-14 text-light-1 lh-14">
            Manage and monitor all bookings across the platform.
          </div>
        </div>
        <div className="col-auto ms-auto">
          <button className="button border-light bg-white px-20 py-10 rounded-8">
            <Download size={18} className="mr-10" /> Export
          </button>
        </div>
      </div>

      <Filter />

      <DashboardCard data={data} />

      <div className="py-20 px-30 rounded-8 bg-white shadow-3 h-100 mt-20">
        <BookingList />
      </div>
    </AdminDashboardLayout>
  );
};

export default index;
