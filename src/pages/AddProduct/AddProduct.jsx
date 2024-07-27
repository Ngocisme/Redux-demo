import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./AddProduct.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  fetchAllProducts,
} from "../../features/products/productsApi";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Product name is required"),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be a positive number")
    .integer("Price must be a integer"),
  content: yup.string(),
  categoryName: yup.string().required("Category must choose"),
  status: yup.string().required("Status must choose"),
});

function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  const submitAddProduct = async (data) => {
    try {
      await dispatch(addProduct(data));
      await dispatch(fetchAllProducts());
    } catch (error) {
      console.log("Failed to add product: ", error);
    }
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit(submitAddProduct)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Add New Product</h3>
          <div className="form-group mt-3">
            <label>Name Product</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter name"
              id="name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>
          <div className="form-group mt-3">
            <label>Price</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Enter price $"
              id="price"
              {...register("price")}
            />
            {errors.price && (
              <p className="text-danger">{errors.price.message}</p>
            )}
          </div>
          <div className="form-group mt-3">
            <label>Content</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter content"
              id="context"
              {...register("content")}
            />
          </div>

          <div className="form-group mt-3">
            <label>Category</label>
            <Controller
              name="categoryName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Form.Select
                  aria-label="Choose category"
                  id="categoryName"
                  {...field}
                  isInvalid={!!errors.categoryName}
                >
                  <option value="Iphone">Iphone</option>
                  <option value="Nokia">Nokia</option>
                  <option value="Samsung">Samsung</option>
                </Form.Select>
              )}
            />
            {errors.categoryName && (
              <p className="text-danger">{errors.categoryName.message}</p>
            )}
          </div>

          <div className="form-group mt-3">
            <label>Action</label>
            <Controller
              name="status"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Form.Select
                  aria-label="Choose action"
                  id="status"
                  {...field}
                  isInvalid={!!errors.status}
                >
                  <option value="active">active</option>
                  <option value="new">new</option>
                  <option value="inActive">inActive</option>
                </Form.Select>
              )}
            />
            {errors.status && (
              <p className="text-danger">{errors.status.message}</p>
            )}
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

//!!!!!!! Vấn đề //!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!! không lấy được trường content và category //!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!! ngay field category và status thay vì set cứng thì //!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!! dùng vòng lặp lặp từ api sau đó lấy giá trị ngay tại vòng lặp đó //!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!! あああああああああああ　死ねええええええええええええ //!!!!!!!!!!!!!!!!!!!!!!!!!
