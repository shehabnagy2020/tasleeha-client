import React, { useContext } from "react";
import HelperContext from "../../contexts/HelperContext";
import { Link } from "react-router-dom";

const SectionCart = () => {
  let { cartItems } = useContext(HelperContext);

  return (
    <Link href="/cart" className="flex items-center flex-shrink-0">
      <div className="hidden md:flex mr-1">
        {cartItems?.items?.length >= 1 && (
          <span className="text-sm text-gray-400 font-bold capitalize">
            ${cartItems.total}
          </span>
        )}
      </div>
      <div className="relative">
        {cartItems?.items?.length >= 1 && (
          <div className="absolute" style={{ bottom: "60%", left: "60%" }}>
            <span className="bg-red-400 px-2 py-1 rounded-full text-white text-sm">
              {cartItems?.items?.length}
            </span>
          </div>
        )}

        <div className="flex justify-center items-center text-gray-400">
          <span className="material-icons">shopping_cart</span>
        </div>
      </div>
    </Link>
  );
};

export default SectionCart;
