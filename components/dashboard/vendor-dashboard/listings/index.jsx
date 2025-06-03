"use client";

import { use, useState } from "react";
import VendorDashboardLayout from "../common/layout";
import SelectServices from "./SelectServices";
import { Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";

const index = ({ isProperty = true }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [isListings, setIsListings] = useState(true);

  const tabs = [
    { label: "All Listings", value: "all" },
    { label: "Hotels", value: "hotels" },
    { label: "Space", value: "space" },
    { label: "Tours", value: "tours" },
    { label: "Activities", value: "activities" },
    { label: "Events", value: "events" },
  ];

  const listings = [
    {
      id: 1,
      image: "/img/testimonials/1/4.png",
      name: "Luxury Beach Resort",
      type: "Hotel",
      bookings: "45",
      price: "$350/night",
      status: "Active",
    },
    {
      id: 2,
      image: "/img/testimonials/1/4.png",
      name: "City Walking Tour",
      type: "Tour",
      bookings: "32",
      price: "$45/person",
      status: "Active",
    },
    {
      id: 3,
      image: "/img/testimonials/1/4.png",
      name: "Wine Tasting Experience",
      type: "Event",
      bookings: "22",
      price: "$75/person",
      status: "Active",
    },
    {
      id: 4,
      image: "/img/testimonials/1/4.png",
      name: "Mountain Cabin Retreat",
      type: "Hotel",
      bookings: "28",
      price: "$250/night  ",
      status: "Inactive",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const showMoreMenu = Boolean(anchorEl);
  const router = useRouter();

  return (
    <VendorDashboardLayout>
      {isListings ? (
        <>
          <div className="row y-gap-20 justify-between items-center mb-5">
            <div className="col-md-auto">
              <h1 className="text-30 lh-14 fw-600">Listings Management</h1>
              <div className="text-15 text-light-1">
                Manage your property and service listings.
              </div>
            </div>
            <div className="col-md-auto d-flex justify-content-end">
              <button
                className="button -md bg-blue-1 px-15 py-10 fw-400 text-14 text-white rounded-8"
                onClick={() => setIsListings(false)}
              >
                <i className="icon-plus mr-10"></i> Add New{" "}
                {isProperty ? "Property" : "Listing"}
              </button>
            </div>
          </div>

          <div className="row px-10 mb-20">
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

          <div className="row y-gap-10 x-gap-10 items-center mb-5">
            <div className="col-sm-auto d-flex">
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
            </div>
            <div className="col-sm-auto">
              <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-140 sm:w-full">
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <div className="col-sm-auto">
              <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-140 sm:w-full">
                <option value="all">Listing Type</option>
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
            <div className="col-sm-auto ms-auto">
              <button className="button -md px-15 py-10 fw-400 text-14 bg-white border-light rounded-8 sm:w-full">
                Export Listings
              </button>
            </div>
          </div>

          <div className="bg-white rounded-8 border-light px-15 py-15">
            <div className="overflow-scroll scroll-bar-1">
              <table className="table-2 col-12">
                <thead>
                  <tr className="text-light-1 fw-600">
                    <th>Image</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Bookings</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.map((row, index) => (
                    <tr key={index}>
                      <td className="align-middle">
                        <img
                          className="rounded-8"
                          src={row.image}
                          alt={row.name}
                          style={{
                            height: "50px",
                            width: "60px",
                            objectFit: "fill",
                          }}
                        />
                      </td>
                      <td className="align-middle fw-600">{row.name}</td>
                      <td className="align-middle fw-500">{row.type}</td>
                      <td className="align-middle fw-500">{row.price}</td>
                      <td className="align-middle fw-500">{row.bookings}</td>
                      <td className="align-middle fw-500">
                        <span
                          className={`rounded-100 px-10 text-center text-14 ${
                            row.status === "Active"
                              ? "bg-dark-4 text-white"
                              : "border-light"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="align-middle">
                        <span
                          id={row.id}
                          className="material-symbols-outlined cursor-pointer"
                          onClick={(event) => setAnchorEl(event.currentTarget)}
                        >
                          more_horiz
                        </span>
                        <Menu
                          id="more-menu"
                          anchorEl={anchorEl}
                          open={showMoreMenu}
                          onClose={() => setAnchorEl(null)}
                        >
                          <MenuItem
                            onClick={() => {
                              router.push(
                                "/vendor/property/" + anchorEl.id + "/manage"
                              );
                            }}
                            className="text-12"
                          >
                            Manage {isProperty ? "Property" : "Listing"}
                          </MenuItem>
                          {/* <MenuItem
                            onClick={() => {
                              router.push("/vendor/property");
                            }}
                            className="text-12"
                          >
                            Accommendations
                          </MenuItem> */}
                          <MenuItem
                            onClick={() => {
                              router.push(
                                "/vendor/property/" + anchorEl.id + "/setting"
                              );
                            }}
                            className="text-12"
                          >
                            Setting
                          </MenuItem>
                        </Menu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <SelectServices setIsListings={setIsListings} />
      )}
    </VendorDashboardLayout>
  );
};
export default index;
