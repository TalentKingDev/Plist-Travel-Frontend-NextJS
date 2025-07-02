"use client";

import AgentDashboardLayout from "../../common/layout";
import { useState } from "react";
import { Copy, Eye } from "lucide-react";
import { Telegram } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const index = () => {
  const dynamicFields = [
    { value: "{{ client_name }}", label: "Client's full name" },
    { value: "{{ booking_id }}", label: "Booking reference number" },
    { value: "{{ booking_date }}", label: "Date of booking" },
    { value: "{{ travel_date }}", label: "Date of travel" },
    { value: "{{ service_type }}", label: "Type of service booked" },
    { value: "{{ service_details }}", label: "Details of the service" },
    { value: "{{ total_amount }}", label: "Total amount" },
  ];

  const router = useRouter();

  return (
    <AgentDashboardLayout>
      <div className="row y-gap-10 x-gap-10 items-center mb-10">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Email Templates</h1>
          <div className="text-14 lh-14 text-light-1">
            Create and manage email templates for client communications
          </div>
        </div>
      </div>

      <div className="row y-gap-10 x-gap-10 mt-10">
        <div className="col-sm-6">
          <div className="bg-white rounded-8 border-light px-20 py-15 h-100">
            <h1 className="text-24 lh-14 fw-500">Create New Template</h1>
            <div className="text-14 lh-14 text-light-1">
              Create a new email template for client communications
            </div>
            <div className="row y-gap-10 x-gap-10 mt-10">
              <div className="col-sm-6">
                <h1 className="text-14 lh-14 fw-500">
                  Template Name<span className="text-red-1">*</span>
                </h1>
                <input
                  className="border-light rounded-8 h-45 px-15 w-100 mt-5"
                  type="text"
                  placeholder="e.g. Booking Confirmation"
                />
              </div>

              <div className="col-sm-6">
                <h1 className="text-14 lh-14 fw-500">
                  Category<span className="text-red-1">*</span>
                </h1>
                <select className="form-select rounded-8 border-light h-45 px-15 w-100 mt-5">
                  <option value="Booking">Booking</option>
                  <option value="Payment">Payment</option>
                  <option value="Refund">Refund</option>
                  <option value="Technical">Technical</option>
                  <option value="Commission">Commission</option>
                </select>
              </div>

              <div className="col-12">
                <h1 className="text-14 lh-14 fw-500">
                  Email Subject<span className="text-red-1">*</span>
                </h1>
                <input
                  className="border-light rounded-8 py-5 px-15 w-100 mt-5"
                  type="text"
                  placeholder="e.g. Your booking has been confirmed"
                />
              </div>

              <div className="col-12">
                <h1 className="text-14 lh-14 fw-500">
                  Email Content<span className="text-red-1">*</span>
                </h1>
                <textarea
                  className="border-light rounded-8 py-5 px-15 w-100 mt-5"
                  placeholder="Enter your email content here..."
                  rows={8}
                />
              </div>

              <div className="row x-gap-10 y-gap-10 mt-10">
                <div className="col-sm-auto">
                  <button className="text-14 fw-500 border-light rounded-8 px-15 py-5">
                    Reset
                  </button>
                </div>
                <div className="col-sm-auto ms-auto">
                  <button className="text-14 fw-500 border-light rounded-8 px-15 py-5">
                    <Eye /> Preview
                  </button>
                </div>
                <div className="col-sm-auto">
                  <button
                    className="text-14 bg-blue-1 text-white rounded-8 px-15 py-5 fw-400"
                    onClick={() => router.push("/agent/email-template")}
                  >
                    Save Template
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="bg-white rounded-8 border-light px-20 py-15 h-100">
            <h1 className="text-24 lh-14 fw-500">Placeholders</h1>
            <div className="text-14 lh-14 text-light-1">
              Insert dynamic content in your template
            </div>
            <div className="text-14 lh-14 fw-500 mt-10">
              Available Placeholders
            </div>
            {dynamicFields.map((item, index) => (
              <button
                className="text-14 border-light bg-white rounded-8 w-100 px-15 py-5 fw-400 mt-10"
                key={index}
              >
                <div className="d-flex justify-between items-center">
                  <div className="d-flex flex-column items-start">
                    <div className="text-14 lh-14">{item.value}</div>
                    <div className="text-12 lh-14 text-light-1">
                      {item.label}
                    </div>
                  </div>
                  <Copy />
                </div>
              </button>
            ))}

            <div className="text-14 lh-14 fw-500 mt-15">Send Test Email</div>

            <div className="d-flex items-center gap-2 mt-5">
              <input
                type="text"
                className="border-light rounded-8 px-15 w-100 h-45"
                placeholder="Enter email address"
              />
              <button className="text-14 border-light rounded-8 size-45 fw-400">
                <Telegram />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AgentDashboardLayout>
  );
};

export default index;
