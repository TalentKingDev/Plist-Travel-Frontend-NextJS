import svgIcon from "@/components/data/svgIcon";
import { Radio } from "@mui/material";
import { useState } from "react";

const Security = () => {
  const [protection, setProtection] = useState(2);
  const [coverage, setCoverage] = useState(0);
  const coverages = [
    {
      coverage: "$59.00",
      amount: "$1,500.00",
    },
    {
      coverage: "$89.00",
      amount: "$3,000.00",
    },
    {
      coverage: "$119.00",
      amount: "$5,000.00",
    },
  ];

  return (
    <div className="row y-gap-10 x-gap-10">
      <h1 className="text-20 lh-1 fw-600">Security Deposit</h1>
      <div className="text-14 fw-500 lh-1">
        How do you protect your property?
      </div>
      <div className="text-14 text-light-1 lh-14">
        Protect your property from any potential accidents.
      </div>

      <div
        className="d-flex justify-start items-center gap-2 cursor-pointer"
        onClick={() => setProtection(1)}
      >
        <Radio checked={protection === 1} className="px-0 py-0" />
        <span className="text-14 lh-14">No damage protection</span>
      </div>

      <div
        className="d-flex justify-start items-center gap-2 cursor-pointer"
        onClick={() => setProtection(2)}
      >
        <Radio checked={protection === 2} className="px-0 py-0" />
        <span className="text-14 lh-14">
          Property damage protection (Recommended)
        </span>
      </div>
      <div className="text-12 text-light-1 lh-14 pl-30">
        With this option, you provide guests a choice between a low cost
        property damage policy that covers accidental damage, where you will be
        the beneficiary, or a refundable damage deposit that’s equivalent to the
        full policy coverage amount that you select. To learn more about
        Property Damage Deposit and the different policy coverage options, click{" "}
        <span className="text-blue-1 cursor-pointer">here</span>.
      </div>
      <div className="pl-30 overflow-scroll scroll-bar-1 d-flex items-center gap-3">
        {coverages.map((item, index) => {
          var text_color = coverage == index ? "text-white" : "text-dark";
          return (
            <div
              key={index}
              className={
                "rounded-8 px-15 py-15 w-210 cursor-pointer " +
                (coverage == index ? "bg-blue-1" : "border-light")
              }
              onClick={() => setCoverage(index)}
            >
              <div className={`text-14 text-center ${text_color} lh-14`}>
                {item.coverage}
              </div>
              <div className="border-top-light mt-20 mb-20"></div>
              <div className={`text-20 fw-400 text-center ${text_color} lh-14`}>
                {item.amount}
              </div>
              <div className={`text-12 fw-400 text-center ${text_color} lh-14`}>
                coverage
              </div>
              <div className="text-white text-center">{svgIcon.icon_check}</div>
            </div>
          );
        })}
      </div>

      <div
        className="d-flex justify-start items-center gap-2 cursor-pointer"
        onClick={() => setProtection(3)}
      >
        <Radio checked={protection === 3} className="px-0 py-0" />
        <span className="text-14 lh-14">Damage deposit</span>
      </div>
      <div className="text-12 text-light-1 lh-14 pl-30">
        With this option, you’re covered up to the amount you set for any damage
        to your property. You’ll have 14 days after your guest’s stay to report
        damage.
      </div>
      <div className="pl-30">
        <div className="position-relative d-flex items-center w-210">
          <input
            type="text"
            placeholder="Coverage amount"
            className="border-light bg-white rounded-8 px-10 py-5 pl-30"
          />
          <span
            className="text-light-1 position-absolute"
            style={{
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            $
          </span>
        </div>
      </div>

      <div className="border-top-light mt-15 pt-15 d-flex justify-end gap-2">
        <button className="bg-white border-light rounded-8 px-15 py-5 text-14 fw-500">
          Cancel
        </button>
        <button className="text-white bg-blue-1 rounded-8 px-15 py-5 text-14">
          Save
        </button>
      </div>
    </div>
  );
};

export default Security;
