import { JSXElementConstructor, ReactElement } from "react";

export interface IBlogListingData {
    id: number,
    title: string,
    slug: string,
    description: string,
    date: string,
    modified: string,
    tags: string[],
    read: string,
    
}

export interface IBlogPost  {
  meta: {
    title: string;
    slug: string;
    date:string;
    read:string;
  };
  content: ReactElement<any, string | JSXElementConstructor<any>>,
};