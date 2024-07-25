import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../features/products/productsApi";

function DetailProduct() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const error = useSelector((state) => state.products.error);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, productId]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <h1>{product.price} $</h1>
          <h1>{product.content}</h1>
        </div>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
}

export default DetailProduct;
