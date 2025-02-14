export interface Product {
  name: string;
  price: string;
  shortDescription?: string;
  longDescription?: string;
  productCardImg: string;
  productImgs: string[];
  dimensions?: Map<string, string>;
}

