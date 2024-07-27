import React, { useEffect, useState } from "react";
import { FaBriefcase, FaHome } from "react-icons/fa";
import styles from "./Product.module.scss";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllProducts,
  selectProductError,
  selectProductStatus,
} from "../../features/products/productsSelector";
import {
  deleteProduct,
  fetchAllProducts,
} from "../../features/products/productsApi";

const Product = () => {
  const dispatch = useDispatch();
  const listProducts = useSelector(selectAllProducts);
  const status = useSelector(selectProductStatus);
  const error = useSelector(selectProductError);

  const navigate = useNavigate();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllProducts());
    }
  }, [status, dispatch]);

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <>
      <div className={styles.navigation}>
        <ul>
          <li>
            <a href="#">
              <span className={styles.icon}>
                <FaHome style={{ fontSize: "22px" }} />
              </span>
              <span className={styles.menuTitle}>Admin</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className={styles.icon}>
                <FaBriefcase style={{ fontSize: "22px" }} />
              </span>
              <span className={styles.menuTitle}>Products</span>
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.mainContent}>
        <Row>
          <h1 className={styles.title}>Product Management</h1>
        </Row>
        <Row>
          <Col className="d-flex flex-row-reverse">
            <Button
              variant="info"
              onClick={() => {
                navigate(`/add-product`);
              }}
            >
              Add New Product
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary">All</Button> {""}
            <Button variant="success">New</Button> {""}
            <Button variant="primary">Active</Button> {""}
            <Button variant="secondary">InActive</Button> {""}
          </Col>
          <Col>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Content</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {error ? (
              <div className="text-danger">{error}</div>
            ) : (
              <tbody>
                {listProducts.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.content}</td>
                      <td>{product.categoryName}</td>
                      <td>{product.status}</td>
                      <td>
                        <Button
                          variant="success"
                          onClick={() => {
                            navigate(`${product.id}`);
                          }}
                        >
                          Details
                        </Button>{" "}
                        || <Button variant="info">Update</Button> ||{" "}
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </Table>
        </Row>
      </div>
    </>
  );
};

export default Product;
