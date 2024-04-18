import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Slider from "../components/Slider";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="heading">
      <h1>Welcome to Devioand Ltd.</h1>
      <Slider />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
