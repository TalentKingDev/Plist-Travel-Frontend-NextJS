"use client";

import AdminDashboardLayout from "../common/layout";
import { useRouter } from "next/navigation";
import { BookOpen, Ellipsis, Mail, MapPin, Phone, Plus } from "lucide-react";
import { useState } from "react";
import DashboardCard from "./components/DashboardCard";
import { Dialog } from "@mui/material";
import DatePicker, { DateObject } from "react-multi-date-picker";
import FormInput from "@/components/common/form/FormInput";
import Filter from "../common/Filter";

const index = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const summaryCards = [
    {
      title: "Active Coupons",
      amount: "4",
      improve: "+1 from last month",
      icon: "/img/dashboard/icons/1.svg",
      description: "Number of active coupons"
    },
    {
      title: "Total Redemptions",
      amount: "568",
      improve: "+23.6% from last month",
      icon: "/img/dashboard/icons/2.svg",
      description: "Total coupon redemptions"
    },
    {
      title: "Discount Value",
      amount: "$12,450",
      improve: "+15.2% from last month",
      icon: "/img/dashboard/icons/3.svg",
      description: "Total value of discounts given"
    },
    {
      title: "Conversion Rate",
      amount: "24.5%",
      improve: "+2.1% from last month",
      icon: "/img/dashboard/icons/4.svg",
      description: "Percentage of successful conversions"
    }
  ];
  
  

  const entries = [
    {
      code: "DISC10",
      description: "10% off for VIP customers",
      discount: 10,
      type: "percentage",
      usage: "78/200",
      status: "Active",
      expiry: "2025-12-31T23:59:59Z",
      action: "Edit"
    },
    {
      code: "SAVE50",
      description: "$50 off for new customers",
      discount: 50,
      type: "fixed amount",
      usage: "45/100",
      status: "Inactive",
      expiry: "2025-08-31T23:59:59Z",
      action: "Edit"
    },
    {
      code: "SUMMER25",
      description: "25% off summer sale",
      discount: 25,
      type: "percentage",
      usage: "150/300",
      status: "Active",
      expiry: "2025-09-30T23:59:59Z",
      action: "Edit"
    },
    {
      code: "FREESHIP",
      description: "Free shipping on orders over $100",
      discount: 0,
      type: "fixed amount",
      usage: "30/100",
      status: "Active",
      expiry: "2025-11-30T23:59:59Z",
      action: "Edit"
    },
    {
      code: "NEWUSER20",
      description: "20% off for first-time buyers",
      discount: 20,
      type: "percentage",
      usage: "100/500",
      status: "Inactive",
      expiry: "2025-10-15T23:59:59Z",
      action: "Edit"
    }
  ];
  
  
  
  
  const tabs = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Paid",
      value: "paid",
    },
    {
      label: "Pending",
      value: "pending",
    },
    {
      label: "Overdue",
      value: "overdue",
    },
    {
      label: "Refunded",
      value: "refunded",
    }
  ];
  
  

  return (
    <AdminDashboardLayout>
      <div className="row y-gap-15 x-gap-10 items-center mb-5">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Coupon & Promotion Management</h1>
          <div className="text-14 lh-14 text-light-1">
            Create and manage coupon codes and seasonal promotions
          </div>
        </div>
        <div className="col-auto ms-auto">
          <button className="button border-blue-1 text-blue-1 px-15 py-10 rounded-8">
            Export Data
          </button>
        </div>
        <div className="col-auto">
          <button 
            className="button bg-blue-1 text-white px-15 py-10 rounded-8"
            onClick={() => setShowModal(true)}
          >
            <Plus /> Create Coupon
          </button>
        </div>
      </div>

      <DashboardCard data={summaryCards} />

      {/* <div className="row y-gap-10 x-gap-10 items-center mt-15 mb-10">
        <div className="col-auto">
          <div className="row px-10">
            {tabs.map((item) => (
              <div className="col-auto px-5" key={item.value}>
                <button
                  className={`text-14 px-10 fw-500 py-5 rounded-8 ${
                    activeTab === item.value ? "bg-white" : "text-light-1"
                  }`}
                  onClick={() => {
                    setActiveTab(item.value);
                  }}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="bg-white rounded-8 border-light px-20 py-15">
        {/* <h1 className="text-24 lh-14 fw-500"> Manual Entries</h1>
        <div className="text-14 lh-14 text-light-1">
          Review and approve manually entered listing from vendors
        </div> */}
        <div className="bg-white rounded-8 border-light py-5 mt-10">
          <div className="overflow-scroll scroll-bar-1">
            <table className="table-3 -border-bottom col-12">
              <thead className="bg-light-2">
              <tr>
                <th>Code</th>
                <th>Description</th>
                <th>Discount</th>
                <th>Type</th>
                <th>Usage</th>
                <th>Status</th>
                <th>Expiry</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
                {entries
                  // .filter((item) => {
                  //   return activeTab === "all"
                  //     ? true
                  //     : item.status.toLowerCase() === activeTab;
                  // })
                  .map((entry, index) => (
                    <tr key={index}>
                      <td className="align-middle text-12 lh-16 fw-500">
                        {entry.code}
                      </td>
                      <td className="align-middle">
                        {entry.description}
                      </td>
                      <td className="align-middle text-12 lh-16 fw-500">  
                        {entry.discount}
                      </td>
                      <td className="align-middle text-12 lh-16 fw-500">  
                        {entry.type}
                      </td>
                      <td className="align-middle text-12 lh-16 fw-500">  
                        {entry.usage}
                      </td>
                      <td className="align-middle">
                        <span
                          className={`rounded-100 py-4 px-10 text-center text-12 fw-500 ${
                            entry.status === "Active"
                              ? "bg-green-1 text-green-2"
                              : "bg-light-2 text-dark-1"
                          }`}
                        >
                          {entry.status}
                        </span>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex items-center gap-1 text-12 lh-16 fw-500">
                          {new Date(entry.expiry).toLocaleString()}
                        </div>
                      </td>
                      <td className="align-middle">
                        <Ellipsis size={16} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Dialog
        open={showModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-title"
      >
        <div className="px-20 py-20 w-500 sm:w-full">
          <ModalContent />
          <div className="d-flex justify-end gap-2 mt-10">
            <button
              className="text-14 border-light rounded-8 px-10 py-5"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="text-14 bg-blue-1 text-white fw-500 rounded-8 px-10 py-5"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Create Coupon
            </button>
          </div>
        </div>
      </Dialog>
    </AdminDashboardLayout>
  );
};

const ModalContent = () => {
  const [startDate, setStartDate] = useState(new DateObject());
  const [endDate, setEndDate] = useState(new DateObject());

  const status = [
    {
      label: "Active",
      value: "active",
    },
    {
      label: "Inactive",
      value: "inactive",
    },
  ];

  const discountType = [
    {
      label: "Percentage",
      value: "percentage",
    },
    {
      label: "Fixed Amount",
      value: "fixed amount",
    },
  ];
  

  return (
    <div className="row x-gap-10 y-gap-10 items-center">
      <h1 className="text-20 lh-14 fw-500">Create New Coupon</h1>
      <div className="text-12 text-light-1 lh-14 mb-15">
        Create the details for new coupon code
      </div>

      <FormInput
        label="Coupon Code"
        required={true}
        type="text"
        placeholder="SUMMER2025"
        gridClass="col-12 mt-5"
      />

      <FormInput
        label="Description"
        type="textarea"
        placeholder="Enter coupon description"
        gridClass="col-12 mt-5"
      />

      <FormInput
        label="Discount Type"
        type="select"
        gridClass="col-12 mt-5"
        defaultValue={discountType[0].value}
        options={discountType}
      />

      <FormInput
        label="Discount Value"
        type="number"
        placeholder="10"
        gridClass="col-12"
      />

      <div className="col-sm-6">
        <h1 className="text-14 lh-14 fw-500">Valid from</h1>
        <div className="border-light rounded-8 py-10 px-20 w-full cursor-text text-light-1 bg-white">
          <DatePicker
            inputClass="custom_input-picker"
            containerClassName="custom_container-picker"
            value={startDate}
            onChange={(date) => {
              setStartDate(date);
            }}
            numberOfMonths={1}
            offsetY={10}
            format="MMMM DD"
          />
        </div>
      </div>

      <div className="col-sm-6">
        <h1 className="text-14 lh-14 fw-500">Valid till</h1>
        <div className="border-light rounded-8 py-10 px-20 w-full cursor-text text-light-1 bg-white">
          <DatePicker
            inputClass="custom_input-picker"
            containerClassName="custom_container-picker"
            value={endDate}
            onChange={(date) => {
              setEndDate(date);
            }}
            numberOfMonths={1}
            offsetY={10}
            format="MMMM DD"
          />
        </div>
      </div>

      <FormInput
        label="Usage Limit"
        type="number"
        placeholder="100(Leave empty for unlimited)"
        gridClass="col-12"
      />

      <FormInput
        label="Status"
        type="select"
        gridClass="col-12 mt-5"
        defaultValue={status[0].value}
        options={status}
      />
  
    </div>
  );
};

export default index;
