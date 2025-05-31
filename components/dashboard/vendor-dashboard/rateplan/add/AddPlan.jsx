"use client";

import { useRouter } from "next/navigation";
import VendorDashboardLayout from "@/components/dashboard/vendor-dashboard/common/layout";
import { Checkbox, Radio } from "@mui/material";
import { useState } from "react";

const index = ({ type }) => {
  const router = useRouter();

  const hourlySteps =
    type === "hourly"
      ? [
          {
            title: "Would you like to put a restriction on the length of stay?",
            content: (
              <div className="d-flex items-center gap-2 ml-20 mt-10">
                <select className="border-light form-select rounded-8 bg-white px-10 h-50 w-140">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10" selected>
                    10
                  </option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                </select>
                <div className="text-14 lh-14 ml-5">hour(s)</div>
              </div>
            ),
          },
          {
            title: "Would you like to set an earliest check-in time?",
            content: (
              <div className="ml-20 mt-10">
                <select className="border-light form-select rounded-8 bg-white px-10 h-50 w-140">
                  <option value="1">1:00</option>
                  <option value="2">2:00</option>
                  <option value="3">3:00</option>
                  <option value="4">4:00</option>
                  <option value="5">5:00</option>
                  <option value="6">6:00</option>
                  <option value="7">7:00</option>
                  <option value="8">8:00</option>
                  <option value="9">9:00</option>
                  <option value="10">10:00</option>
                  <option value="11">11:00</option>
                  <option value="12" selected>
                    12:00
                  </option>
                  <option value="13">13:00</option>
                  <option value="14">14:00</option>
                  <option value="15">15:00</option>
                  <option value="16">16:00</option>
                  <option value="17">17:00</option>
                  <option value="18">18:00</option>
                  <option value="19">19:00</option>
                  <option value="20">20:00</option>
                  <option value="21">21:00</option>
                  <option value="22">22:00</option>
                  <option value="23">23:00</option>
                  <option value="24">24:00</option>
                </select>
              </div>
            ),
          },
          {
            title: "Would you like to set a latest check-out time?",
            content: (
              <div className="ml-20 mt-10">
                <select className="border-light form-select rounded-8 bg-white px-10 h-50 w-140">
                  <option value="1">1:00</option>
                  <option value="2">2:00</option>
                  <option value="3">3:00</option>
                  <option value="4">4:00</option>
                  <option value="5">5:00</option>
                  <option value="6">6:00</option>
                  <option value="7">7:00</option>
                  <option value="8">8:00</option>
                  <option value="9">9:00</option>
                  <option value="10">10:00</option>
                  <option value="11">11:00</option>
                  <option value="12">12:00</option>
                  <option value="13">13:00</option>
                  <option value="14">14:00</option>
                  <option value="15">15:00</option>
                  <option value="16">16:00</option>
                  <option value="17">17:00</option>
                  <option value="18">18:00</option>
                  <option value="19">19:00</option>
                  <option value="20">20:00</option>
                  <option value="21">21:00</option>
                  <option value="22" selected>
                    22:00
                  </option>
                  <option value="23">23:00</option>
                  <option value="24">24:00</option>
                </select>
              </div>
            ),
          },
        ]
      : [];

  const monthlySteps =
    type === "monthly"
      ? [
          {
            title: "Min. Length of Stay",
            content: <MinLengthStay />,
          },
        ]
      : [];

  const mealSteps =
    type !== "hourly"
      ? [
          {
            title: "Are meals included in the rate?",
            content: <MealsIncluded />,
          },
        ]
      : [];

  const steps = [
    ...hourlySteps,
    ...monthlySteps,
    {
      title: "Select a cancellation policy",
      subtitle: (
        <div className="text-12 text-light-1 lh-14">
          If there is no suitable cancellation policy for you, you can
          <span className="text-blue-1 ml-5">modify new</span>
        </div>
      ),
      content: (
        <div className="d-flex items-center">
          <Radio checked={true} />
          <div className="text-14 lh-14 ml-5">
            Flexible until 1 day before arrival
          </div>
        </div>
      ),
    },
    ...mealSteps,
    {
      title:
        "Would you like to set up reservation restrictions for this rate plan? (Including reservation time, length of stay, exclusive company)",
      content: <ReservationRestrictions />,
    },
    {
      title: "Select payment method",
      content: <PaymentMethod />,
    },
    {
      title: "How will you manage this rate plan?",
      content: <RatePlan />,
    },
    {
      title: "Create this rate plan for the following room types",
      content: <RoomType />,
    },
    {
      title: "Name your rate plan",
      subtitle: (
        <div className="text-12 text-light-1 lh-14">
          The site plan name is for your reference and won't appear to Trip.com
          users
        </div>
      ),
      content: (
        <div className="ml-20 mt-10">
          <div className="w-180">
            <input
              type="text"
              placeholder="Enter rate plan name"
              className="border-light rounded-8 bg-white px-10 py-5"
            />
          </div>
          <div className="text-12 text-light-1 lh-14 mt-5">Rate plan name</div>
        </div>
      ),
    },
  ].filter(Boolean);

  return (
    <VendorDashboardLayout>
      <div className="row y-gap-10 justify-between items-end mb-10">
        <h1 className="text-30 lh-14 fw-600">Add a {type} rate plan</h1>
      </div>

      <div className="bg-white rounded-8 py-20 px-20">
        <div className="row y-gap-20 x-gap-20">
          {steps.map((step, index) => (
            <div className="col-12" key={index}>
              <div className="text-18 lh-14">
                {index + 1}. {step.title}
              </div>
              {step.subtitle}
              {step.content}
            </div>
          ))}
        </div>
        <div className="border-top-light mt-15 pt-15 d-flex justify-end gap-2">
          <button
            className="text-white bg-blue-1 rounded-8 px-15 py-5 text-14"
            onClick={() => router.push("/vendor/rateplan/preview/" + type)}
          >
            Preview
          </button>
        </div>
      </div>
    </VendorDashboardLayout>
  );
};

const MealsIncluded = () => {
  const [value, setValue] = useState("no");
  const [mealPackage, setMealPackage] = useState("all");
  const [guestCoverage, setGuestCoverage] = useState("all");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handlePackageChange = (event) => {
    setMealPackage(event.target.value);
  };

  const handleGuestCoverageChange = (event) => {
    setGuestCoverage(event.target.value);
  };

  return (
    <>
      <div className="d-flex items-center">
        <Radio checked={value === "no"} onChange={handleChange} value="no" />
        <div className="text-14 lh-14 ml-5">No</div>
      </div>
      <div className="d-flex items-center">
        <Radio checked={value === "yes"} onChange={handleChange} value="yes" />
        <div className="text-14 lh-14 ml-5">Yes</div>
      </div>

      {value === "yes" && (
        <div className="ml-40 bg-light-2 rounded-8 py-10 px-10">
          {/* Basic Meal Options */}
          <div className="d-flex items-center">
            <Checkbox className="px-0 py-0" />
            <div className="text-14 lh-14 ml-5">Lunch</div>
          </div>
          <div className="d-flex items-center">
            <Checkbox className="px-0 py-0" />
            <div className="text-14 lh-14 ml-5">Dinner</div>
          </div>

          {/* Advanced Meal Packages */}
          <div className="mt-10">
            <div className="text-12 text-light-1 mb-5">Other settings:</div>

            <div className="d-flex items-center">
              <Radio
                className="px-0 py-0"
                name="meal-package"
                value="all"
                checked={mealPackage === "all"}
                onChange={handlePackageChange}
              />
              <div className="text-14 lh-14 ml-5">
                All inclusive (breakfast + lunch + dinner, with snacks and
                beverages)
              </div>
            </div>

            <div className="d-flex items-center mt-5">
              <Radio
                className="px-0 py-0"
                name="meal-package"
                value="twoOptions"
                checked={mealPackage === "twoOptions"}
                onChange={handlePackageChange}
              />
              <div className="text-14 lh-14 ml-5">
                Two options from breakfast, lunch and dinner
              </div>
            </div>

            <div className="d-flex items-center mt-5">
              <Radio
                className="px-0 py-0"
                name="meal-package"
                value="lunchDinner"
                checked={mealPackage === "lunchDinner"}
                onChange={handlePackageChange}
              />
              <div className="text-14 lh-14 ml-5">Lunch or dinner</div>
            </div>

            <div className="d-flex items-center mt-5">
              <Radio
                className="px-0 py-0"
                name="meal-package"
                value="breakfastLunchDinner"
                checked={mealPackage === "breakfastLunchDinner"}
                onChange={handlePackageChange}
              />
              <div className="text-14 lh-14 ml-5">
                Breakfast & lunch or breakfast & dinner
              </div>
            </div>
          </div>

          {/* Guest Coverage Options */}
          <div className="mt-10">
            <div className="text-12 text-light-1 mb-5">
              How many guests are meals included for?
            </div>

            <div className="d-flex items-center">
              <Radio
                className="px-0 py-0"
                name="guest-coverage"
                value={"all"}
                checked={guestCoverage === "all"}
                onChange={handleGuestCoverageChange}
              />
              <div className="text-14 lh-14 ml-5">
                All guests in the reservation
              </div>
            </div>

            <div className="d-flex items-center mt-5">
              <Radio
                className="px-0 py-0"
                name="guest-coverage"
                value={"fixed"}
                checked={guestCoverage === "fixed"}
                onChange={handleGuestCoverageChange}
              />
              <div className="text-14 lh-14 ml-5">Fixed number</div>
            </div>
            {guestCoverage === "fixed" && (
              <div className="mt-5 pl-30">
                <select className="form-select px-10 py-5 w-210 ">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const ReservationRestrictions = () => {
  const [hasRestrictions, setHasRestrictions] = useState("no");
  const [reservationTime, setReservationTime] = useState(false);
  const [lengthOfStay, setLengthOfStay] = useState(false);
  const [exclusiveChannel, setExclusiveChannel] = useState("none");
  const [reservation, setReservation] = useState(2);
  const [lengthOfStayValue, setLengthOfStayValue] = useState(2);

  const handleRestrictionChange = (event) => {
    setHasRestrictions(event.target.value);
  };

  const handleChannelChange = (event) => {
    setExclusiveChannel(event.target.value);
  };

  return (
    <>
      <div className="d-flex items-center">
        <Radio
          checked={hasRestrictions === "no"}
          onChange={handleRestrictionChange}
          value="no"
        />
        <div className="text-14 lh-14 ml-5">No</div>
      </div>
      <div className="d-flex items-center">
        <Radio
          checked={hasRestrictions === "yes"}
          onChange={handleRestrictionChange}
          value="yes"
        />
        <div className="text-14 lh-14 ml-5">Yes</div>
      </div>

      {hasRestrictions === "yes" && (
        <div className="ml-40 bg-light-2 rounded-8 py-10 px-10">
          {/* Reservation Time Restrictions */}
          <div className="d-flex items-center">
            <Checkbox
              className="px-0 py-0"
              checked={reservationTime}
              onChange={() => setReservationTime(!reservationTime)}
            />
            <div className="text-14 lh-14 ml-5">
              Restrictions on reservation time
            </div>
          </div>

          {reservationTime && (
            <div className="mt-5 pl-30">
              <div className="text-12 mb-5">Minimum days</div>
              <div className="w-210">
                <input
                  type="number"
                  onChange={(event) => setReservation(event.target.value || 0)}
                  className="bg-white border-light rounded-8 px-10 py-5"
                  value={reservation}
                  min="0"
                />
              </div>
              <div className="text-12 text-light-1 lh-14 mt-5">
                {reservation} day(s) and more
              </div>
            </div>
          )}

          {/* Length of Stay Restrictions */}
          <div className="d-flex items-center mt-5">
            <Checkbox
              className="px-0 py-0"
              checked={lengthOfStay}
              onChange={() => setLengthOfStay(!lengthOfStay)}
            />
            <div className="text-14 lh-14 ml-5">
              Restrictions on length of stay
            </div>
          </div>

          {lengthOfStay && (
            <div className="mt-5 pl-30">
              <div className="text-12 mb-5">Minimum days</div>
              <div className="w-210">
                <input
                  className="bg-white border-light rounded-8 px-10 py-5"
                  type="number"
                  min="0"
                  value={lengthOfStayValue}
                  onChange={(event) =>
                    setLengthOfStayValue(event.target.value || 0)
                  }
                />
              </div>
              <div className="text-12 text-light-1 lh-14 mt-5">
                {lengthOfStayValue} day(s) and more
              </div>
            </div>
          )}

          {/* Exclusive Channel Settings */}
          <div className="mt-5 d-flex items-center">
            <Checkbox
              className="px-0 py-0"
              checked={exclusiveChannel !== "none"}
              onChange={() =>
                setExclusiveChannel(
                  exclusiveChannel === "none" ? "tripBiz" : "none"
                )
              }
            />
            <div className="text-14 lh-14 ml-5">
              Set as exclusive selling channel
            </div>
          </div>

          {exclusiveChannel !== "none" && (
            <div className="mt-5 pl-30">
              <div className="d-flex items-center">
                <Radio
                  className="px-0 py-0"
                  name="exclusive-channel"
                  value="tripBiz"
                  checked={exclusiveChannel === "tripBiz"}
                  onChange={handleChannelChange}
                />
                <div className="text-14 lh-14 ml-5">Only for Trip Biz</div>
              </div>
              <div className="d-flex items-center mt-5">
                <Radio
                  className="px-0 py-0"
                  name="exclusive-channel"
                  value="bundle"
                  checked={exclusiveChannel === "bundle"}
                  onChange={handleChannelChange}
                />
                <div className="text-14 lh-14 ml-5">
                  Bundle & save only (only for room+flight bundle, vacation
                  bundle, etc.)
                </div>
              </div>
              <div className="d-flex items-center mt-5">
                <Radio
                  className="px-0 py-0"
                  name="exclusive-channel"
                  value="ticket"
                  checked={exclusiveChannel === "ticket"}
                  onChange={handleChannelChange}
                />
                <div className="text-14 lh-14 ml-5">
                  Ticket booker exclusive (only for the guests who have booked
                  transportation or other ticket services recently)
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("prepay");
  return (
    <>
      <div className="d-flex items-center">
        <Radio
          checked={paymentMethod === "prepay"}
          onChange={() => setPaymentMethod("prepay")}
          value="prepay"
        />
        <div className="text-14 lh-14 ml-5">Prepay</div>
      </div>
      <div className="d-flex items-center">
        <Radio
          checked={paymentMethod === "postpay"}
          onChange={() => setPaymentMethod("postpay")}
          value="postpay"
        />
        <div className="text-14 lh-14 ml-5">Postpay</div>
      </div>
    </>
  );
};

const RatePlan = () => {
  const [ratePlanType, setRatePlanType] = useState("new");
  const [syncRoomStatus, setSyncRoomStatus] = useState(true);
  const [syncRates, setSyncRates] = useState(true);
  const [priceAdjustment, setPriceAdjustment] = useState("more");
  const [adjustmentValue, setAdjustmentValue] = useState(5);
  const handleRatePlanTypeChange = (event) => {
    setRatePlanType(event.target.value);
  };

  return (
    <>
      <div className="d-flex items-center">
        <Radio
          checked={ratePlanType === "new"}
          onChange={handleRatePlanTypeChange}
          value="new"
        />
        <div className="text-14 lh-14 ml-5">Set up as a new rate plan</div>
      </div>
      <div className="d-flex items-center">
        <Radio
          checked={ratePlanType === "exist"}
          onChange={handleRatePlanTypeChange}
          value="exist"
        />
        <div className="text-14 lh-14 ml-5">
          Derive rates from an existing rate plan
        </div>
      </div>

      {ratePlanType === "exist" && (
        <div className="ml-40 bg-light-2 rounded-8 py-10 px-10">
          <div className="text-14 mb-5">Which rate plan?</div>
          <select className="form-select px-10 py-10 pr-30 w-300 text-nowrap overflow-hidden text-truncate">
            <option value="">
              breakfast-excluded+Flexible-until 1 day before arrival(prepay)
            </option>
          </select>
          <div className="text-14 mt-5 mb-5">
            What kind of data would you like to synchronize for the rate plan?
          </div>
          <div className="d-flex items-center">
            <Checkbox
              className="px-0 py-0"
              checked={syncRoomStatus}
              onChange={() => setSyncRoomStatus(!syncRoomStatus)}
            />
            <div className="text-14 lh-14 ml-5">Room status & restrictions</div>
          </div>
          <div className="d-flex items-center mt-5">
            <Checkbox
              className="px-0 py-0"
              checked={syncRates}
              onChange={() => setSyncRates(!syncRates)}
            />
            <div className="text-14 lh-14 ml-5">Rates</div>
          </div>
          <div className="text-14 mt-5 mb-5">
            For this rate plan, you want it to be cheaper or more expensive than
            breakfast-excluded+Flexible-until 1 day before arrival(prepay)?
          </div>
          <div className="d-flex items-center">
            <Radio
              className="px-0 py-0"
              name="price-adjustment"
              value="cheaper"
              checked={priceAdjustment === "cheaper"}
              onChange={() => setPriceAdjustment("cheaper")}
            />
            <div className="text-14 lh-14 ml-5">
              Cheaper than breakfast-excluded+Flexible-until 1 day before
              arrival(prepay)
            </div>
          </div>

          <div className="d-flex items-center mt-5">
            <Radio
              className="px-0 py-0"
              name="price-adjustment"
              value="more"
              checked={priceAdjustment === "more"}
              onChange={() => setPriceAdjustment("more")}
            />
            <div className="text-14 lh-14 ml-5">
              More expensive than breakfast-excluded+Flexible-until 1 day before
              arrival(prepay)
            </div>
          </div>

          {/* Adjustment Value Input */}
          <div className="d-flex items-center mt-10 mb-10 pl-30">
            <div className="w-180">
              <input
                type="number"
                className="px-15 h-50 bg-white border-light rounded-8"
                value={adjustmentValue}
                onChange={(e) =>
                  setAdjustmentValue(parseInt(e.target.value)) || 0
                }
                min="0"
              />
            </div>
            <select className="bg-white border-light rounded-8 h-50 px-15 w-140">
              <option value="percent">%</option>
              <option value="dollar">$</option>
            </select>
          </div>

          {/* Summary */}
          <div
            className="ml-30 text-14 lh-14 bg-light-3 px-20 py-10 rounded-8"
            style={{ display: "inline-block" }}
          >
            Rate: {adjustmentValue}%{" "}
            {priceAdjustment === "more" ? "More expensive" : "Cheaper"} than
            breakfast-excluded+Flexible-until 1 day before arrival(prepay) 😊
          </div>
        </div>
      )}
    </>
  );
};

const RoomType = () => {
  const [paymentMethod, setPaymentMethod] = useState("all");
  return (
    <>
      <div className="d-flex items-center">
        <Radio
          checked={paymentMethod === "all"}
          onChange={() => setPaymentMethod("all")}
          value="all"
        />
        <div className="text-14 lh-14 ml-5">All</div>
      </div>
      <div className="d-flex items-center">
        <Radio
          checked={paymentMethod === "dentonDuplex"}
          onChange={() => setPaymentMethod("dentonDuplex")}
          value="dentonDuplex"
        />
        <div className="text-14 lh-14 ml-5">
          Luxurious & Spacious 4 Bed Duplex Getaway in Denton, TX
        </div>
      </div>
    </>
  );
};

const MinLengthStay = () => {
  const [minLengthStay, setMinLengthStay] = useState(2);
  const [isMaxLength, setIsMaxLength] = useState(false);
  const [maxLengthStay, setMaxLengthStay] = useState(minLengthStay);

  const handleMinLengthStayChange = (event) => {
    setMinLengthStay(event.target.value);
    setMaxLengthStay(Math.max(maxLengthStay, Number(event.target.value)));
  };

  return (
    <div className="ml-20 mt-5">
      <div className="w-210">
        <input
          type="number"
          min="1"
          value={minLengthStay}
          onChange={(event) => handleMinLengthStayChange(event)}
          className="border-light rounded-8 px-10 h-50 bg-white"
        />
      </div>
      <div className="d-flex items-center mt-5">
        <Checkbox
          className="px-0 py-0"
          checked={isMaxLength}
          onChange={() => setIsMaxLength(!isMaxLength)}
        />
        <div className="text-14 lh-14 ml-5">Max. length of stay</div>
      </div>
      {isMaxLength && (
        <div className="w-210 mt-5">
          <input
            type="number"
            min={minLengthStay}
            value={maxLengthStay}
            onChange={(event) => setMaxLengthStay(event.target.value)}
            className="border-light rounded-8 px-10 h-50 bg-white"
          />
        </div>
      )}
    </div>
  );
};

export default index;
