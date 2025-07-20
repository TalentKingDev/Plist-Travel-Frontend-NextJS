"use client";

import { useState } from "react";
import DashboardCard from "../common/DashboardCard";
import AdminDashboardLayout from "../common/layout";
import data from "./data";
import FilterDrawer from "../common/Filter";
import { Drawer } from "@mui/material";
import { Download, Filter } from "lucide-react";
import TicketList from "./TicketList";
import Conversation from "./Conversation";
import { ChatBubbleOutline } from "@mui/icons-material";

const index = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const handleClose = () => {
    setOpenFilter(false);
  };

  const [activeTab, setActiveTab] = useState("tickets");
  const tabs = [
    { label: "Tickets", value: "tickets", content: <TicketList /> },
    { label: "Conversation", value: "conversation", content: <Conversation /> },
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
            <ChatBubbleOutline className="mr-10 text-18" /> New Ticket
          </button>
        </div>
      </div>

      <DashboardCard data={data} />

      <div className="row px-10 mb-20 mt-20">
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

      <div className="py-20 px-30 rounded-8 bg-white shadow-3 h-100">
        {tabs.find((item) => item.value === activeTab)?.content}
      </div>
    </AdminDashboardLayout>
  );
};

export default index;
