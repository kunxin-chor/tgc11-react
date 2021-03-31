import React, { useContext } from "react";
import ProductContext from "./ProductContext";

export default function ProductTable() {
  const context = useContext(ProductContext);
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {context.products().map(p => {
            return (
              <React.Fragment>
                <tr>
                  <td>{p.id}</td>
                  <td>{p.product_name}</td>
                  <td>{p.cost}</td>
                </tr>
              </React.Fragment>
            );
          })
          }
        </tbody>
      </table>
    </React.Fragment>
  );
}
