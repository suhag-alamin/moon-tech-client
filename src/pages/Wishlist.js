import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Wishlist = () => {
  const {
    state: { wishlist, loading, error },
  } = useProducts();
  let content;

  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Something went wrong</p>;
  } else if (!error && !loading && wishlist.length === 0) {
    content = <p>Nothing to show, product is empty</p>;
  } else if (!error && !loading && wishlist.length > 0) {
    content = wishlist.map((product) => (
      <ProductCard key={product._id} product={product} />
    ));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Wishlist;
