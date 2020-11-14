import React from "react";
import { Link } from "react-router-dom";

import homeIcon from "../../../icons/green/home.png";
import saleIcon from "../../../icons/green/sales.png";
import customerIcon from "../../../icons/green/customers.png";
import itemIcon from "../../../icons/green/items.png";
import receivingIcon from "../../../icons/green/receivings.png";
import supplierIcon from "../../../icons/green/suppliers.png";
import employeeIcon from "../../../icons/green/employees.png";
import reportIcon from "../../../icons/green/reports.png";
import expenseIcon from "../../../icons/green/expense.png";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link className="link" to="/home">
            <div style={{textAlign:'center'}}>
              <img
                src={homeIcon}
                style={{ height: "30px", width: "40px"}}
                alt="home"
              />
              <div style={{ textAlign: "center" }}>Home</div>
            </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/sales">
            <div style={{textAlign:'center'}}>
              <img
                src={saleIcon}
                style={{ height: "30px", width: "40px"}}
                alt="sales"
              />
              <div style={{ textAlign: "center" }}>Sales</div>
            </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/customers">
            <div style={{textAlign:'center'}}>
              <img
                src={customerIcon}
                style={{ height: "30px", width: "40px"}}
                alt="customers"
              />
              <div style={{ textAlign: "center" }}>Customers</div>
            </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/items">
            <div style={{textAlign:'center'}}>
              <img
                src={itemIcon}
                style={{ height: "30px", width: "40px"}}
                alt="items"
              />
              <div style={{ textAlign: "center" }}>Items</div>
            </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/receivings">
            <div style={{textAlign:'center'}}>
              <img
                src={receivingIcon}
                style={{ height: "30px", width: "40px"}}
                alt="receivings"
              />
              <div style={{ textAlign: "center" }}>Receivings</div>
            </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/suppliers">
            <div style={{textAlign:'center'}}>
              <img
                src={supplierIcon}
                style={{ height: "30px", width: "40px" }}
                alt="suppliers"
              />
              <div style={{ textAlign: "center" }}>Suppliers</div>
            </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/employess">
            <div style={{textAlign:'center'}}>
              <img
                src={employeeIcon}
                style={{ height: "30px", width: "40px"}}
                alt="employees"
              />
              <div style={{ textAlign: "center" }}>Employees</div>
            </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/reports">
            <div style={{textAlign:'center'}}>
              <img
                src={reportIcon}
                style={{ height: "30px", width: "40px" }}
                alt="reports"
              />
              <div style={{ textAlign: "center" }}>Reports</div>
            </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/expense">
            <div style={{textAlign:'center'}}>
              <img
                src={expenseIcon}
                style={{ height: "30px", width: "40px" }}
                alt="expense"
              />
              <div style={{ textAlign: "center" }}>Expense</div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
