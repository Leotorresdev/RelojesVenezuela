export interface CatalogItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  variants?: { colorName: string; colorCode: string; imageUrl: string }[];
}
