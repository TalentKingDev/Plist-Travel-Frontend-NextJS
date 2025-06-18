import { useState } from "react";

const Description = () => {
  const [starRating, setStarRating] = useState(0);

  return (
    <div className="row y-gap-10 x-gap-10">
      <h1 className="text-20 lh-14 fw-600">Property Description</h1>
      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Listing Title</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Enter listing title"
        />
      </div>

      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Category</h1>
        <select className="form-select rounded-8 border-light px-15 py-10 justify-between text-14 w-full mt-10">
          <option defaultValue>Select category</option>
        </select>
      </div>

      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Subcategory</h1>
        <select className="form-select rounded-8 border-light px-15 py-10 justify-between text-14 w-full mt-10">
          <option defaultValue>Select subcategory type</option>
          {/* <optgroup label="Property List">
            <option value="hotel">Hotel</option>
            <option value="vacation-rental">Vacation Rental</option>
            <option value="event-venue">Event Venue</option>
            <option value="spaces">Spaces</option>
          </optgroup>
          <optgroup label="Non-Property List">
            <option value="tour">Tour</option>
            <option value="activity">Activity</option>
            <option value="event">Event</option>
          </optgroup> */}
        </select>
      </div>

      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Property Type</h1>
        <select className="form-select rounded-8 border-light px-15 py-10 justify-between text-14 w-full mt-10">
          <option defaultValue>Select property type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="cabin">Cabin</option>
        </select>
      </div>

      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Star Rating</h1>
        <div className="d-flex items-center gap-1 mt-10">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <span
                className="text-20 text-yellow-1 lh-14 cursor-pointer"
                onClick={() => setStarRating(index + 1)}
              >
                {index < starRating ? "★" : "☆"}
              </span>
            ))}
        </div>
      </div>

      <div className="col-12 mt-5">
        <h1 className="text-14 lh-12 fw-500">Host Profile</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Enter your host profile"
        />
      </div>

      <div className="col-sm-12 mt-5">
        <h1 className="text-14 lh-12 fw-500">Listing Description</h1>
        <textarea
          rows={5}
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Describe your property"
        />
      </div>
    </div>
  );
};

export default Description;
