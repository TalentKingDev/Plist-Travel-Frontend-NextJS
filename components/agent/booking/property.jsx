import BookingForm from "@/components/dashboard/dashboard/db-booking/components/BookingForm";
import AgentDashboardLayout from "../common/layout";

const index = ({ serviceType }) => {
  return (
    <AgentDashboardLayout>
      <div className="row y-gap-20 justify-between items-end mb-20">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Create New Booking</h1>
          <div className="text-15 text-light-1">Add a new walk-in booking.</div>
        </div>
      </div>

      <div className="py-30 px-30 rounded-22 bg-white shadow-3 row x-gap-20 y-gap-20 items-center">
        <BookingForm serviceType={serviceType} />
      </div>
    </AgentDashboardLayout>
  );
};

export default index;
