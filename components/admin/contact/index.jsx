"use client";

import { useState } from "react";
import DashboardCard from "../common/DashboardCard";
import AdminDashboardLayout from "../common/layout";
import data from "./data";
import FilterDrawer from "../common/Filter";
import { Drawer } from "@mui/material";
import { Download, Filter } from "lucide-react";

const index = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const handleClose = () => {
    setOpenFilter(false);
  };

  const tickets = [
    {
      id: 1,
      image: "/img/testimonials/1/4.png",
      name: "Luxury Beach Resort",
      type: "Hotel",
      category: "Boutique Hotels",
      subcategory: "Design",
      orderDate: "06/15/2025",
      exeTime: "06/18/2025 ~ 06/23/2025",
      totalPrice: "$130",
      paid: "$0",
      status: "Pending",
    },
    {
      id: 2,
      image: "/img/testimonials/1/4.png",
      name: "City Walking Tour",
      type: "Activities",
      category: "Classes & Learning",
      subcategory: "Education Training",
      orderDate: "06/15/2025",
      exeTime: "06/18/2025 ~ 06/23/2025",
      totalPrice: "$200",
      paid: "$0",
      status: "Confirmed",
    },
    {
      id: 3,
      image: "/img/testimonials/1/4.png",
      name: "Wine Tasting Experience",
      type: "Events",
      category: "Festivals",
      subcategory: "Film",
      orderDate: "06/15/2025",
      exeTime: "06/18/2025 ~ 06/23/2025",
      totalPrice: "$200",
      paid: "$0",
      status: "Cancelled",
    },
    {
      id: 4,
      image: "/img/testimonials/1/4.png",
      name: "Mountain Cabin Retreat",
      type: "Hotel",
      category: "Business Hotels",
      subcategory: "Executive Suites",
      orderDate: "06/15/2025",
      exeTime: "06/18/2025 ~ 06/23/2025",
      totalPrice: "$130",
      paid: "$50",
      status: "Pending",
    },
  ];

  return (
    <AdminDashboardLayout>
      <div className="row y-gap-15 x-gap-10 items-center mb-5">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Customer Support</h1>
          <div className="text-14 text-light-1 lh-14">
            Manage support tickets and customer inquiries.
          </div>
        </div>
        <div className="col-auto ms-auto">
          <button
            className="button border-blue-1 text-blue-1 px-15 py-10 rounded-8"
            onClick={() => setOpenFilter(true)}
          >
            <Filter size={18} className="mr-10" /> Filter
          </button>
          <Drawer anchor="right" open={openFilter} onClose={handleClose}>
            <div className="w-300 rounded-left rounded-8 bg-white px-20 py-20 h-100 d-flex flex-column justify-between">
              <FilterDrawer />
              <div className="col-12 d-flex justify-end gap-2">
                <button
                  className="border-light rounded-8 py-5 px-15 text-14"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-1 text-white rounded-8 py-5 px-15 text-14"
                  onClick={handleClose}
                >
                  Save
                </button>
              </div>
            </div>
          </Drawer>
        </div>
        <div className="col-auto">
          <button className="button bg-dark-blue text-white px-20 py-10 rounded-8">
            <Download size={18} className="mr-10" /> Export
          </button>
        </div>
      </div>

      <DashboardCard data={data} />

      <div className="py-20 px-30 rounded-8 bg-white shadow-3 h-100 mt-20">
        <div className="overflow-scroll scroll-bar-1 pt-0">
          <table className="table-2 col-12">
            <thead>
              <tr className="text-light-1 fw-600">
                <th>Image</th>
                <th>Name</th>
                <th>Listing Type</th>
                <th>Category</th>
                <th>Subcategory</th>
                <th>Order Date</th>
                <th>Execution Time</th>
                <th>Total Price</th>
                <th>Paid</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((row, index) => (
                <tr key={index}>
                  <td className="align-middle">
                    <img
                      className="rounded-8"
                      src={row.image}
                      alt={row.name}
                      style={{
                        height: "50px",
                        width: "60px",
                        objectFit: "fill",
                      }}
                    />
                  </td>
                  <td className="align-middle">{row.name}</td>
                  <td className="align-middle">{row.type}</td>
                  <td className="align-middle">{row.category}</td>
                  <td className="align-middle">{row.subcategory}</td>
                  <td className="align-middle">{row.orderDate}</td>
                  <td className="align-middle">{row.exeTime}</td>
                  <td className="align-middle">{row.totalPrice}</td>
                  <td className="align-middle">{row.paid}</td>
                  <td className="align-middle">
                    <span
                      className={`rounded-100 py-4 px-10 text-center text-14 fw-500 ${
                        {
                          Pending: "bg-yellow-4 text-yellow-3",
                          // Approved: "bg-green-4 text-green-3",
                          Cancelled: "bg-red-3 text-red-2",
                          Confirmed: "bg-blue-1-05 text-blue-1",
                        }[row.status] || "bg-gray-4 text-gray-3"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="align-middle">
                    <span className="material-symbols-outlined">
                      more_horiz
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default index;
