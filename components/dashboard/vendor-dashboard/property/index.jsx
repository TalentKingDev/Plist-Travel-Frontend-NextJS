"use client";

import { useState } from "react";
import VendorDashboardLayout from "../common/layout";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormInput from "@/components/common/form/FormInput";
import { useRouter } from "next/navigation";
import { Menu, MenuItem } from "@mui/material";

const index = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [openDialog, setOpenDialog] = useState(false);
  const [rooms, setRooms] = useState(3);

  const handleClose = () => {
    setOpenDialog(false);
  };

  const tabs = [
    { label: "All Accommodations", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];

  const listings = [
    {
      id: 1,
      image: "/img/testimonials/1/4.png",
      name: "Hotel Executive Suite",
      type: "Suite",
      maxAdults: 2,
      maxChildren: 1,
      maxOccupancy: 3,
      rooms: "3 rooms",
      status: "Active",
    },
    {
      id: 2,
      image: "/img/testimonials/1/4.png",
      name: "Deluxe Room",
      type: "Room",
      maxAdults: 2,
      maxChildren: 2,
      maxOccupancy: 4,
      rooms: "5 rooms",
      status: "Active",
    },
    {
      id: 3,
      image: "/img/testimonials/1/4.png",
      name: "Standard Room",
      type: "Room",
      maxAdults: 2,
      maxChildren: 0,
      maxOccupancy: 2,
      rooms: "8 rooms",
      status: "Inactive",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const showMoreMenu = Boolean(anchorEl);
  const router = useRouter();

  return (
    <VendorDashboardLayout>
      <div className="row y-gap-20 justify-between items-center mb-5">
        <div className="col-md-auto">
          <h1 className="text-30 lh-14 fw-600">Accommodations</h1>
          <div className="text-15 text-light-1">
            Manage your accommodation types and rooms.
          </div>
        </div>
        <div className="col-md-auto d-flex justify-content-end">
          <button
            className="button -md bg-blue-1 px-15 py-10 fw-400 text-14 text-white rounded-8"
            onClick={() => setOpenDialog(true)}
          >
            <i className="icon-plus mr-10"></i> Add Accommodation
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

      <div className="bg-white rounded-8 border-light px-15 py-15">
        <div className="overflow-scroll scroll-bar-1">
          <table className="table-2 col-12">
            <thead>
              <tr className="text-light-1 fw-600">
                <th>Image</th>
                <th>Accommodation Type</th>
                <th>Max Adults</th>
                <th>Max Children</th>
                <th>Max Occupancy</th>
                <th>Rooms</th>
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
                  <td className="align-middle fw-500">{row.name}</td>
                  <td className="align-middle">{row.maxAdults}</td>
                  <td className="align-middle">{row.maxChildren}</td>
                  <td className="align-middle">{row.maxOccupancy}</td>
                  <td className="align-middle">{row.rooms}</td>
                  <td className="align-middle">
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
                        Manage Property
                      </MenuItem>
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="d-flex justify-between">
          <div>
            <div className="text-20 fw-600">Add Accommodation</div>
            <div className="text-14 lh-1 text-light-1">
              Enter name and description for the room. You can also specify
              number of adults and children the room can accommodate.
            </div>
          </div>
          <i
            className="icon-close cursor-pointer text-12"
            onClick={handleClose}
          ></i>
        </DialogTitle>
        <DialogContent>
          <div className="row y-gap-20 x-gap-10 justify-between items-center">
            <FormInput
              label="Accommodation Type"
              type="text"
              name="accommodationType"
              placeholder="Hotel ABC Executive Suite"
            />
            <FormInput
              label="Max no. of Adults"
              type="number"
              name="maxAdults"
              gridClass="col-sm-4"
              placeholder="2"
            />
            <FormInput
              label="Max no. of Children"
              type="number"
              name="maxChildren"
              gridClass="col-sm-4"
              placeholder="1"
            />
            <FormInput
              label="Max no. of Occupancy"
              type="number"
              name="maxOccupancy"
              gridClass="col-sm-4"
              placeholder="3"
            />
            <div className="col-12 mt-5">
              <h1 className="text-14 lh-12 fw-500">Amenities</h1>
              <div className="row mt-10">
                <div className="col-sm-6 form-checkbox d-flex items-center">
                  <input type="checkbox" />
                  <div className="form-checkbox__mark">
                    <div className="form-checkbox__icon icon-check" />
                  </div>
                  <div className="text-14 fw-500 ml-10">Free WiFi</div>
                </div>
                <div className="col-sm-6 form-checkbox d-flex items-center">
                  <input type="checkbox" />
                  <div className="form-checkbox__mark">
                    <div className="form-checkbox__icon icon-check" />
                  </div>
                  <div className="text-14 fw-500 ml-10">Swimming Pool</div>
                </div>
                <div className="col-sm-6 form-checkbox d-flex items-center">
                  <input type="checkbox" />
                  <div className="form-checkbox__mark">
                    <div className="form-checkbox__icon icon-check" />
                  </div>
                  <div className="text-14 fw-500 ml-10">Air Conditioning</div>
                </div>
                <div className="col-sm-6 form-checkbox d-flex items-center">
                  <input type="checkbox" />
                  <div className="form-checkbox__mark">
                    <div className="form-checkbox__icon icon-check" />
                  </div>
                  <div className="text-14 fw-500 ml-10">Breakfast Included</div>
                </div>
              </div>
            </div>
            <FormInput
              label="Description"
              rows={3}
              type="textarea"
              name="description"
              placeholder="Enter description for the room"
              gridClass="col-12"
            />
            <div className="col-12">
              <h1 className="text-14 lh-12 fw-500">Images</h1>
              <div className="border-light rounded-8 px-15 py-15 mt-10">
                <div className="border-light rounded-8 border-dashed py-30 text-center">
                  <span className="material-symbols-outlined text-light-1 text-40">
                    upload
                  </span>
                  <div className="text-14 lh-1 text-light-1">
                    Drag and drop or click to upload file
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <h1 className="text-14 lh-12 fw-500">Room Numbers</h1>
              <div className="row">
                {Array(rooms)
                  .fill(null)
                  .map((_, index) => (
                    <FormInput
                      placeholder={"Room " + (index + 1)}
                      gridClass="col-sm-6"
                    />
                  ))}
              </div>
              <button
                className="button rounded-8 text-14 fw-500 mt-10 border-light px-15 py-10"
                onClick={() => setRooms(rooms + 1)}
              >
                <i className="icon-plus mr-15 text-14 fw-400"></i> Add Room
              </button>
            </div>
          </div>
        </DialogContent>
        <DialogActions className="px-30 py-30">
          <button
            className="button bg-white border-light rounded-8 text-14 fw-500 px-15 py-10"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="button bg-dark-blue text-white rounded-8 text-14 fw-500 px-15 py-10"
            onClick={handleClose}
            autoFocus
          >
            Save and Add
          </button>
        </DialogActions>
      </Dialog>
    </VendorDashboardLayout>
  );
};
export default index;
