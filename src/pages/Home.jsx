import React, { Suspense, lazy } from "react";
import "../responsive.js"
import styled from "styled-components";
const Announcement = lazy(() => import("../components/Announcement"));
const Slider = lazy(() => import("../components/Slider"));
const Categories = lazy(() => import("../components/Categories"));
const Products = lazy(() => import("../components/Products"));
const Newsletter = lazy(() => import("../components/Newsletter"));
const SingleProduct = lazy(() => import("../components/SingleProduct"));
const Footer = lazy(() => import("../components/Footer"));



const Loader = styled.div`
  border : 8px solid #f3f3f3 ;
  border-top: 8px solid orangered;
  border-radius : 50% ;
  width : 50px ;
  height : 50px ;
  animation : spin 1.5s linear infinite ;
  margin : 50% auto ;

  @keyframes spin {
    0% {transform : rotate(0deg) ;}
    100% {transform : rotate(360deg) ;}
  }
`

const Home = () => {
  return (
    <div>
      <Suspense fallback={<Loader></Loader>}>
        <Announcement />
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <SingleProduct />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
