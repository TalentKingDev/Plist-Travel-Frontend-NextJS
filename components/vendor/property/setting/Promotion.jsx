import svgIcon from "@/components/data/svgIcon";
import { Switch } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const Promotion = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [drawerContent, setDrawerContent] = useState(null);

  const handleClose = () => {
    setShowDrawer(false);
  };

  return (
    <div className="row y-gap-10 x-gap-10">
      <h1 className="text-20 lh-1 fw-600">Promotions</h1>
      <div className="text-16 lh-1">
        Capture potential guests' attention with enhanced visibility in search
        results, special badging and marketing
      </div>
      <div className="col-12 d-flex">
        <button
          className="bg-blue-1 text-white rounded-8 py-5 px-15 text-14 mt-10"
          onClick={() => {
            setDrawerContent(<CreatePromotion handleClose={handleClose} />);
            setShowDrawer(true);
          }}
        >
          Create a promotion
        </button>
      </div>

      <div className="border-top-light mt-10"></div>
      <div className="col-sm-6">
        <div
          className="border-light rounded-8 py-10 px-10 d-flex items-center justify-between cursor-pointer"
          onClick={() => {
            setDrawerContent(<PromotionDetail handleClose={handleClose} />);
            setShowDrawer(true);
          }}
        >
          <div className="d-flex flex-column items-start justify-between">
            <span className="text-10 lh-14 rounded-100 px-10 bg-blue-1 text-white fw-500">
              Active
            </span>
            <h1 className="text-12 fw-500 lh-1 mt-5">Early booking</h1>
            <div className="text-12 lh-1 mt-5">
              10% off &middot; Jul 24, 2025 - May 25, 2025
            </div>
          </div>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
      </div>

      <Drawer open={showDrawer} onClose={handleClose} anchor="right">
        {drawerContent}
      </Drawer>
    </div>
  );
};

const CreatePromotion = ({ handleClose }) => {
  const [always, setAlways] = useState(true);
  const [startDate, setStartDate] = useState(new DateObject());
  const [endDate, setEndDate] = useState(new DateObject());

  return (
    <div className="px-20 py-20 w-300">
      <div className="row y-gap-10 x-gap-10">
        <div className="d-flex justify-between items-center mb-20">
          <h2 className="text-14 lh-1 fw-500">Create a promotion</h2>
          <i
            className="icon-close text-16 cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <h1 className="text-24 lh-14 fw-600">Early booking</h1>
        <div className="text-12 lh-14">
          Fill your calendar well in advance by appealing to travlers booking at
          least 60 days ahead.
        </div>
        <h1 className="text-18 lh-1 fw-500 mt-20">Discount</h1>
        <div className="text-12 lh-14">
          This offer will apply on top of your best available day, weekly, or
          monthly rate.
        </div>

        <div className="col-12 mt-5">
          <h1 className="text-14 lh-1 fw-500">Discount(%)</h1>
          <input
            type="text"
            className="border-light rounded-8 py-10 px-15 text-14 mt-10"
          />
        </div>

        <div className="col-12">
          <h1 className="text-14 lh-1 fw-500">Minium Days in Advance</h1>
          <input
            type="text"
            className="border-light rounded-8 py-10 px-15 text-14 mt-10"
          />
        </div>

        <h1 className="text-18 lh-1 fw-500 mt-20">Stay dates</h1>
        <div className="d-flex items-center">
          <Switch
            checked={always}
            onChange={(event) => setAlways(event.target.checked)}
          />
          <div className="text-14 lh-14">Always on</div>
        </div>

        <div className="col-6">
          <h1 className="text-14 lh-1 fw-500">Stay start date</h1>
          <div className="border-light rounded-8 py-10 px-15 pl-30 w-full mt-10 cursor-text text-light-1 bg-white position-relative">
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
            <span
              className="text-light-1 position-absolute"
              style={{
                left: "8px",
                top: "45%",
                transform: "translateY(-50%)",
              }}
            >
              {svgIcon.calendar}
            </span>
          </div>
        </div>

        <div className="col-6">
          {always ? (
            <div className="text-14 lh-14 mt-35">No end date</div>
          ) : (
            <>
              <h1 className="text-14 lh-1 fw-500">Stay end date</h1>
              <div className="border-light rounded-8 py-10 px-15 pl-30 w-full mt-10 cursor-text text-light-1 bg-white position-relative">
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
                <span
                  className="text-light-1 position-absolute"
                  style={{
                    left: "8px",
                    top: "45%",
                    transform: "translateY(-50%)",
                  }}
                >
                  {svgIcon.calendar}
                </span>
              </div>
            </>
          )}
        </div>

        <div className="col-12 border-top-light mt-20">
          <div className="text-14 lh-14">
            Ensure your promotions comply with consumer and advertising laws.
          </div>
          <div className="text-12 lh-14">
            We'd like to remind all partners of importance of providing
            travelers with clear and accurate pricing and promotion information
            that complies with comsumer and advertising laws.
          </div>
          <button className="btn btn-link text-12">See details</button>
        </div>

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
            Create a promotion
          </button>
        </div>
      </div>
    </div>
  );
};

const PromotionDetail = ({ handleClose }) => {
  return (
    <div className="px-20 py-20 w-300">
      <div className="row y-gap-10 x-gap-10">
        <div className="d-flex justify-between items-center mb-20">
          <h2 className="text-14 lh-1 fw-500">Promotions</h2>
          <i
            className="icon-close text-16 cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <h1 className="text-24 lh-14 fw-600">Early booking</h1>
        <div className="d-flex items-center">
          <span className="text-10 lh-14 rounded-100 px-10 bg-blue-1 text-white fw-500">
            Active
          </span>
        </div>
        <div className="col-12 mt-10">
          <div className="text-12 text-light-1 lh-14">Discount</div>
          <div className="text-12 lh-14">10%</div>
        </div>
        <div className="col-12 mt-10">
          <div className="text-12 text-light-1 lh-14">
            Minimum days in advance
          </div>
          <div className="text-12 lh-14">60</div>
        </div>
        <div className="col-12 mt-10">
          <div className="text-12 text-light-1 lh-14">Stay dates</div>
          <div className="text-12 lh-14">Jul 24, 2025 - May 25, 2025</div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
