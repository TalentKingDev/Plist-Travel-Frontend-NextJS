"use client";

import VendorDashboardLayout from "../../common/layout";
import TravelPackageFlow from "@/components/dashboard/dashboard/db-package/components/TravelPackageFlow";

export const index = () => {
  return (
    <VendorDashboardLayout>
      <div className="row y-gap-20 justify-between items-end mb-20">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Travel Package Builder</h1>
          <div className="text-15 text-light-1">
            Design personalized travel packages
          </div>
        </div>
      </div>

      <div className="py-20 px-20 rounded-8 bg-white shadow-3">
        <TravelPackageFlow />
      </div>
    </VendorDashboardLayout>
  );
};

export default index;
