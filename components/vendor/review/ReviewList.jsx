import { OpenInFull } from "@mui/icons-material";
import { Dialog, Radio } from "@mui/material";
import { useState } from "react";

const ReviewList = ({ detail = false }) => {
  const [replyText, setReplyText] = useState("");
  const [rate, setRate] = useState({});
  const [showModal, setShowModal] = useState(false);

  const initModalContent = () => {
    setReplyText("");
    setRate({});
    setModalContentStatus("main");
  };
  const handleClose = () => {
    setShowModal(false);
    initModalContent();
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

  const [modalContentStatus, setModalContentStatus] = useState("main");

  const modalContentMap = {
    main: (
      <ModalMainContent
        setModalContentStatus={setModalContentStatus}
        replyText={replyText}
        rate={rate}
      />
    ),
    reply: (
      <ReplyForm
        setModalContentStatus={setModalContentStatus}
        replyText={replyText}
        setReplyText={setReplyText}
      />
    ),
    rate: (
      <RateForm
        setModalContentStatus={setModalContentStatus}
        rate={rate}
        setRate={setRate}
      />
    ),
  };

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
                  className="text-10 cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  <OpenInFull />
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
          <h1 className="text-20 fw-500 mb-10">Rating & Reply</h1>
          {modalContentMap[modalContentStatus]}
        </div>
      </Dialog>
    </div>
  );
};

const ModalMainContent = ({ setModalContentStatus, replyText, rate }) => {
  return (
    <>
      <div className="text-14 lh-12 fw-500">How did he do as a guest?</div>
      <div className="text-12 lh-12 text-light-1 mb-10">
        Rating will prompt them to review you in return.
      </div>
      {Object.keys(rate).length > 0 ? (
        <div className="bg-light-2 rounded-8 py-5 px-10 text-12 lh-12 mb-10">
          <div className="row x-gap-10 y-gap-10">
            <div className="col-6 mt-5">
              <h1 className="text-14 lh-12 fw-500">
                Overall Experience<span className="text-red-1">*</span>
              </h1>
              <div className="d-flex items-center gap-1">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <span
                      className="text-20 text-yellow-1 lh-14 cursor-pointer"
                      onClick={() => setRate({ ...rate, overall: index + 1 })}
                    >
                      {index < rate?.overall ? "★" : "☆"}
                    </span>
                  ))}
              </div>
            </div>

            <div className="col-6 mt-5">
              <h1 className="text-14 lh-12 fw-500">Cleanliness</h1>
              <div className="d-flex items-center gap-1">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <span
                      className="text-20 text-yellow-1 lh-14 cursor-pointer"
                      onClick={() =>
                        setRate({ ...rate, cleanliness: index + 1 })
                      }
                    >
                      {index < rate?.cleanliness ? "★" : "☆"}
                    </span>
                  ))}
              </div>
            </div>

            <div className="col-6 mt-5">
              <h1 className="text-14 lh-12 fw-500">House Rules</h1>
              <div className="d-flex items-center gap-1">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <span
                      className="text-20 text-yellow-1 lh-14 cursor-pointer"
                      onClick={() => setRate({ ...rate, houserule: index + 1 })}
                    >
                      {index < rate?.houserule ? "★" : "☆"}
                    </span>
                  ))}
              </div>
            </div>

            <div className="col-6 mt-5">
              <h1 className="text-14 lh-12 fw-500">Communication</h1>
              <div className="d-flex items-center gap-1">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <span
                      className="text-20 text-yellow-1 lh-14 cursor-pointer"
                      onClick={() =>
                        setRate({ ...rate, communication: index + 1 })
                      }
                    >
                      {index < rate?.communication ? "★" : "☆"}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          className="text-14 text-blue-1 border-blue-1 rounded-8 px-10"
          onClick={() => setModalContentStatus("rate")}
        >
          Rate Guest
        </button>
      )}
      <div className="text-14 lh-12 fw-500 mt-20">Reply to Guest Review</div>
      <div className="text-12 lh-12 text-light-1 mb-10">
        Rating will prompt them to review you in return.
      </div>
      {replyText ? (
        <div className="bg-light-2 mt-10 rounded-8 py-5 px-10 text-16 lh-12 mb-10 text-break">
          {replyText}
        </div>
      ) : (
        <button
          className="text-14 text-blue-1 border-blue-1 rounded-8 px-10"
          onClick={() => setModalContentStatus("reply")}
        >
          Reply
        </button>
      )}
    </>
  );
};

const RateForm = ({ setModalContentStatus, rate, setRate }) => {
  const [reRent, setReRent] = useState(false);

  return (
    <div className="row x-gap-10 y-gap-10">
      <div className="col-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">
          Overall Experience<span className="text-red-1">*</span>
        </h1>
        <div className="d-flex items-center gap-1">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <span
                className="text-20 text-yellow-1 lh-14 cursor-pointer"
                onClick={() => setRate({ ...rate, overall: index + 1 })}
              >
                {index < rate?.overall ? "★" : "☆"}
              </span>
            ))}
        </div>
      </div>

      <div className="col-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Cleanliness</h1>
        <div className="d-flex items-center gap-1">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <span
                className="text-20 text-yellow-1 lh-14 cursor-pointer"
                onClick={() => setRate({ ...rate, cleanliness: index + 1 })}
              >
                {index < rate?.cleanliness ? "★" : "☆"}
              </span>
            ))}
        </div>
      </div>

      <div className="col-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">House Rules</h1>
        <div className="d-flex items-center gap-1">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <span
                className="text-20 text-yellow-1 lh-14 cursor-pointer"
                onClick={() => setRate({ ...rate, houserule: index + 1 })}
              >
                {index < rate?.houserule ? "★" : "☆"}
              </span>
            ))}
        </div>
      </div>

      <div className="col-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Communication</h1>
        <div className="d-flex items-center gap-1">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <span
                className="text-20 text-yellow-1 lh-14 cursor-pointer"
                onClick={() => setRate({ ...rate, communication: index + 1 })}
              >
                {index < rate?.communication ? "★" : "☆"}
              </span>
            ))}
        </div>
      </div>

      <div className="col-12 mt-15">
        <h1 className="text-14 lh-12 fw-500">Would you rent to him again?</h1>
        <div className="d-flex items-center gap-1 mt-10">
          <Radio
            className="px-0 py-0"
            checked={reRent}
            onChange={() => setReRent(true)}
          />
          Yes
          <Radio
            className="px-0 py-0"
            checked={!reRent}
            onChange={() => setReRent(false)}
          />
          No
        </div>
      </div>

      <div className="d-flex justify-end gap-2">
        <button
          className="text-14 border-light rounded-8 px-10 py-5"
          onClick={() => {
            setModalContentStatus("main");
            initModalContent();
          }}
        >
          Cancel
        </button>
        <button
          className="text-14 bg-blue-1 text-white fw-500 rounded-8 px-10 py-5"
          onClick={() => {
            setModalContentStatus("main");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

const ReplyForm = ({ setModalContentStatus, replyText, setReplyText }) => {
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
    <>
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
          onClick={() => {
            setReplyText("");
            setModalContentStatus("main");
          }}
        >
          Cancel
        </button>
        <button
          className="text-14 bg-blue-1 text-white fw-500 rounded-8 px-10 py-5"
          onClick={() => {
            setModalContentStatus("main");
          }}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default ReviewList;
