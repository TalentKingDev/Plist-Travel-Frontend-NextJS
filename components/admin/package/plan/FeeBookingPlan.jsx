import svgIcon from "@/components/data/svgIcon";
import CheckIcon from "@mui/icons-material/Check";
import { green } from "@mui/material/colors";
import { Edit, Trash } from "lucide-react";

const FeeBookingPlan = () => {
  return (
    <div className="bg-white rounded-8 border-light shadow-4 py-30 px-20">
      <div className="row y-gap-20 x-gap-20">
        <div className="col-12 d-flex flex-column items-center justify-center">
          <div className="size-60 flex-center rounded-full bg-green-1 text-gree-2">
            {svgIcon.fee_model}
          </div>
          <div className="text-24 fw-600">Fee per Booking</div>
          <div className="text-16 text-light-1">
            Pay only when you make a booking. No monthly fees, no commitments.
          </div>
          <div className="text-40 fw-600 lh-1 mt-30">15%</div>
          <div className="text-16 text-light-1">
            Commission per confirmed booking
          </div>
        </div>
        <div className="col-sm-6">
          <div className="bg-light-2 px-15 py-10 rounded-8 h-100">
            <div className="text-14">What's included:</div>
            <div className="d-flex items-center text-14 gap-2 mt-5">
              <CheckIcon sx={{ color: green[400], fontSize: 16 }} />
              Unlimited listings
            </div>
            <div className="d-flex items-center text-14 gap-2 mt-5">
              <CheckIcon sx={{ color: green[400], fontSize: 16 }} />
              Standard support
            </div>
            <div className="d-flex items-center text-14 gap-2 mt-5">
              <CheckIcon sx={{ color: green[400], fontSize: 16 }} />
              Basic analytics
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="bg-light-2 px-15 py-10 rounded-8 h-100">
            <div className="text-14">How it works:</div>
            <div className="d-flex items-center text-14 gap-2 mt-5">
              <CheckIcon sx={{ color: green[400], fontSize: 16 }} />
              Pay only when you receive a booking
            </div>
            <div className="d-flex items-center text-14 gap-2 mt-5">
              <CheckIcon sx={{ color: green[400], fontSize: 16 }} />
              15% commission on each booking value
            </div>
            <div className="d-flex items-center text-14 gap-2 mt-5">
              <CheckIcon sx={{ color: green[400], fontSize: 16 }} />
              No monthly or annual fees
            </div>
          </div>
        </div>
        <div className="d-flex items-center justify-end gap-2 mt-auto">
          <span className="text-12 fw-500 text-white bg-green-3 rounded-100 px-10">
            Active
          </span>
          <Edit size={16} className="text-light-1 cursor-pointer" />
          <Trash size={16} className="text-light-1 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default FeeBookingPlan;
