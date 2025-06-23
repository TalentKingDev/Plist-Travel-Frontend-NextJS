import { Dialog } from "@mui/material";
import { useState } from "react";

const CouponList = ({ detail = false }) => {
  const [replyText, setReplyText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };

  const data = [
    {
      customer: "Summer Sale Discount",
      listing: "Deluxe Rooms",
      rating: 4,
      review: "Great experience with the property",
    },
    {
      customer: "New Customer Discount",
      listing: "Historic Downtown Tour",
      rating: 5,
      review: "The property is beautiful and the staff is friendly",
    },
    {
      customer: "Flash Sale",
      listing: "Premium Wine Selection",
      rating: 3,
      review: "The tour guide was knowledgeable and the wine was delicious",
    },
    {
      customer: "Wellness Week Special",
      listing: "Aromatherapy Package",
      rating: 4,
      review: "The package is amazing and the staff is friendly",
    },
    {
      customer: "Outdoor Adventure Promo",
      listing: "Sunset Kayak Tour",
      rating: 4,
      review: "The tour was fun and the guide was knowledgeable",
    },
    {
      customer: "Major Event Discount",
      listing: "Jazz Festival Pass",
      rating: 5,
      review: "The festival was amazing and the music was great",
    },
  ];

  const dynamicFields = [
    { value: "{{property_name}}", label: "Name of booked property" },
    { value: "{{guest_first_name}}", label: "Guest First Name" },
    { value: "{{guest_last_name}}", label: "Guest Last Name" },
    { value: "{{check_in_date}}", label: "Check-in Date" },
    { value: "{{check_in_time}}", label: "Check-in Time" },
    { value: "{{check_out_date}}", label: "Check-out Date" },
    { value: "{{check_out_time}}", label: "Check-out Time" },
    { value: "{{booking_id}}", label: "Booking ID" },
    { value: "{{nights}}", label: "Total nights booked" },
  ];
  return (
    <div className="overflow-scroll scroll-bar-1 pt-0">
      <table className="table-2 col-12">
        <thead>
          <tr className="text-light-1 fw-600 text-14">
            <th>Customer</th>
            <th>Listing</th>
            <th>Rating</th>
            <th>Review</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="align-middle text-12">{row.customer}</td>
              <td className="align-middle text-12">{row.listing}</td>
              <td className="align-middle text-12">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <span className="text-20 text-yellow-1 lh-14 cursor-pointer">
                      {index < row.rating ? "★" : "☆"}
                    </span>
                  ))}
              </td>
              <td className="align-middle text-12">{row.review}</td>
              <td className="align-middle">
                <span
                  className="text-12 text-blue-1 cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  Reply
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dialog
        open={showModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-title"
      >
        <div className="px-20 py-20" style={{ width: "500px" }}>
          <h1 className="text-20 fw-500 mb-10">Leave a Reply</h1>
          <div className="d-flex items-center flex-wrap gap-2 mb-10">
            {dynamicFields.map((item, index) => (
              <span
                className="text-12 fw-500 rounded-100 bg-blue-2 px-10 text-blue-1 cursor-pointer"
                key={index}
                onClick={() => setReplyText(replyText + item.value)}
              >
                {item.label}
              </span>
            ))}
          </div>
          <textarea
            className="text-14 border-light rounded-8 bg-white px-10 py-5 mb-10"
            placeholder="Enter your quick reply"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <div className="d-flex justify-end gap-2">
            <button
              className="text-14 border-light rounded-8 px-10 py-5"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="text-14 bg-blue-1 text-white fw-500 rounded-8 px-10 py-5"
              onClick={() => {
                setReplyText("");
                setShowModal(false);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CouponList;
