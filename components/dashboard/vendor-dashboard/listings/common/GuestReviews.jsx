
import { useState } from "react";

const GuestReviews = () => {
  const [reviews, setReviews] = useState(1);
  return (
    <div className="row y-gap-10 x-gap-20">
      <div className="col-auto">
        <h1 className="text-20 lh-14 fw-600">Guest Reviews and Ratings</h1>
      </div>
      <div className="col-auto ms-auto">
        <i
          className="icon-plus text-20 cursor-pointer"
          onClick={() => setReviews(reviews + 1)}
        />
      </div>
      {Array.from({ length: reviews }).map((_, index) => (
        <div className="col-12" key={index}>
          <div className="border-light rounded-8 px-15 py-15">
            <div className="d-flex items-center gap-2">
              <h1 className="text-14 lh-12 fw-500">Review</h1>
              <StarRating />
            </div>
            <textarea
              rows={2}
              className="border-light rounded-8 py-5 px-15 w-full mt-10"
              type="text"
              placeholder="Enter Guest Review"
            />
            <div className="col-12 d-flex justify-end">
              <button
                disabled={reviews === 1}
                className={
                  "button text-12 px-5 fw-400 " +
                  (reviews === 1 ? "" : "text-red-1")
                }
                onClick={() => setReviews(reviews - 1)}
              >
                <i className="icon-close mr-10 text-10"></i>Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const StarRating = () => {
  const [starRating, setStarRating] = useState(0);

  return (
    <div className="d-flex items-center gap-1">
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
  );
};

export default GuestReviews;
