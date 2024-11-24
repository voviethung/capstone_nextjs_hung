import React from "react";
import CategoriesMenu from "../components/CategoriesMenu/CategoriesMenu";
import Header from "../components/Header/Header";
// import {Outlet} from "react-router-dom";


export default function HeaderHomeTemplate({}) {
  return (
    <div>
      <Header />
      <CategoriesMenu />
    </div>
  );
}
