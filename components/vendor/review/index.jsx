"use client";

import VendorDashboardLayout from "../common/layout";
import ReviewList from "./ReviewList";
import Filter from "../common/Filter";

const index = () => {
  return (
    <VendorDashboardLayout>
      <div className="row y-gap-20 justify-between items-center mb-5">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Guest Reviews & Ratings</h1>
          <div className="text-15 text-light-1">
            Create and manage guest reviews and ratings.
          </div>
        </div>
      </div>

      <Filter />

      <div className="py-10 px-20 rounded-8 bg-white shadow-3 h-100 mt-20">
        <ReviewList />
      </div>
    </VendorDashboardLayout>
  );
};

export default index;
