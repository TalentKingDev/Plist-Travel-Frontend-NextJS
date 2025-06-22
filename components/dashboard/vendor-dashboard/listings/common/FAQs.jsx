import FormInput from "@/components/common/form/FormInput";
import { useState } from "react";

const FAQs = () => {
  const [faqs, setFaqs] = useState(1);
  return (
    <div className="row y-gap-10 x-gap-20">
      <div className="col-auto">
        <h1 className="text-20 lh-14 fw-600">Frequently Asked Questions</h1>
      </div>
      <div className="col-auto ms-auto">
        <i
          className="icon-plus text-20 cursor-pointer"
          onClick={() => setFaqs(faqs + 1)}
        />
      </div>
      {Array.from({ length: faqs }).map((_, index) => (
        <div className="col-12" key={index}>
          <div className="border-light rounded-8 px-15 py-15">
            <FormInput
              label={"Question"}
              type="text"
              placeholder="Enter Question"
            />
            <FormInput
              label={"Answer"}
              type="textarea"
              placeholder="Enter Answer"
            />
            <div className="col-12 d-flex justify-end">
              <button
                disabled={faqs === 1}
                className={
                  "button text-12 px-5 fw-400 " +
                  (faqs === 1 ? "" : "text-red-1")
                }
                onClick={() => setFaqs(faqs - 1)}
              >
                <i className="icon-close mr-10 text-10"></i>Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
