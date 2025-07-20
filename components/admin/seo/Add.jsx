import FormInput from "@/components/common/form/FormInput";

const index = () => {
  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12 mt-10">
        <h1 className="text-20 lh-14 fw-600">SEO Editor</h1>
        <div className="text-14 text-light-1 lh-14">
          Optimize meta tags and SEO settings for a specific page
        </div>
      </div>

      <FormInput
        type="text"
        label="Page Title"
        placeholder="Enter page title"
        gridClass="col-12"
      />

      <FormInput
        type="text"
        label="Meta Title"
        placeholder="Enter meta title"
        gridClass="col-12"
        description="Recommended length: 50-60 characters"
      />

      <FormInput
        type="text"
        label="Meta Description"
        placeholder="Enter meta description"
        gridClass="col-12"
        description="Recommended length: 150-160 characters"
      />

      <FormInput
        type="text"
        label="Focus Keywords"
        placeholder="Enter keywords separated by commas"
        gridClass="col-12"
      />

      <FormInput
        type="text"
        label="Canonical URL"
        placeholder="Enter canonical URL"
        gridClass="col-12"
      />

      <div className="col-12 mt-5">
        <h1 className="text-14 lh-12 fw-500">Social Media Preview</h1>
        <div className="border-light rounded-8 px-15 py-15 mt-10">
          <div className="text-blue-1 text-18 lh-14 fw-600">
            TravelSaaS - Complete Travel Management Platform
          </div>
          <div className="text-green-2 text-14 lh-14">
            https://travelsaas.com
          </div>
          <div className="text-light-1 text-14 lh-14">
            Streamline your travel business with our all-in-one SaaS solution
            for vendors, agents, and customers.
          </div>
        </div>
      </div>

      <div className="col-12 mt-5 d-flex justify-end gap-3 mb-10">
        <button className="border-light rounded-8 text-14 py-5 px-15 w-full">
          Preview
        </button>
        <button className="bg-dark-blue text-white rounded-8 text-14 py-5 px-15 w-full">
          Save SEO Settings
        </button>
      </div>
    </div>
  );
};

export default index;
