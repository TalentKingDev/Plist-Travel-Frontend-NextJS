"use client";

import { useRouter } from "next/navigation";
import VendorDashboardLayout from "@/components/vendor/common/layout";

const index = () => {
  const router = useRouter();

  return (
    <VendorDashboardLayout>
      <div className="row y-gap-10 justify-between items-end mb-10">
        <h1 className="text-30 lh-14 fw-600">Add a new rate plan</h1>
      </div>
      <div className="bg-white rounded-8 py-20 px-20 mt-10">
        <div className="text-18 lh-14">Customize rate plans</div>
        <div className="text-14 text-light-1 lh-14">
          Set up a rate plan that is tailored to your property and business
          goals.
        </div>
        <div className="bg-light-2 rounded-8 py-15 px-15 mt-10 d-flex items-center justify-between">
          <div>
            <div className="text-16 lh-14 fw-500">Customize</div>
            <div className="text-14 text-light-1 lh-14">
              Set up a rate plan that is tailored to your property and business
              goals.
            </div>
          </div>
          <button
            className="text-14 lh-14 text-blue-1"
            onClick={() => router.push("/vendor/rateplan/add/custom")}
          >
            Add a new rate plan
          </button>
        </div>
      </div>

      <div className="bg-white rounded-8 py-20 px-20 mt-10">
        <div className="text-18 lh-14">Attract a wider range of guests</div>
        <div className="text-14 text-light-1 lh-14">
          After completing basic settings, these rate plans can make your
          property more appealing to high-value users.
        </div>
        <div className="bg-light-2 rounded-8 py-15 px-15 mt-10 d-flex items-center justify-between">
          <div>
            <div className="text-16 lh-14 fw-500">Hourly</div>
            <div className="text-14 text-light-1 lh-14">
              Set up an hourly rate plan to attract guests with special needs
              and boost your bookings and revenue
            </div>
          </div>
          <button
            className="text-14 lh-14 text-blue-1"
            onClick={() => router.push("/vendor/rateplan/add/hourly")}
          >
            Add a new rate plan
          </button>
        </div>
        <div className="bg-light-2 rounded-8 py-15 px-15 mt-10 d-flex items-center justify-between">
          <div>
            <div className="text-16 lh-14 fw-500">Monthly</div>
            <div className="text-14 text-light-1 lh-14">
              Offer a promotion to long stay guests to ensure stay ratio and
              revenue
            </div>
          </div>
          <button
            className="text-14 lh-14 text-blue-1"
            onClick={() => router.push("/vendor/rateplan/add/monthly")}
          >
            Add a new rate plan
          </button>
        </div>
      </div>
    </VendorDashboardLayout>
  );
};

export default index;
