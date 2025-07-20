"use client";

import AgentDashboardLayout from "../common/layout";
import { useState } from "react";
import { Dialog, Drawer } from "@mui/material";
import Filter from "@/components/admin/common/Filter";
import { useRouter } from "next/navigation";
import { Eye } from "lucide-react";
import { MailOutline } from "@mui/icons-material";

const index = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const handleClose = () => {
    setOpenFilter(false);
  };

  const [openModal, setOpenModal] = useState(false);
  const [preview, setPreview] = useState(null);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const router = useRouter();

  const email_templates = [
    {
      name: "Welcome Email",
      category: "User",
      subject: "Welcome to TravelSaaS!",
      type: "text",
      status: "Active",
      content:
        "Dear {{client_name}},\n\nThank you for joining TravelSaaS! We're excited to have you as part of our travel community.\n\nGet started by exploring our platform and booking your next adventure.\n\nBest regards,\nThe TravelSaaS Team",
      last_used: "2023-10-15",
    },
    {
      name: "Booking Confirmation",
      category: "Booking",
      subject: "Your booking has been confirmed",
      type: "text",
      status: "Active",
      content:
        "Dear {{client_name}},\n\nThank you for choosing TravelSaaS! Your booking is confirmed.\n\n📌 **Booking Details**\n- Booking ID: {{booking_id}}\n- Date: {{booking_date}}\n\nWe're excited to serve you. For any changes, please contact us.\n\nBest regards,\nThe Travel Team",
      last_used: "2023-09-22",
    },
    {
      name: "Password Reset",
      category: "User",
      subject: "Reset your password",
      type: "html",
      status: "Active",
      content: `<div class="email-template">
            <h2>Password Reset Request</h2>
            <p>Dear {{client_name}},</p>
            <p>We received a request to reset your password. Click the link below to proceed:</p>
            <a href="{{reset_link}}" style="background: #3182ce; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 10px 0;">Reset Password</a>
            <p>If you didn't request this, please ignore this email.</p>
        </div>`,
      last_used: "2023-11-05",
    },
    {
      name: "Booking Cancellation",
      category: "Booking",
      subject: "Your booking has been cancelled",
      type: "html",
      status: "Active",
      content: `<div class="email-template">
            <h2 style="color: #702459;">Booking Cancellation</h2>
            <p>Dear {{client_name}},</p>
            <div style="background: #faf5ff; padding: 16px; border-radius: 8px; margin: 16px 0;">
                <p>We've processed your cancellation for your booking.</p>
                <p>Cancellation date: {{cancellation_date}}</p>
            </div>
            <p>We're sorry to see you go. If this was a mistake, please reply to this email.</p>
        </div>`,
      last_used: "2023-08-30",
    },
    {
      name: "Payment Receipt",
      category: "Payment",
      subject: "Receipt for your payment",
      type: "text",
      status: "Active",
      content:
        "Dear {{client_name}},\n\nHere is your payment receipt:\n\n💰 **Payment Details**\n- Amount: {{amount}}\n- Date: {{payment_date}}\n- Transaction ID: {{transaction_id}}\n\nThank you for your payment!\n\nBest regards,\nThe TravelSaaS Team",
      last_used: "2023-10-10",
    },
  ];

  return (
    <AgentDashboardLayout>
      <div className="row y-gap-10 x-gap-10 items-center mb-10">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Email Templates</h1>
          <div className="text-14 lh-14 text-light-1">
            Create and manage email templates for various system notifications.
          </div>
        </div>
        <div className="col-auto ms-auto">
          <button
            className="button border-blue-1 text-blue-1 px-15 py-10 rounded-8"
            onClick={() => setOpenFilter(true)}
          >
            Filter
          </button>
          <Drawer anchor="right" open={openFilter} onClose={handleClose}>
            <div className="w-300 rounded-left rounded-8 bg-white px-20 py-20 h-100 d-flex flex-column justify-between">
              <Filter />
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
          <button
            className="button bg-blue-1 text-white px-15 fw-400 py-10 rounded-8"
            onClick={() => router.push("/admin/email-template/add")}
          >
            New Email Template
          </button>
        </div>
      </div>

      <div className="bg-white rounded-8 border-light px-20 py-15">
        <div className="d-flex items-center justify-between mb-10 mt-5">
          <div className="position-relative d-flex items-center w-180 sm:w-full">
            <input
              type="text"
              placeholder="Search pages..."
              className="border-light bg-white rounded-8 px-10 py-5 pl-30"
            />
            <i
              className="icon-search text-light-1 position-absolute"
              style={{
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            ></i>
          </div>
          <button className="button border-light px-20 py-10 rounded-8">
            <MailOutline className="text-18 mr-10" /> Test Email
          </button>
        </div>
        <div className="bg-white rounded-8 border-light px-15 py-5 mt-10">
          <div className="overflow-scroll scroll-bar-1">
            <table className="table-2 col-12">
              <thead>
                <tr className="text-light-1 fw-600">
                  <th>Template Name</th>
                  <th>Category</th>
                  <th>Subject</th>
                  <th>Last Used</th>
                  <th>Status</th>
                  <th>Preview</th>
                </tr>
              </thead>
              <tbody>
                {email_templates.map((row, index) => (
                  <tr key={index}>
                    <td className="align-middle">{row.name}</td>
                    <td className="align-middle">{row.category}</td>
                    <td className="align-middle">{row.subject}</td>
                    <td className="align-middle">{row.last_used}</td>
                    <td className="align-middle">
                      <span className="text-14 px-10 text-white bg-dark-blue rounded-100 fw-500">
                        {row.status}
                      </span>
                    </td>
                    <td className="align-middle">
                      <Eye
                        size={18}
                        className="cursor-pointer"
                        onClick={() => {
                          setPreview(row);
                          handleOpenModal();
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <div className="px-20 py-20" style={{ width: "500px" }}>
          <h1 className="text-20 fw-500 mb-10">Email Template Preview</h1>
          {preview?.type == "text" ? (
            <div
              dangerouslySetInnerHTML={{
                __html: preview?.content.replace(/\n/g, "<br/>"),
              }}
            />
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: preview?.content,
              }}
            />
          )}
        </div>
      </Dialog>
    </AgentDashboardLayout>
  );
};

export default index;
