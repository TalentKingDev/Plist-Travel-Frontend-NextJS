"use client";

import { useState } from "react";
import AdminDashboardLayout from "../common/layout";
import FilterDrawer from "../common/Filter";
import { Drawer } from "@mui/material";
import { Filter } from "lucide-react";
import { ChatBubbleOutline, FindInPage, Language } from "@mui/icons-material";
import List from "./List";
import Add from "./Add";

const index = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const handleClose = () => {
    setOpenFilter(false);
  };

  const [activeTab, setActiveTab] = useState("list");

  const tabs = [
    { label: "List", value: "list", content: <List /> },
    { label: "Add", value: "add", content: <Add /> },
  ];

  return (
    <AdminDashboardLayout>
      <div className="row y-gap-15 x-gap-10 items-center mb-5">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">SEO Optimization</h1>
          <div className="text-14 text-light-1 lh-14">
            Manage meta tags and SEO settings for pages across the platform.
          </div>
        </div>
        <div className="col-auto ms-auto">
          <button
            className="button border-light bg-white px-15 py-10 rounded-8"
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
          <button className="button border-light bg-white px-15 py-10 rounded-8">
            <Language className="text-18 mr-10" /> View Site SEO Report
          </button>
        </div>
        <div className="col-auto">
          <button
            className="button bg-dark-blue text-white px-20 py-10 rounded-8"
            onClick={() => setActiveTab("add")}
          >
            <FindInPage className="text-18 mr-10" /> Create SEO
          </button>
        </div>
      </div>

      <div className="py-15 px-30 rounded-8 bg-white shadow-3 h-100">
        {tabs.find((item) => item.value === activeTab)?.content}
      </div>
    </AdminDashboardLayout>
  );
};

export default index;
