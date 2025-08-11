import React, { useState, useEffect } from "react";
import "./css/MenuManager.css";

import BiryaniItems from "../../assets/configuration/biryaniItems.json";
import BeverageItems from "../../assets/configuration/beverageItems.json";
import CurryItems from "../../assets/configuration/curryItems.json";
import DessertItems from "../../assets/configuration/dessertItems.json";
import SnackItems from "../../assets/configuration/snackItems.json";
import TandooriItems from "../../assets/configuration/tandooriItems.json";

const LOCAL_KEY = "combinedMenuItems";

const MenuManager = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const storedItems = localStorage.getItem(LOCAL_KEY);
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      const combinedItems = [
        ...BiryaniItems,
        ...BeverageItems,
        ...CurryItems,
        ...DessertItems,
        ...SnackItems,
        ...TandooriItems,
      ];
      setItems(combinedItems);
      localStorage.setItem(LOCAL_KEY, JSON.stringify(combinedItems));
    }
  }, []);

  const saveItemsToStorage = (updatedItems) => {
    setItems(updatedItems);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updatedItems));
  };

  const handleAdd = (newItem) => {
    if (items.find((item) => item.id === newItem.id)) {
      alert("ID already exists. Please choose a unique ID.");
      return;
    }
    const updatedItems = [...items, newItem];
    saveItemsToStorage(updatedItems);
    setSelectedCategory(newItem.category);
  };

  const handleUpdate = (updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    saveItemsToStorage(updatedItems);
    setEditingItem(null);
    setSelectedCategory(updatedItem.category);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    const updatedItems = items.filter((item) => item.id !== id);
    saveItemsToStorage(updatedItems);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setSelectedCategory(item.category);
  };

  const emptyItem = {
    id: "",
    name: "",
    price: 109,
    category: "Biryani",
    description: "",
    image: "",
    isAvailable: true,
    isVisible: true,
  };

  const categoryOptions = [
    "All",
    "Biryani",
    "Starter",
    "Desserts",
    "Drinks",
    "Special",
    "Beverages",
    "Curries",
    "Snacks",
    "Tandoori",
  ];

  const MenuForm = ({
    onAdd,
    onUpdate,
    editingItem,
    selectedCategory,
    onCategoryChange,
  }) => {
    const [form, setForm] = useState(emptyItem);

    useEffect(() => {
      if (editingItem) {
        setForm(editingItem);
      } else {
        setForm(emptyItem);
      }
    }, [editingItem]);

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;

      if (name === "category") {
        onCategoryChange(value);
      }

      setForm({
        ...form,
        [name]: type === "checkbox" ? checked : value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent page refresh
      if (!form.id.trim()) {
        alert("ID is required");
        return;
      }
      if (!form.name.trim()) {
        alert("Name is required");
        return;
      }
      if (editingItem) {
        onUpdate(form);
      } else {
        onAdd(form);
      }
      setForm(emptyItem);
      onCategoryChange("All"); // reset filter after add/update
    };

    return (
      <form onSubmit={handleSubmit} className="menu-form" noValidate>
        <div className="form-grid">
          <div className="form-group">
            <label>ID</label>
            <input
              type="text"
              name="id"
              value={form.id}
              onChange={handleChange}
              className="form-control"
              required
              disabled={!!editingItem}
              placeholder="Unique identifier"
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
              required
              placeholder="Menu item name"
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="form-control"
              min="0"
              step="0.01"
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="form-control"
            >
              {categoryOptions
                .filter((c) => c !== "All")
                .map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
            </select>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="form-control"
              placeholder="Short description"
            />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              className="form-control"
              placeholder="Path or URL to image"
            />
          </div>
          <div className="form-group form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="isAvailable"
              checked={form.isAvailable}
              onChange={handleChange}
              id="availableCheck"
            />
            <label className="form-check-label" htmlFor="availableCheck">
              Available
            </label>
          </div>
          <div className="form-group form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="isVisible"
              checked={form.isVisible}
              onChange={handleChange}
              id="visibleCheck"
            />
            <label className="form-check-label" htmlFor="visibleCheck">
              Visible
            </label>
          </div>
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-success btn-submit">
            {editingItem ? "Update Item" : "Add Item"}
          </button>
          {editingItem && (
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={() => {
                setEditingItem(null);
                onCategoryChange("All");
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    );
  };

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const uniqueCategories = ["All", ...new Set(items.map((item) => item.category))];

  return (
    <div className="container py-3">
      <h2>Menu Manager</h2>

      <MenuForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editingItem={editingItem}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="menu-manager mt-4">
        <div className="category-list mb-3">
          <strong>Categories:</strong>{" "}
          {uniqueCategories.length === 0 && <em>No categories</em>}
          {uniqueCategories.map((cat, index) => (
            <span
              key={index}
              className={`badge me-2 ${
                cat === selectedCategory ? "bg-primary" : "bg-secondary"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedCategory(cat)}
              title="Click to filter"
            >
              {cat}
            </span>
          ))}
        </div>

        <table className="table table-bordered menu-table">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
              <th>Image</th>
              <th>Available</th>
              <th>Visible</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center">
                  No menu items found.
                </td>
              </tr>
            )}
            {filteredItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{Number(item.price).toFixed(2)}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ maxWidth: "80px", maxHeight: "60px" }}
                    />
                  ) : (
                    <em>No Image</em>
                  )}
                </td>
                <td>{item.isAvailable ? "Yes" : "No"}</td>
                <td>{item.isVisible ? "Yes" : "No"}</td>
                <td className="action-buttons">
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => handleEdit(item)}
                    title="Edit"
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDelete(item.id)}
                    title="Delete"
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuManager;