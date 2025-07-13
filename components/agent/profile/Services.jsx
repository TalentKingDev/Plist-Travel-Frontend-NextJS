import { Checkbox } from "@mui/material";
import React, { useState } from "react";

const Services = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    // Property List
    {
      id: 1,
      category: "Hotel",
      description: "Hotel bookings and reservations",
      value: "hotel",
    },
    {
      id: 2,
      category: "Vacation Rental",
      description: "Private homes, apartments, and short-term rentals",
      value: "vacation",
    },
    {
      id: 3,
      category: "Event Venue",
      description: "Spaces for events, conferences, weddings",
      value: "venue",
    },
    {
      id: 4,
      category: "Spaces",
      description: "Co-working spaces, meeting rooms, flexible spaces",
      value: "spaces",
    },

    // Non-Property List
    {
      id: 5,
      category: "Tour",
      description: "Guided tours, sightseeing experiences",
      value: "tour",
    },
    {
      id: 6,
      category: "Activity",
      description: "Outdoor, indoor, and adventure activities",
      value: "activity",
    },
    {
      id: 7,
      category: "Event",
      description: "Concerts, festivals, sports and local events",
      value: "event",
    },

    // Conditionally shown if agent is true
    {
      id: 8,
      category: "Flight",
      description: "Domestic and international air travel",
      value: "flight",
      agentOnly: true,
    },
    {
      id: 9,
      category: "Rides",
      description: "Car rentals, ride-sharing, and chauffeur services",
      value: "rides",
      agentOnly: true,
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
            <div className="col-sm-4">
              <input type="number" className="form-control rounded-8 border-light justify-between w-50 fw-500 px-20 h-45 text-14" placeholder="0.00" step={0.01} />
            </div>
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

export default Services;
