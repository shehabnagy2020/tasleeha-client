import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full mb-20 lg:mb-0" style={{ height: "8%" }}>
      <div className="flex items-center justify-center h-full border-t">
        <div className="flex items-center justify-center flex-col gap-y-1">
          <span className="text-gray-400 font-bold text-sm capitalize">
            sovio © جميع الحقوق محفوظة {new Date().getFullYear()}
          </span>
          <div className="text-blue-500 text-sm font-bold flex items-center justify-center gap-x-3">
            <Link to="/privacy">سياسة الاستخدام</Link>
            <span className="text-gray-500">.</span>
            <Link to="/cart">السلة</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
