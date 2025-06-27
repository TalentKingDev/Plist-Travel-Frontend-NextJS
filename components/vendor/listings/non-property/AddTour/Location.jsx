import MapFinder from "@/components/common/MapFinder";
import { Checkbox } from "@mui/material";
import { useState } from "react";

const Location = () => {
  const [location, setLocation] = useState();
  const [isThirdParty, setIsThirdParty] = useState(false);

  const locationList = [
    {
      city: "Asheville",
      state: "NC",
      area: "Creek",
      zip: "28806",
    },
    {
      city: "Plano",
      state: "TX",
      area: "Hollow",
      zip: "75024",
    },
    {
      city: "San Diego",
      state: "CA",
      area: "Sunset",
      zip: "92117",
    },
  ];

  return (
    <div className="row y-gap-10 x-gap-10">
      <h1 className="text-20 lh-1 fw-600">Tour Location</h1>
      <div className="text-14 lh-1 text-light-1">
        Select a location from the drop down below if you own the location or
        Add a new Tour Location if a 3rd Party Location
      </div>

      <div className="col-12 d-flex items-center mt-10 gap-2">
        <Checkbox
          className="px-0 py-0"
          value={isThirdParty}
          onChange={(e) => {
            setIsThirdParty(e.target.checked);
            setLocation({ city: "", state: "", area: "", zip: "" });
          }}
        />
        <div className="text-14 lh-12 fw-500">Third Party Location</div>
      </div>

      {isThirdParty ? (
        <div className="col-sm-6 mt-5">
          <h1 className="text-14 lh-12 fw-500">Location/Starting Point</h1>
          <input
            className="border-light rounded-8 py-5 px-15 w-full mt-10"
            type="text"
            placeholder="Enter location address"
          />
        </div>
      ) : (
        <div className="col-sm-6 mt-5">
          <h1 className="text-14 lh-12 fw-500">Location/Starting Point</h1>
          <select
            className="form-select rounded-8 border-light px-15 py-10 justify-between text-14 w-full mt-10"
            onChange={(e) => setLocation(locationList[e.target.value])}
          >
            <option value="" defaulValue>
              Select location
            </option>
            <option value="0">
              1523 Willow Creek Rd Asheville, NC 28806, USA
            </option>
            <option value="1">8712 Maple Hollow Dr Plano, TX 75024, USA</option>
            <option value="2">
              4307 Sunset Ridge Blvd San Diego, CA 92117, USA
            </option>
          </select>
        </div>
      )}

      <div className="col-sm-3 mt-5">
        <h1 className="text-14 lh-12 fw-500">City</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Enter city"
          onChange={(e) => setLocation({ ...location, city: e.target.value })}
          value={location?.city}
          readOnly={!isThirdParty}
        />
      </div>

      <div className="col-sm-3 mt-5">
        <h1 className="text-14 lh-12 fw-500">State</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Enter state"
          onChange={(e) => setLocation({ ...location, state: e.target.value })}
          value={location?.state}
          readOnly={!isThirdParty}
        />
      </div>

      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Neighborhood/Area</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Enter neighborhood or area"
          onChange={(e) => setLocation({ ...location, area: e.target.value })}
          value={location?.area}
          readOnly={!isThirdParty}
        />
      </div>

      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Postal Code</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Enter postal code"
          onChange={(e) => setLocation({ ...location, zip: e.target.value })}
          value={location?.zip}
          readOnly={!isThirdParty}
        />
      </div>

      <div className="col-12 mt-5">
        <div
          className="border-light rounded-8 px-10"
          style={{ height: "300px" }}
        >
          <MapFinder />
        </div>
      </div>
    </div>
  );
};

export default Location;
