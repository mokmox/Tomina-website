import React, { FC } from 'react';

interface IProps {
  title: string;
  description: string;
  author: string;
}

const Test1: FC<IProps> = ({ title, description, author }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="text-sm font-normal">{description}</p>
      <p className="text-sm font-light">{author}</p>
    </div>
  );
};

export default Test1;
