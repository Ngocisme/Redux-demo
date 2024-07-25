import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./AddProduct.module.scss";
import { Link } from "react-router-dom";

function AddProduct() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Add New Product</h3>
          <div className="form-group mt-3">
            <label>Name Product</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Price</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Enter price $"
            />
          </div>
          <div className="form-group mt-3">
            <label>Content</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter content"
            />
          </div>

          <div className="form-group mt-3">
            <label>Category</label>
            <Form.Select aria-label="Choose category">
              <option value="1">Iphone</option>
              <option value="2">Nokia</option>
              <option value="3">Samsung</option>
            </Form.Select>
          </div>

          <div className="form-group mt-3">
            <label>Action</label>
            <Form.Select aria-label="Choose action">
              <option value="1">active</option>
              <option value="2">new</option>
              <option value="3">inActive</option>
            </Form.Select>
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Back to <Link to="/manage-product">dashboard?</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
