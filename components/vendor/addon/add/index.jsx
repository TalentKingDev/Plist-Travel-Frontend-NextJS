import VendorDashboardLayout from "../../common/layout";
import Services from "./Services";

const index = () => {
  return (
    <VendorDashboardLayout>
      <div className="row y-gap-20 justify-between items-center mb-5">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Add-On Services Management</h1>
          <div className="text-15 text-light-1">
            Manage your Add-On services, pricing, and availability.
          </div>
        </div>
      </div>

      <div className="px-15">
        <Services />
      </div>
    </VendorDashboardLayout>
  );
};
export default index;
