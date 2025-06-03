"use client";

import { act, useState } from "react";
import VendorDashboardLayout from "../../common/layout";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import svgIcon from "@/components/data/svgIcon";

const Management = () => {
  const quickReplies = [
    "Thank you for your inquiry!",
    "Your booking is confirmed. We’re looking forward to your stay at our property.",
    "We hope you enjoyed your stay. Please consider leaving a review",
  ];

  const scheduledMessages = [
    {
      title: "Inquiry is received",
      message:
        "Thank you for reaching out. A representative will get back to you shortly.",
    },
    {
      title: "Booking is received",
      message: "Your booking has been received and is being processed.",
    },
    {
      title: "3 days before check-in date",
      message: "We look forward to your upcoming stay with us. See you soon!",
    },
    {
      title: "1 day after check-out date",
      message: "Thank you for choosing us. We hope to welcome you back!",
    },
  ];

  return (
    <VendorDashboardLayout>
      <div className="row y-gap-10 x-gap-20 justify-between">
        <div className="col-12 d-flex sm:d-block justify-between items-center mb-10">
          <div className="flex-shrink-0">
            <h1 className="text-30 lh-14 fw-600">Message Management</h1>
            <div className="text-15 text-light-1">
              Allow vendors to create quick replies and scheduled messages.
            </div>
          </div>
          <div className="flex-grow-0">
            <button className="button -md bg-blue-1 px-15 py-10 fw-400 text-14 text-white rounded-8">
              Create quick reply
            </button>
          </div>
        </div>

        <h1 className="text-20 lh-14 fw-600">Quick Replies</h1>
        <div className="col-12 px-10">
          <div className="bg-white rounded-8 border-light py-5">
            {quickReplies.map((item, index) => (
              <>
                <div className="d-flex justify-between items-start gap-2 px-20 py-15">
                  <div className="text-16 lh-14">{item}</div>
                  <div className="text-16 lh-14 text-blue-1 cursor-pointer">
                    Edit
                  </div>
                </div>
                {index === quickReplies.length - 1 ? null : (
                  <div className="border-top-light"></div>
                )}
              </>
            ))}
          </div>
        </div>

        <h1 className="text-20 lh-14 fw-600">Scheduled Messages</h1>
        <div className="col-12 px-10">
          <div className="bg-white rounded-8 border-light py-5">
            {scheduledMessages.map((item, index) => (
              <>
                <div className="d-flex justify-between items-start gap-2 px-20 py-15">
                  <div className="text-16 lh-14 w-25">{item.title}</div>
                  <div className="w-75 d-flex justify-between items-start gap-2">
                    <div className="text-16 lh-14 text-light-1">
                      {item.message}
                    </div>
                    <div className="text-16 lh-14 text-blue-1 cursor-pointer">
                      Edit
                    </div>
                  </div>
                </div>
                {index === scheduledMessages.length - 1 ? null : (
                  <div className="border-top-light"></div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
    </VendorDashboardLayout>
  );
};

export default Management;
