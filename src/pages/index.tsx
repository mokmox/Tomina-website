import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Slider from "../components/Slider";
import Feature from "../components/Feature";
import Main from "../components/Main";
import Header from "../components/Header";
import Product from "../components/Product";
import Field from "../components/Field";
import Detail from "../components/Detail";
import Subject from "../components/Subject";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Main />
      <Field />
      <Product />
      <Feature />
      <Detail />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
