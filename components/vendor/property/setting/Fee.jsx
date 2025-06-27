import LabeledInput from "@/components/common/form/LabeledInput";

const Fee = () => {
  return (
    <div className="row y-gap-10 x-gap-10">
      <h1 className="text-20 lh-1 fw-600">Standard fees</h1>
      <div className="text-14 text-light-1 lh-14">
        You can add fees to help cover hosting costs.{" "}
        <span className="fw-500 text-dark">
          We recommend keeping fees on the lower side
        </span>{" "}
        &mdash; fees higher than
        <span className="fw-500">10%</span>
        of total stay price can decrease bookings
      </div>
      <div className="text-14 lh-1 fw-500">Cleaning</div>
      <LabeledInput
        gridClass="col-sm-4"
        label={"Amount ($)"}
        type="number"
        otherProps={{ step: "0.01" }}
      />
      <div className="col-sm-4">
        <div className="form-input pr-20">
          <select className="border-light rounded-8 py-10 px-15 w-full form-select">
            <option value="">Per stay</option>
          </select>
          <label
            className="lh-1 text-12 text-light-1 px-5"
            style={{ left: "15px", top: "-5px", background: "white" }}
          >
            Fee type
          </label>
        </div>
      </div>

      <div className="text-14 lh-1 fw-500">Pets</div>
      <LabeledInput
        gridClass="col-sm-4"
        label={"Amount ($)"}
        type="number"
        otherProps={{ step: "0.01" }}
      />
      <div className="col-sm-4">
        <div className="form-input pr-20">
          <select className="border-light rounded-8 py-10 px-15 w-full form-select">
            <option value="">Per stay</option>
          </select>
          <label
            className="lh-1 text-12 text-light-1 px-5"
            style={{ left: "15px", top: "-5px", background: "white" }}
          >
            Fee type
          </label>
        </div>
      </div>

      <div className="text-14 lh-1 fw-500">Additional guests</div>
      <div className="text-12 text-light-1 lh-1 fw-500">
        Hosting more guests? Use this fee to cover any extra costs.
      </div>
      <LabeledInput
        gridClass="col-sm-4"
        label={"Amount ($)"}
        type="number"
        otherProps={{ step: "0.01" }}
      />
      <div className="col-sm-4">
        <div className="form-input pr-20">
          <select className="border-light rounded-8 py-10 px-15 w-full form-select">
            <option value="">Per guest per stay</option>
            <option value="">Per guest per night</option>
            <option value="" disabled>
              Per guest per hour(for hourly stay)
            </option>
          </select>
          <label
            className="lh-1 text-12 text-light-1 px-5"
            style={{ left: "15px", top: "-5px", background: "white" }}
          >
            Fee type
          </label>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-input pr-20">
          <select className="border-light rounded-8 py-10 px-15 w-full form-select">
            <option value="">3</option>
          </select>
          <label
            className="lh-1 text-12 text-light-1 px-5"
            style={{ left: "15px", top: "-5px", background: "white" }}
          >
            For each guest after
          </label>
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

export default Fee;
