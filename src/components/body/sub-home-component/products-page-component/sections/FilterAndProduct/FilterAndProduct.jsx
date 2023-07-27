import React from "react";
import "./FilterAndProduct.css";
import ProductsCard from "../../../../../public-component/cards/ProductsCard";
const FilterAndProduct = () => {
  return (
    <div>
      <div className="row">
        <div className="col  filter-product-side">
          <ul>
            <li>
              <h5>Type</h5>
              <ul>
                <li>
                  <input type="checkbox" id="chilldren" />
                  <label htmlFor="chilldren">chilldren</label>
                </li>
                <li>
                  <input type="checkbox" id="computer" />
                  <label htmlFor="computer">computer</label>
                </li>
                <li>
                  <input type="checkbox" id="home things" />
                  <label htmlFor="home things">home things</label>
                </li>
              </ul>
            </li>
            <li>
              <h5>Brand</h5>
              <ul>
                <li>
                  <input type="checkbox" id="Lg" />
                  <label htmlFor="Lg">Lg</label>
                </li>
                <li>
                  <input type="checkbox" id="Apple" />
                  <label htmlFor="Apple">Apple</label>
                </li>
                <li>
                  <input type="checkbox" id="home-things" />
                  <label htmlFor="home-things">home things</label>
                </li>
              </ul>
            </li>
            <li>
              <h5>Price</h5>
              <ul>
                <li>
                  <input
                    type="number"
                    name="the-least"
                    className="price"
                    placeholder="0"
                  />
                  <label htmlFor="the-least">The least</label>
                </li>
                <li>
                  <input
                    type="number"
                    name="the-biggest"
                    className="price"
                    placeholder="0"
                  />
                  <label htmlFor="the-biggest">The biggest</label>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col col-8 product-side">
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
        </div>
      </div>
    </div>
  );
};

export default FilterAndProduct;
