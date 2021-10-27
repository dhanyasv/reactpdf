//import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useState } from "react";
import Pdf from "./Pdf";
import { BlobProvider } from "@react-pdf/renderer";

export const Form = (props) => {
  const [quoteform, setQuoteForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    amount: 0,
    isBallon: true,
  });
  const { firstname, lastname, email, phone, amount, isBallon } = quoteform;
  const getQuoteData = (e) => {
    e.preventDefault();
    //props.formData(quoteform);
  };
  const onFormChange = (name, value) => {
    setQuoteForm({ ...quoteform, [name]: value });
  };
  //  const openPDF = (url) => {
  //    window.open(url, "_blank");
  //  };
  return (
    props.showQuoteForm && (
      <form onSubmit={getQuoteData}>
        <ul className="flex-outer">
          <li>
            <label for="amount">Amount</label>
            <input
              required
              type="number"
              min="1000"
              step="any"
              id="amount"
              name="amount"
              value={amount}
              placeholder="Enter your number here"
              onChange={(e) => onFormChange(e.target.name, e.target.value)}
            />
          </li>
          <li>
            <label> Ballon Included</label>
            <label className="switch">
              <input
                type="checkbox"
                name="isBallon"
                id="isBallon"
                value={isBallon}
                checked={isBallon}
                onChange={(e) => onFormChange(e.target.name, e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
          </li>
          <li>
            <label for="first-name">First Name</label>
            <input
              required
              type="text"
              id="first-name"
              name="firstname"
              value={firstname}
              placeholder="Enter your first name here"
              onChange={(e) => onFormChange(e.target.name, e.target.value)}
            />
          </li>
          <li>
            <label for="last-name">Last Name</label>
            <input
              required
              type="text"
              id="last-name"
              name="lastname"
              value={lastname}
              placeholder="Enter your last name here"
              onChange={(e) => onFormChange(e.target.name, e.target.value)}
            />
          </li>
          <li>
            <label for="email">Email</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email here"
              onChange={(e) => onFormChange(e.target.name, e.target.value)}
            />
          </li>
          <li>
            <label for="phone">Phone</label>
            <input
              required
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              placeholder="Enter your phone here"
              onChange={(e) => onFormChange(e.target.name, e.target.value)}
            />
          </li>
          <li>
            {/*<button type="submit" className="quotedownloadbutton">*/}
            {/*<PDFDownloadLink
                document={<Pdf value={quoteform} />}
                fileName="quote.pdf"
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Loading document..." : openPDF(url)
                }
              </PDFDownloadLink>*/}
            <BlobProvider document={<Pdf value={quoteform} />}>
              {({ url }) => (
                <a
                  className="quotedownloadbutton"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Doc
                </a>
              )}
            </BlobProvider>
            {/*</button>*/}
          </li>
          <li></li>
        </ul>
      </form>
    )
  );
};
