"use client";

import svgIcon from "@/components/data/svgIcon";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const index = ({ isTravelPackage = false }) => {
    const [dates, setDates] = useState([
        new DateObject(),
        new DateObject().add(1, "month"),
    ]);
    const [starRating, setStarRating] = useState(0);
    const [departureDate, setDepartureDate] = useState(new DateObject());
    const [returnDate, setReturnDate] = useState(
        new DateObject().add(10, "days")
    );

    return (
        <div
            className={
                isTravelPackage ? "" : "py-20 px-20 rounded-8 bg-white shadow-3"
            }
        >
            {!isTravelPackage && (
                <>
                    <h1 className="text-30 lh-14 fw-600">Flights Search</h1>
                    <div className="text-15 text-light-1">
                        Find the perfect flight for your client
                    </div>
                </>
            )}
            <div className="row x-gap-10 y-gap-10 mt-10">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h1 className="text-15 lh-14 fw-500">Origin</h1>
                    <input
                        className="border-light rounded-8 py-5 px-20 w-full mt-10"
                        type="text"
                        placeholder="City or Airport"
                    />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h1 className="text-15 lh-14 fw-500">Destination</h1>
                    <input
                        className="border-light rounded-8 py-5 px-20 w-full mt-10"
                        type="text"
                        placeholder="City or Airport"
                    />
                </div>
                <div className="col-sm-4 mt-10">
                    <h1 className="text-15 lh-14 fw-500">Departure Date</h1>
                    <div className="border-light rounded-8 py-10 px-20 w-full mt-10 cursor-text text-gray-900 bg-white">
                        <DatePicker
                            inputClass="custom_input-picker"
                            containerClassName="custom_container-picker"
                            value={departureDate}
                            onChange={setDepartureDate}
                            numberOfMonths={1}
                            offsetY={10}
                            format="MMMM DD"
                        />
                    </div>
                </div>
                <div className="col-sm-4 mt-10">
                    <h1 className="text-15 lh-14 fw-500">Return Date</h1>
                    <div className="border-light rounded-8 py-10 px-20 w-full mt-10 cursor-text text-gray-900 bg-white">
                        <DatePicker
                            inputClass="custom_input-picker"
                            containerClassName="custom_container-picker"
                            value={returnDate}
                            onChange={setReturnDate}
                            numberOfMonths={1}
                            offsetY={10}
                            format="MMMM DD"
                        />
                    </div>
                </div>

                <div className="col-sm-4 mt-10">
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
            </div>
        </div>
    );
};

export default index;
