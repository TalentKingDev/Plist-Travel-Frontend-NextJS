const BookingRules = () => {
  return (
    <div className="row y-gap-10 x-gap-10">
      <h1 className="text-20 lh-1 fw-600">Booking Rules</h1>
      <div className="text-16 lh-1 fw-500">Minimum night stay</div>
      <div className="text-14 text-light-1 lh-1 text-light-1">
        Define base minimum stay duration so you are covered across your whole
        calendar year.
      </div>
      <div className="col-sm-6 mt-5">
        <div className="form-input pr-20">
          <input
            type="number"
            className="px-10 py-5 rounded-8 text-14"
            style={{ minHeight: "45px" }}
            required
          />
          <label
            className="lh-1 text-12 text-light-1 px-5"
            style={{ left: "15px", top: "10px", background: "white" }}
          >
            Minimum night stay
          </label>
        </div>
      </div>
      <div className="col-sm-6 mt-5">
        <div className="form-input pr-20">
          <input
            type="number"
            className="px-10 py-5 rounded-8 text-14"
            style={{ minHeight: "45px" }}
            required
          />
          <label
            className="lh-1 text-12 text-light-1 px-5"
            style={{ left: "15px", top: "10px", background: "white" }}
          >
            Minimum hour stay
          </label>
        </div>
      </div>

      <div className="text-14 text-light-1 lh-1 text-light-1 mt-10">
        Define how far in advance travelers can book your property.
      </div>

      <div className="col-sm-6 mt-5">
        <div className="form-input pr-20">
          <select className="border-light rounded-8 py-10 px-15 w-full mt-10 form-select">
            <option value="">24 months</option>
          </select>
          <label
            className="lh-1 text-12 text-light-1 px-5"
            style={{ left: "15px", top: "5px", background: "white" }}
          >
            How far out do you accept bookings?
          </label>
        </div>
      </div>
      <div className="col-sm-6 mt-5">
        <div className="form-input pr-20">
          <select className="border-light rounded-8 py-10 px-15 w-full mt-10 form-select">
            <option value="">1 day</option>
          </select>
          <label
            className="lh-1 text-12 text-light-1 px-5"
            style={{ left: "15px", top: "5px", background: "white" }}
          >
            How close in do you accept bookings?
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

export default BookingRules;
