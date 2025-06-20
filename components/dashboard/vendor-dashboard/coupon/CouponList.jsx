const CouponList = ({ detail = false }) => {
  const data = [
    {
      code: "SUMMER2023",
      description: "Summer Sale Discount",
      listingType: "Hotel",
      listingCategory: "Classes & Learning",
      listingSubcategory: "Accommodations",
      listing: "Deluxe Rooms",
      discountType: "Percentage",
      discountValue: "20",
      usage: "45/100",
      dateFrom: "Aug 25, 2023",
      dateTo: "Aug 31, 2023",
    },
    {
      code: "WELCOME50",
      description: "New Customer Discount",
      listingType: "Activities",
      listingCategory: "Cultural Experiences",
      listingSubcategory: "City Tours",
      listing: "Historic Downtown Tour",
      discountType: "Fixed",
      discountValue: "50",
      usage: "32/50",
      dateFrom: "Dec 22, 2023",
      dateTo: "Dec 31, 2023",
    },
    {
      code: "FLASH25",
      description: "Flash Sale",
      listingType: "Activities",
      listingCategory: "Food & Drink",
      listingSubcategory: "Wine Tasting",
      listing: "Premium Wine Selection",
      discountType: "Percentage",
      discountValue: "25",
      usage: "18/20",
      dateFrom: "Jul 10, 2023",
      dateTo: "Jul 15, 2023",
    },
    {
      code: "SPAWEEK30",
      description: "Wellness Week Special",
      listingType: "Activities",
      listingCategory: "Wellness & Spa",
      listingSubcategory: "Massages",
      listing: "Aromatherapy Package",
      discountType: "Percentage",
      discountValue: "30",
      usage: "12/30",
      dateFrom: "Sep 5, 2023",
      dateTo: "Sep 30, 2023",
    },
    {
      code: "ADVENTURE15",
      description: "Outdoor Adventure Promo",
      listingType: "Activities",
      listingCategory: "Outdoor Adventures",
      listingSubcategory: "Kayaking",
      listing: "Sunset Kayak Tour",
      discountType: "Percentage",
      discountValue: "15",
      usage: "22/40",
      dateFrom: "Oct 14, 2023",
      dateTo: "Oct 15, 2023",
    },
    {
      code: "EVENT100",
      description: "Major Event Discount",
      listingType: "Events",
      listingCategory: "Concerts & Shows",
      listingSubcategory: "Music",
      listing: "Jazz Festival Pass",
      discountType: "Fixed",
      discountValue: "100",
      usage: "8/20",
      dateFrom: "Nov 1, 2023",
      dateTo: "Nov 20, 2023",
    },
  ];

  return (
    <div className="overflow-scroll scroll-bar-1 pt-0">
      <table className="table-2 col-12">
        <thead>
          <tr className="text-light-1 fw-600 text-14">
            <th>Code</th>
            <th>Description</th>
            <th>Listing Type</th>
            <th>Listing Category</th>
            <th>Listing Subcategory</th>
            <th>Listing</th>
            <th>Discount</th>
            <th>Usage</th>
            <th>Date from</th>
            <th>Date to</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="align-middle text-12">{row.code}</td>
              <td className="align-middle text-12">{row.description}</td>
              <td className="align-middle text-12">{row.listingType}</td>
              <td className="align-middle text-12">{row.listingCategory}</td>
              <td className="align-middle text-12">{row.listingSubcategory}</td>
              <td className="align-middle text-12">{row.listing}</td>
              <td className="align-middle text-12">
                {row.discountType == "Fixed"
                  ? `$${row.discountValue}`
                  : `${row.discountValue}%`}
              </td>
              <td className="align-middle text-12">{row.usage}</td>
              <td className="align-middle text-12">{row.dateFrom}</td>
              <td className="align-middle text-12">{row.dateTo}</td>
              <td className="align-middle">
                <span className="material-symbols-outlined">more_horiz</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CouponList;
