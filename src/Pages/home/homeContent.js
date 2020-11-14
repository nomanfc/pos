import React from "react";
import { Link } from "react-router-dom";

import saleIcon from "../../icons/green/sales.png";
import customerIcon from "../../icons/green/customers.png";
import itemIcon from "../../icons/green/items.png";
import receivingIcon from "../../icons/green/receivings.png";
import supplierIcon from "../../icons/green/suppliers.png";
import employeeIcon from "../../icons/green/employees.png";
import reportIcon from "../../icons/green/reports.png";
import expenseIcon from "../../icons/green/expense.png";
// //css
import "./homeContent.css";

const HomeContent = () => {
  return (
    <div className="contents">
      <ul className="ul-flex">
        <li className="modules">
          <Link
            style={{ textDecoration: "none", justifyContent: "center" }}
            to="/sales"
          >
            <div
              style={{ textAlign: "center", color: "white", height: "100%" ,marginTop:"5px"}}
            >
              <img
                src={saleIcon}
                style={{ height: "70px", width: "70px" }}
                alt="sales"
              />
              <br></br>
              <h3 style={{ textAlign: "center", color: "#ed642b" }}>Sales</h3>
              <div style={{ color: "white" }}>Process Sells and Retuens</div>
            </div>
          </Link>
        </li>{" "}
        <li className="modules">
          <Link
            style={{ textDecoration: "none", justifyContent: "center" }}
            to="/customers"
          >
            <div
              style={{ textAlign: "center", color: "white", height: "100%" ,marginTop:"5px"}}
            >
              <img
                src={customerIcon}
                style={{ height: "70px", width: "70px" }}
                alt="customers"
              />
              <br></br>
              <h3 style={{ textAlign: "center", color: "#ed642b" }}>Customers</h3>
              <div style={{ color: "white" }}>Add, Update, Delete and Search customers</div>
            </div>
          </Link>
        </li>
        <li className="modules">
          <Link
            style={{ textDecoration: "none", justifyContent: "center" }}
            to="/items"
          >
            <div
              style={{ textAlign: "center", color: "white", height: "100%",marginTop:"5px" }}
            >
              <img
                src={itemIcon}
                style={{ height: "70px", width: "70px" }}
                alt="items"
              />
              <br></br>
              <h3 style={{ textAlign: "center", color: "#ed642b" }}>Items</h3>
              <div style={{ color: "white" }}>Add, Update, Delete and Search items</div>
            </div>
          </Link>
        </li>
        <li className="modules">
          <Link
            style={{ textDecoration: "none", justifyContent: "center" }}
            to="/receivings"
          >
            <div
              style={{ textAlign: "center", color: "white", height: "100%",marginTop:"5px"}}
            >
              <img
                src={receivingIcon}
                style={{ height: "70px", width: "70px" }}
                alt="receivings"
              />
              <br></br>
              <h3 style={{ textAlign: "center", color: "#ed642b" }}>Receivings</h3>
              <div style={{ color: "white" }}>Process Purchase orders</div>
            </div>
          </Link>
        </li>
        <li className="modules">
          <Link
            style={{ textDecoration: "none", justifyContent: "center" }}
            to="/suppliers"
          >
            <div
              style={{ textAlign: "center", color: "white", height: "100%",marginTop:"5px"}}
            >
              <img
                src={supplierIcon}
                style={{ height: "70px", width: "70px" }}
                alt="suppliers"
              />
              <br></br>
              <h3 style={{ textAlign: "center", color: "#ed642b" }}>Suppliers</h3>
              <div style={{ color: "white" }}>Add, Update, Delete and Search suppliers</div>
            </div>
          </Link>
        </li>
        <li className="modules">
          <Link
            style={{ textDecoration: "none", justifyContent: "center" }}
            to="/employees"
          >
            <div
              style={{ textAlign: "center", color: "white", height: "100%",marginTop:"5px" }}
            >
              <img
                src={employeeIcon}
                style={{ height: "70px", width: "70px" }}
                alt="employees"
              />
              <br></br>
              <h3 style={{ textAlign: "center", color: "#ed642b" }}>Employees</h3>
              <div style={{ color: "white" }}>Add, Update, Delete and Search employees</div>
            </div>
          </Link>
        </li>
        <li className="modules">
          <Link
            style={{ textDecoration: "none", justifyContent: "center" }}
            to="/reports"
          >
            <div
              style={{ textAlign: "center", color: "white", height: "100%" ,marginTop:"5px"}}
            >
              <img
                src={reportIcon}
                style={{ height: "70px", width: "70px" }}
                alt="reports"
              />
              <br></br>
              <h3 style={{ textAlign: "center", color: "#ed642b" }}>Reports</h3>
              <div style={{ color: "white" }}>View and generate reports</div>
            </div>
          </Link>
        </li>
        <li className="modules">
          <Link
            style={{ textDecoration: "none", justifyContent: "center" }}
            to="/expense"
          >
            <div
              style={{ textAlign: "center", color: "white", height: "100%",marginTop:"5px" }}
            >
              <img
                src={expenseIcon}
                style={{ height: "70px", width: "70px" }}
                alt="expense"
              />
              <br></br>
              <h3 style={{ textAlign: "center", color: "#ed642b" }}>Expense</h3>
              <div style={{ color: "white" }}>Add, Update, Delete and Search expense</div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeContent;
