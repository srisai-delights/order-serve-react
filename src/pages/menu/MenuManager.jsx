import React, { useState, useEffect } from "react";
import "./css/MenuManager.css";
import biryaniData from "../../assets/configuration/biryaniItems.json";

const MenuManager = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const LOCAL_KEY = "menuItems";

  // Load from localStorage or fallback to JSON file
  useEffect(() => {
    const storedItems = localStorage.getItem(LOCAL_KEY);
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      setItems(biryaniData);
      localStorage.setItem(LOCAL_KEY, JSON.stringify(biryaniData));
    }
  }, []);

  // Save to localStorage on every update
  const saveItemsToStorage = (updatedItems) => {
    setItems(updatedItems);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updatedItems));
  };

  const handleAdd = (newItem) => {
    const updatedItems = [...items, newItem];
    saveItemsToStorage(updatedItems);
  };

  const handleUpdate = (updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    saveItemsToStorage(updatedItems);
    setEditingItem(null);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    saveItemsToStorage(updatedItems);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
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
    "Biryani",
    "Starter",
    "Dessert",
    "Drinks",
    "Special",
  ];

  const MenuForm = ({ onAdd, onUpdate, editingItem }) => {
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
      setForm({
        ...form,
        [name]: type === "checkbox" ? checked : value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!form.id.trim()) {
        alert("ID is required");
        return;
      }

      if (editingItem) {
        onUpdate(form);
      } else {
        onAdd(form);
      }

      setForm(emptyItem);
    };

    return (
      <form onSubmit={handleSubmit} className="menu-form">
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
              {categoryOptions.map((cat) => (
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
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="isAvailable"
              checked={form.isAvailable}
              onChange={handleChange}
            />
            <label className="form-check-label">Available</label>
          </div>
          <div className="form-group form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="isVisible"
              checked={form.isVisible}
              onChange={handleChange}
            />
            <label className="form-check-label">Visible</label>
          </div>
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-success btn-submit">
            {editingItem ? "Update Item" : "Add Item"}
          </button>
        </div>
      </form>
    );
  };

  const uniqueCategories = [...new Set(items.map((item) => item.category))];

  return (
    <div>
      <MenuForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editingItem={editingItem}
      />

      <div className="menu-manager">
        <div className="category-list mb-3">
          <strong>Categories:</strong>{" "}
          {uniqueCategories.map((cat, index) => (
            <span key={index} className="badge bg-secondary me-2">
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
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>{item.image}</td>
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
