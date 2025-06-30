import { Checkbox } from "@mui/material";
import React, { useState } from "react";

const Services = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    {
      id: 1,
      category: "Hotels & Accommodations",
      description: "Hotel bookings, resorts, vacation rentals",
    },
    {
      id: 2,
      category: "Flights",
      description: "Domestic and international flight bookings",
    },
    {
      id: 3,
      category: "Tours & Activities",
      description: "Guided tours, excursions, activities",
    },
    {
      id: 4,
      category: "Events",
      description: "Concerts, sports events festivals",
    },
    {
      id: 5,
      category: "Ground Transportation",
      description: "Car rentals, transfers, chauffeur services",
    },
    {
      id: 6,
      category: "Vacation Packages",
      description: "Allinclusive packages, custom itineraries",
    },
  ];

  return (
    <div className="row y-gap-10 x-gap-10 bg-white px-15 py-20 rounded-8 items-center">
      <div className="text-20 fw-600 lh-1">Services Offered</div>
      <div className="text-12 text-light-1 lh-1 mb-20">
        Select the services you offer to your clients
      </div>

      {services.map((service, index) => (
        <div className="col-sm-6 d-flex items-start" key={index}>
          <Checkbox
            className="px-0 py-0"
            checked={selectedServices.includes(service.id)}
            onClick={() => {
              if (selectedServices.includes(service.id)) {
                setSelectedServices(
                  selectedServices.filter((s) => s !== service.id)
                );
              } else {
                setSelectedServices([...selectedServices, service.id]);
              }
            }}
          />
          <div className="ml-10">
            <div className="text-14 lh-14 fw-500">{service.category}</div>
            <div className="text-12 text-light-1">{service.description}</div>
          </div>
        </div>
      ))}

      <div className="text-20 fw-600 lh-14 mt-15 border-top-light pt-15">
        Service Pricing
      </div>
      <div className="text-12 text-light-1 lh-1">
        Set your pricing strategy for each service
      </div>

      {services
        .filter((service) => selectedServices.includes(service.id))
        .map((service, index) => (
          <React.Fragment key={index}>
            <div className="col-sm-4 d-flex justify-end">
              <div className="text-14 lh-14 fw-500">{service.category}</div>
            </div>
            <div className="col-sm-4">
              <select className="form-select rounded-8 border-light justify-between fw-500 px-20 h-45 text-14">
                <option value="percentage">Percentage Markup</option>
              </select>
            </div>
            <div className="col-sm-4"></div>
          </React.Fragment>
        ))}

      <div className="d-flex mt-20 border-top-light pt-15">
        <button className="button bg-blue-1 text-white rounded-8 text-12 py-10 px-15">
          Save Changes
        </button>
      </div>
    </div>
  );
};

const SupportHours = () => {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <>
      <div className="text-15 lh-15 fw-500 mt-10">Days Available</div>
      {weekdays.map((day, index) => (
        <div className="col-xl-3 col-lg-6 col-sm-6" key={index}>
          <div className="form-checkbox d-flex items-center">
            <input type="checkbox" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">{day.substring(0, 3)}</div>
          </div>
        </div>
      ))}
      <div className="col-xl-3 col-lg-6 col-sm-6"></div>

      <div className="col-sm-6 mt-10">
        <h1 className="text-15 lh-14 fw-500">Start Time</h1>
        <select className="form-select rounded-8 border-light justify-between py-10 mt-5 px-20 w-full text-14">
          <option value="">Select time</option>
        </select>
      </div>

      <div className="col-sm-6 mt-10">
        <h1 className="text-15 lh-14 fw-500">End Time</h1>
        <select className="form-select rounded-8 border-light justify-between py-10 mt-5 px-20 w-full text-14">
          <option value="">Select time</option>
        </select>
      </div>

      <div className="col-12 mt-10">
        <h1 className="text-15 lh-14 fw-500">Time Zone</h1>
        <select className="form-select rounded-8 border-light justify-between py-10 mt-5 px-20 w-full text-14">
          <option value="">Select time zone</option>
        </select>
      </div>
    </>
  );
};

export default Services;
