const Financial = () => {
  return (
    <div className="row y-gap-10 x-gap-10 bg-white px-20 py-20 rounded-8">
      <div className="text-20 fw-600 lh-1">Business Information</div>
      <div className="text-12 text-light-1 lh-1">
        Manage your business details
      </div>

      <div className="col-12">
        <h1 className="text-13 lh-14 fw-500">Business Name</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-5"
          type="text"
          placeholder="Enter business name"
        />
      </div>

      <div className="col-12">
        <h1 className="text-13 lh-14 fw-500">Website URL</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-5"
          type="text"
          placeholder="Enter website URL"
        />
      </div>

      <div className="col-12 text-14 lh-14 fw-500 mt-10">Business Address</div>

      <div className="col-md-6 col-sm-12">
        <h1 className="text-13 lh-14 fw-500">Address Line 1</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-5"
          type="text"
          placeholder="Enter address line 1"
        />
      </div>

      <div className="col-md-6 col-sm-12">
        <h1 className="text-13 lh-14 fw-500">Address Line 2</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-5"
          type="text"
          placeholder="Enter address line 2"
        />
      </div>

      <div className="col-md-3 col-sm-6">
        <h1 className="text-13 lh-14 fw-500">City</h1>
        <input
          className="border-light rounded-8 h-45 px-15 w-full mt-5"
          type="text"
          placeholder="Enter city"
        />
      </div>

      <div className="col-md-3 col-sm-6">
        <h1 className="text-13 lh-14 fw-500">State / Province</h1>
        <input
          className="border-light rounded-8 h-45 px-15 w-full mt-5"
          type="text"
          placeholder="Enter state / province"
        />
      </div>

      <div className="col-md-3 col-sm-6">
        <h1 className="text-13 lh-14 fw-500">Postal Code</h1>
        <input
          className="border-light rounded-8 h-45 px-15 w-full mt-5"
          type="text"
          placeholder="Enter postal code"
        />
      </div>

      <div className="col-md-3 col-sm-6">
        <h1 className="text-13 lh-14 fw-500">Country</h1>
        <select className="form-select border-light rounded-8 h-45 px-15 w-full mt-5">
          <option value="us">United State</option>
          <option value="ca">Canada</option>
        </select>
      </div>

      <div className="col-12">
        <h1 className="text-13 lh-14 fw-500">Business Description</h1>
        <textarea
          className="border-light rounded-8 py-5 px-15 w-full mt-5"
          rows={4}
          placeholder="Enter business description"
        />
      </div>

      <div className="d-flex">
        <button className="button bg-blue-1 text-white rounded-8 text-12 py-10 px-15">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Financial;
