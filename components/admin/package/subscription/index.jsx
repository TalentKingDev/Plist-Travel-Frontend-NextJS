"use client";

import { Plus } from "lucide-react";
import AdminDashboardLayout from "../../common/layout";
import { Dialog } from "@mui/material";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro";

const index = () => {
  return (
    <AdminDashboardLayout>
      <div className="row y-gap-15 x-gap-10 items-center mb-5">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">
            Package Subscription Management
          </h1>
          <div className="text-14 text-light-1 lh-14">
            Manage and monitor all package subscriptions across the platform.
          </div>
        </div>
        {/* <div className="col-auto ms-auto">
          <button className="button bg-dark-blue text-white px-20 py-10 rounded-8">
            <Plus size={18} className="mr-10" /> Create New Plan
          </button>
        </div> */}
      </div>

      <div className="py-20 px-30 rounded-8 bg-white shadow-3 h-100 mt-20">
        <SubscriptionList />
      </div>
    </AdminDashboardLayout>
  );
};

const SubscriptionList = () => {
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const onStatusModalClose = () => {
    setShowStatusModal(false);
  };
  const onEditModalClose = () => {
    setShowEditModal(false);
  };

  const subscriptions = [
    {
      business_name: "Ciara Suarez",
      package_name: "Hotel Bronze Package",
      created_at: "09/01/2025 11:36",
      start_date: "09/01/2025",
      end_date: "09/02/2025",
      trial_end_date: "16/02/2025",
      status: "Declined",
      paid_via: "offline",
      transaction_id: "123456",
      coupon_code: "",
      original_price: 0,
      paid_amount: 0,
    },
    {
      business_name: "Ciara Suarez",
      package_name: "Hotel Bronze Package",
      created_at: "09/01/2025 11:40",
      start_date: "09/01/2025",
      end_date: "09/02/2025",
      trial_end_date: "16/02/2025",
      status: "Declined",
      paid_via: "offline",
      transaction_id: "123456",
      coupon_code: "",
      original_price: 0,
      paid_amount: 0,
    },
    {
      business_name: "Ciara Suarez",
      package_name: "Hotel Bronze Package",
      created_at: "09/01/2025 11:43",
      start_date: "09/02/2025",
      end_date: "09/03/2025",
      trial_end_date: "16/02/2025",
      status: "Declined",
      paid_via: "offline",
      transaction_id: "123456",
      coupon_code: "",
      original_price: 0,
      paid_amount: 0,
    },
    {
      business_name: "Ciara Suarez",
      package_name: "Hotel Bronze Package",
      created_at: "20/01/2025 08:35",
      start_date: "20/01/2025",
      end_date: "20/02/2025",
      end_date: "20/02/2025",
      trial_end_date: "27/02/2025",
      status: "Approved",
      paid_via: "offline",
      transaction_id: "123456",
      coupon_code: "",
      original_price: 0,
      paid_amount: 0,
    },
    {
      business_name: "Diamond",
      package_name: "Hotel Bronze Package",
      created_at: "23/01/2025 11:59",
      start_date: "23/01/2025",
      end_date: "23/02/2025",
      trial_end_date: "02/03/2025",
      status: "Approved",
      paid_via: "",
      transaction_id: "Free",
      coupon_code: "",
      original_price: 0,
      paid_amount: 0,
    },
  ];

  return (
    <>
      <div className="row x-gap-15 border-bottom-light pb-20 mb-20">
        <div className="col-sm-3">
          <h1 className="text-14 fw-500 lh-14">Packages</h1>
          <select className="form-select bg-white border-light rounded-8 px-10 h-45 w-100 mt-5">
            <option value="all">All</option>
          </select>
        </div>
        <div className="col-sm-3">
          <h1 className="text-14 fw-500 lh-14">Status</h1>
          <select className="form-select bg-white border-light rounded-8 px-10 h-45 w-100 mt-5">
            <option value="all">All</option>
          </select>
        </div>
        <div className="col-sm-3">
          <h1 className="text-14 fw-500 lh-14 mb-5">Created At</h1>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
              slotProps={{
                textField: {
                  sx: {
                    width: "100%",
                    "& .MuiPickersInputBase-root": { height: 45 },
                  },
                },
              }}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className="overflow-scroll scroll-bar-1">
        <div className="d-flex items-center justify-between mb-10 mt-5">
          <div className="position-relative d-flex items-center w-180 sm:w-full">
            <input
              type="text"
              placeholder="Search..."
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
          <div className="d-flex items-center gap-2">
            <button className="button border-light px-15 py-5 text-12 fw-500 rounded-8">
              Export CSV
            </button>
            <button className="button border-light px-15 py-5 text-12 fw-500 rounded-8">
              Export Excel
            </button>
            <button className="button border-light px-15 py-5 text-12 fw-500 rounded-8">
              Print
            </button>
            <button className="button border-light px-15 py-5 text-12 fw-500 rounded-8">
              Column Visibility
            </button>
            <button className="button border-light px-15 py-5 text-12 fw-500 rounded-8">
              Export PDF
            </button>
          </div>
        </div>
        <table className="table-2 col-12 text-12 text-nowrap">
          <thead>
            <tr className="text-light-1 fw-600">
              <th>Business Name</th>
              <th>Package Name</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Start Date</th>
              <th>Trial End Date</th>
              <th>End Date</th>
              <th>Coupon Code</th>
              <th>Original Price</th>
              <th>Paid Amount</th>
              <th>Paid Via</th>
              <th>Payment Transaction ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((row, index) => (
              <tr key={index} className="text-12">
                <td className="align-middle text-12">{row.business_name}</td>
                <td className="align-middle text-12">{row.package_name}</td>
                <td className="align-middle">
                  <span
                    className={`rounded-100 px-10 text-center text-12 fw-500 ${
                      {
                        Declined: "bg-red-1 text-white",
                        Approved: "bg-green-3 text-white",
                      }[row.status] || "bg-light-2 text-light-1"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="align-middle text-12">{row.created_at}</td>
                <td className="align-middle text-12">{row.start_date}</td>
                <td className="align-middle text-12">{row.trial_end_date}</td>
                <td className="align-middle text-12">{row.end_date}</td>
                <td className="align-middle text-12">{row.coupon_code}</td>
                <td className="align-middle text-12">{row.original_price}</td>
                <td className="align-middle text-12">{row.paid_amount}</td>
                <td className="align-middle text-12">{row.paid_via}</td>
                <td className="align-middle text-12">{row.transaction_id}</td>
                <td className="align-middle d-flex items-center gap-1">
                  <span
                    className="border-blue-1 text-blue-1 rounded-8 px-10 text-center text-12 fw-500 cursor-pointer"
                    onClick={() => setShowStatusModal(true)}
                  >
                    Status
                  </span>
                  <span
                    className="border-green-2 text-green-2 rounded-8 px-10 text-center text-12 fw-500 cursor-pointer"
                    onClick={() => setShowEditModal(true)}
                  >
                    Edit
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <StatusModal isOpen={showStatusModal} onClose={onStatusModalClose} />
        <EditModal isOpen={showEditModal} onClose={onEditModalClose} />
      </div>
    </>
  );
};

const StatusModal = ({ isOpen, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-title"
    >
      <div className="px-20 py-20 w-500 sm:w-full">
        <div className="row x-gap-15 y-gap-15">
          <div className="col-12">
            <h1 className="text-18 fw-500 lh-14">Subscription Status</h1>
          </div>
          <div className="col-12 mt-5">
            <h1 className="text-14 fw-500 lh-14">Status</h1>
            <select className="form-select bg-white border-light rounded-8 px-10 h-45 w-100 mt-5">
              <option value="declined">Declined</option>
              <option value="in-progress">In Progress</option>
              <option value="approved">Approved</option>
            </select>
          </div>

          <div className="col-12 mt-5">
            <h1 className="text-14 fw-500 lh-14">Payment Transaction ID</h1>
            <input
              type="text"
              placeholder="Enter Transaction ID"
              className="border-light bg-white rounded-8 px-10 py-5 w-100 mt-5"
            />
          </div>
        </div>
        <div className="d-flex justify-end gap-2 mt-10">
          <button
            className="text-14 border-light rounded-8 px-10 py-5"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="text-14 bg-blue-1 text-white fw-500 rounded-8 px-10 py-5"
            onClick={onClose}
          >
            Update
          </button>
        </div>
      </div>
    </Dialog>
  );
};

const EditModal = ({ isOpen, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-title"
    >
      <div className="px-20 py-20 w-500 sm:w-full">
        <div className="row x-gap-15 y-gap-15">
          <div className="col-12">
            <h1 className="text-18 fw-500 lh-14">Edit Subscription</h1>
          </div>
          <div className="col-12 mt-5">
            <h1 className="text-14 fw-500 lh-14 mb-5">Start Date</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                slotProps={{
                  textField: {
                    sx: {
                      width: "100%",
                      "& .MuiPickersInputBase-root": { height: 45 },
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </div>

          <div className="col-12 mt-5">
            <h1 className="text-14 fw-500 lh-14 mb-5">End Date</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                slotProps={{
                  textField: {
                    sx: {
                      width: "100%",
                      "& .MuiPickersInputBase-root": { height: 45 },
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </div>

          <div className="col-12 mt-5">
            <h1 className="text-14 fw-500 lh-14 mb-5">Trial End Date</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                slotProps={{
                  textField: {
                    sx: {
                      width: "100%",
                      "& .MuiPickersInputBase-root": { height: 45 },
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="d-flex justify-end gap-2 mt-10">
          <button
            className="text-14 border-light rounded-8 px-10 py-5"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="text-14 bg-blue-1 text-white fw-500 rounded-8 px-10 py-5"
            onClick={onClose}
          >
            Update
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default index;
