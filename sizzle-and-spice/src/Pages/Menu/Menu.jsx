import React, { useEffect, useState } from "react";
import "../Menu/menu.css";

const Menu = () => {
  const [tableData, setTableData] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/menu/foods");
        const data = await response.json();
        setTableData(data.menu); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleCheckboxChange = (id) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const getCheckedItems = () => {
    const selected = tableData.filter((item) => checkedItems[item.id]);
    const total = selected.reduce((acc, item) => (acc += item.price), 0);
    setSelectedItems(selected);
    setTotalPrice(total);
    console.log(selected);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); 
  };

  const filteredTableData = selectedCategory
    ? tableData.filter((item) => item.category === selectedCategory)
    : tableData;

  const clearSelectedItems = () => {
    setCheckedItems({});
    setSelectedItems([]);
    setTotalPrice(0);
    };

  return (
    <section className="categories-side">
      <div className="categories-title">
        <h2>Categories</h2>
        <button
          className="category-item"
          onClick={() => handleCategoryClick("Burger")}
        >
          Burgers
        </button>
        <button
          className="category-item"
          onClick={() => handleCategoryClick("Sandwich")}
        >
          Sandwiches
        </button>
        <button
          className="category-item"
          onClick={() => handleCategoryClick("Fries")}
        >
          Fries
        </button>
        <button
          className="category-item"
          onClick={() => handleCategoryClick("Pasta")}
        >
          Pasta
        </button>
        <button
          className="category-item"
          onClick={() => handleCategoryClick("Chicken")}
        >
          Chicken
        </button>
        <button
          className="category-item"
          onClick={() => handleCategoryClick("Drinks")}
        >
          Drinks
        </button>
      </div>
      <div className="categories2-title">
        <h2>Place Your Order</h2>
        <table border="">
          <thead>
            <tr>
              <th>Select</th>
              <th>Type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredTableData.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={checkedItems[item.id] || false}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </td>

                  <td>{item.type}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {selectedItems.length > 0 && (
          <div className="selected-items">
            <h2>Selected Order</h2>
            <ul className="order-list">
              {selectedItems.map((item) => (
                <li key={item.id}>
                  {item.type} - ksh {item.price} ({item.category})
                </li>
              ))}
            </ul>
            <h3>Total Price: ksh{totalPrice}</h3>
            <h4>Payment Method: Accout Number-247247 Paybill-742742</h4>
          </div>
        )}
        <div className="buttons-section">
          <button className="category-item2" onClick={getCheckedItems}>
            Get Selected Order
          </button>
          <button className="category-item2" onClick={clearSelectedItems}>
            Cancel Order
          </button>
          <button className="category-item2">Place Order</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
