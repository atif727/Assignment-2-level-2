export type variant ={
  type: string;
  value:string;
}
export type KB = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: variant[];
  inventory: {
    quantity: number;
    inStock: boolean;
  };
};

export default KB;
