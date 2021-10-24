import React from "react";
import { Form } from "./Form";
import "./App.css";
import Pdf from "./Pdf";
import jsPDF from "jspdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formData: {}, showDownLoadLink: false, showQuoteForm: true };
  }
  getFormData = (val) => {
    this.setState({ formData: val }, () => {
      this.setState({ showDownLoadLink: true, showQuoteForm: false });
    });
  };
  generatePDFByJspdf = () => {
    const doc = new jsPDF("p", "pt");

    doc.text(20, 20, "TEST BY DHA");

    doc.addFont("helvetica", "normal");
    doc.text(20, 60, "This is the second title.");
    doc.text(20, 100, "This is the thrid title.");

    doc.save("demo.pdf");
  };
  render() {
    return (
      <div className="container">
        <h3 className="app-heading">DEMO PDF GENERATION APP</h3>
        {this.state.showQuoteForm && (
          <Form
            formData={this.getFormData}
            showQuoteForm={this.state.showQuoteForm}
          />
        )}
        {this.state.showDownLoadLink && (
          <div className="buttonContainer">
            <div>
              <button className="quotedownloadbutton">
                <PDFDownloadLink
                  document={<Pdf value={this.state.formData} />}
                  fileName="quote.pdf"
                >
                  {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : <> Download The Quote</>
                  }
                </PDFDownloadLink>
              </button>
            </div>
            <div>
              <button
                className="quotedownloadbutton"
                onClick={() =>
                  this.setState({
                    showDownLoadLink: false,
                    showQuoteForm: true,
                  })
                }
              >
                Calculate Quote Again
              </button>
            </div>
            <div>
              <button
                className="quotedownloadbutton"
                onClick={() => this.generatePDFByJspdf()}
              >
                PDf By Jspdf
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default App;
