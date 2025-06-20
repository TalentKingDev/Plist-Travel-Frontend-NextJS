"use client";

import { useState } from "react";

import CouponCard from "./CouponCard";
import VendorDashboardLayout from "../common/layout";
import CouponList from "./CouponList";
import { Dialog } from "@mui/material";
import DatePicker, { DateObject } from "react-multi-date-picker";
import FormInput from "@/components/common/form/FormInput";

const index = () => {
  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState(new DateObject());
  const [endDate, setEndDate] = useState(new DateObject());

  const handleClose = () => {
    setShowModal(false);
  };

  const data = [
    {
      title: "Active Coupons",
      amount: "5",
      improve: "+1 from last month",
      icon: "/img/dashboard/icons/1.svg",
    },
    {
      title: "Total Redemptions",
      amount: "128",
      improve: "+23.5% from last month",
      icon: "/img/dashboard/icons/2.svg",
    },
    {
      title: "Discount Value",
      amount: "$2,450",
      improve: "+15.2% from last month",
      icon: "/img/dashboard/icons/3.svg",
    },
    {
      title: "Conversion Rate",
      amount: "18.5%",
      improve: "+2.1% from last month",
      icon: "/img/dashboard/icons/4.svg",
    },
  ];

  return (
    <VendorDashboardLayout>
      <div className="row y-gap-20 justify-between items-center mb-5">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">
            Coupon & Promotional Management
          </h1>
          <div className="text-15 text-light-1">
            Create and manage coupon codes and promotional campaigns.
          </div>
        </div>
        <div className="col-auto ms-auto">
          <button
            className="bg-dark-blue text-white fw-400 text-13 py-5 px-15 rounded-8"
            onClick={() => setShowModal(true)}
          >
            <i className="icon-plus mr-10 fw-400 text-10"></i>
            Create New Coupon
          </button>
        </div>
      </div>

      <CouponCard data={data} />

      <div className="row y-gap-10 x-gap-10 items-center mb-5 mt-10">
        {/* <div className="col-sm-auto d-flex">
          <div className="position-relative d-flex items-center w-180 sm:w-full">
            <input
              type="text"
              placeholder="Search listings..."
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
        </div> */}
        <div className="col-sm-auto">
          <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-140 sm:w-full">
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="scheduled">Scheduled</option>
            <option value="expired">Expired</option>
          </select>
        </div>

        <div className="col-sm-auto">
          <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-140 sm:w-full">
            <option value="all">Category</option>
          </select>
        </div>
        <div className="col-sm-auto">
          <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-140 sm:w-full">
            <option value="all">Sub Category</option>
          </select>
        </div>
        <div className="col-sm-auto">
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
        <div className="col-sm-auto">
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

        <div className="col-sm-auto">
          <select className="form-select rounded-8 border-light justify-between py-10 px-15 w-140 sm:w-full text-14">
            <optgroup label="Property List">
              <option value="hotel">Hotel</option>
              <option value="vacation">Vacation Rental</option>
              <option value="venue">Event Venue</option>
              <option value="spaces">Spaces</option>
            </optgroup>
            <optgroup label="Non-Property List">
              <option value="tour">Tour</option>
              <option value="activity">Activity</option>
              <option value="event">Event</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div className="py-10 px-20 rounded-8 bg-white shadow-3 h-100 mt-10">
        <CouponList />
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
    </VendorDashboardLayout>
  );
};

const ModalContent = () => {
  const [startDate, setStartDate] = useState(new DateObject());
  const [endDate, setEndDate] = useState(new DateObject());

  const listingGroup = [
    { label: "Listing1", value: "listing1" },
    { label: "Listing2", value: "listing2" },
    { label: "Listing3", value: "listing3" },
    { label: "Listing4", value: "listing4" },
    { label: "Listing5", value: "listing5" },
    { label: "Listing6", value: "listing6" },
    { label: "Listing7", value: "listing7" },
    { label: "Listing8", value: "listing8" },
  ];

  const [selectedListings, setSelectedListings] = useState([]);

  return (
    <div className="row x-gap-10 y-gap-10 items-center">
      <h1 className="text-20 lh-14 fw-500">Create New Coupon</h1>
      <div className="text-12 text-light-1 lh-14 mb-15">
        Create a new coupon code for your listings.
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

      <div className="col-sm-6">
        <h1 className="text-14 lh-14 fw-500">
          Listing Type<span className="text-red-1">*</span>
        </h1>
        <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-full mt-10">
          <option value="">Select Listing Type</option>
        </select>
      </div>

      <div className="col-sm-6">
        <h1 className="text-14 lh-14 fw-500">
          Listing Category<span className="text-red-1">*</span>
        </h1>
        <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-full mt-10">
          <option value="">Select Listing Category</option>
        </select>
      </div>

      <div className="col-sm-6">
        <h1 className="text-14 lh-14 fw-500">
          Listing Subcategory<span className="text-red-1">*</span>
        </h1>
        <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-full mt-10">
          <option value="">Select Listing Subcategory</option>
        </select>
      </div>

      <div className="col-sm-6">
        <h1 className="text-14 lh-14 fw-500">
          Listing<span className="text-red-1">*</span>
        </h1>
        <select
          className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-full mt-10"
          onChange={(e) => {
            const listing = listingGroup.find((l) => l.value == e.target.value);
            const checking = selectedListings.find(
              (l) => l.value == e.target.value
            );
            if (listing && !checking) {
              setSelectedListings([...selectedListings, listing]);
            }
          }}
        >
          <option value="">Select Listing</option>
          {listingGroup.map((item) => (
            <option value={item.value} key={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className="col-12 d-flex items-center flex-wrap gap-2">
        {selectedListings.map((item) => (
          <span
            className="bg-blue-2 text-blue-1 text-12 px-15 rounded-100"
            key={item.value}
          >
            {item?.label}
          </span>
        ))}
      </div>

      <div className="col-sm-6">
        <h1 className="text-14 lh-14 fw-500">Discount Type</h1>
        <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-full mt-10">
          <option value="fixed">Fixed</option>
          <option value="percentage">Percentage</option>
        </select>
      </div>

      <FormInput
        label="Discount Value"
        type="number"
        placeholder="10"
        gridClass="col-sm-6"
      />

      <div className="col-sm-6">
        <h1 className="text-14 lh-14 fw-500">Date from</h1>
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
        <h1 className="text-14 lh-14 fw-500">Date to</h1>
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
        gridClass="col-sm-6"
      />

      <FormInput
        label="Minimum Spend"
        type="number"
        placeholder="50(Leave empty for unlimited)"
        gridClass="col-sm-6"
      />
    </div>
  );
};

export default index;
