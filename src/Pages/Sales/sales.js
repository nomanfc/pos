import React from "react";

//css
import "./sales.css";

const Sales = () => {
  return (
    <div className="sales-wrapper">
      <div className="sales-heading">
        <h1>Sales Register</h1>
      </div>
      <div className="sales-container">
        <div className="sales-register">
          <form>
            <div className="sales-form-1">
              <div>Register Mode</div>
              <div>
                <select style={{ marginLeft: "10px" }}>
                  <option>Sale</option>
                  <option>Return</option>
                </select>
              </div>
              <div style={{ flex: 1 }}></div>
              <div>
                <button>Suspended Sales</button>
              </div>
            </div>
          </form>
          <form>
            <div className="sales-form-2">
              <div>Find/Scan Item OR Receipt</div>
              <div>
                <div style={{ marginLeft: "10px" }}>
                  <input
                    type="text"
                    placeholder="Start typing item name or scan barcode..."
                  ></input>
                </div>
              </div>
              <div style={{ flex: 1 }}></div>
              <div>
                <button>New Item</button>
              </div>
            </div>
          </form>
        </div>
        <div className="sales-new-customer">
          <form className="sales-form-3">
            <h4>Select Customer (Optional)</h4>
            <br />
            <input
              type="text"
              placeholder="Start typing customers name.."
            ></input>
            <br />
            <br />
            <div>OR</div>
            <br />
            <button>New Customer</button>
            <br />
            <br />
            <hr></hr>
          </form>
          <form>
            <div className="sales-sub-total">
              <div>Sub Total:</div>
              <div style={{textAlign:'center'}}>0.0 AED</div>
            </div>
            <div className="sales-total">
              <div>Total:</div>
              <div style={{textAlign:'center'}}>0.0 AED</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sales;
