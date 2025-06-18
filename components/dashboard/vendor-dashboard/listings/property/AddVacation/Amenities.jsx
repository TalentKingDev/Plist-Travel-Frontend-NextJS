import { Checkbox } from "@mui/material";

const Amenities = () => {
  return (
    <div className="row y-gap-10 x-gap-20">
      <h1 className="text-20 lh-14 fw-600">Amenities and Features</h1>
      <div className="text-16 lh-14 fw-500">Amenities</div>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <div className="col-sm-4 mt-5" key={"air" + index}>
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-14 fw-500 ml-10">Air Conditioner</div>
            </div>
          </div>
        ))}
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <div className="col-sm-4 mt-5" key={"bar/restaurant" + index}>
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-14 fw-500 ml-10">Bar / Restaurant</div>
            </div>
          </div>
        ))}
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <div className="col-sm-4 mt-5" key={"breakfast" + index}>
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-14 fw-500 ml-10">Breakfast Included</div>
            </div>
          </div>
        ))}
      <div className="text-16 lh-14 fw-500 mt-10">Other Features</div>
      <div className="px-10 mt-5">
        <div className="d-flex items-center gap-1">
          <Checkbox className="px-0 py-0" />
          <h1 className="text-14 lh-12 fw-500">Accessibility Info</h1>
        </div>
        <textarea
          rows={2}
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Describe Accessibility"
        />
      </div>
    </div>
  );
};

export default Amenities;
