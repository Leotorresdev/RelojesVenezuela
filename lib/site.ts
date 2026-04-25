import { CatalogItem } from "@/interfaces/Catalog";

export const WHATSAPP_NUMBER = "584220183181";
const DEFAULT_WHATSAPP_TEXT =
  "Hola. Vengo de su página web y me gustaría consultar por este reloj.";

export const siteConfig = {
  brandName: "Relojes Venezuela",
  iconPath: "/icono.jpg",
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_WHATSAPP_TEXT
  )}`,
  leadFormEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "",
};

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const catalogProducts: CatalogItem[] = [
  {
    id: "modelo-1",
    name: "Curren 8106",
    price: 24.99,
    originalPrice: 30,
    imageUrl: "/modelos/modelo1.jpg",
  },
  {
    id: "modelo-2",
    name: "Curren 8374",
    price: 29.99,
    originalPrice: 36,
    imageUrl: "/modelos/modelo2.jpg",
  },
  {
    id: "modelo-3",
    name: "Poedagar 825",
    price: 24.99,
    originalPrice: 30,
    imageUrl: "/modelos/modelo3.jpg",
  },
  {
    id: "modelo-4",
    name: "Curren 8457",
    price: 25.99,
    originalPrice: 32,
    imageUrl: "/modelos/modelo4.jpg",
  },
  {
    id: "modelo-5",
    name: "Curren 8458",
    price: 24.99,
    originalPrice: 31,
    imageUrl: "/modelos/modelo5.jpg",
  },
  {
    id: "modelo-6",
    name: "Onola 3826W",
    price: 26.75,
    originalPrice: 33,
    imageUrl: "/modelos/modelo6.jpg",
  },
  {
    id: "modelo-7",
    name: "Onola 3827D",
    price: 29.99,
    originalPrice: 39,
    imageUrl: "/modelos/modelo7.jpg",
  },
  {
    id: "modelo-8",
    name: "Curren 8427",
    price: 29.99,
    originalPrice: 40,
    imageUrl: "/modelos/modelo8.jpg",
  },
  {
    id: "modelo-9",
    name: "Curren 8401",
    price: 34.99,
    originalPrice: 45,
    imageUrl: "/modelos/modelo9.jpg",
  },
  {
    id: "modelo-10",
    name: "Curren 8459",
    price: 33.99,
    originalPrice: 43,
    imageUrl: "/modelos/modelo10.jpg",
  },
  {
    id: "modelo-11",
    name: "Wlisth 6147",
    price: 19.99,
    originalPrice: 28,
    imageUrl: "/modelos/modelo11.jpg",
  },
  {
    id: "modelo-12",
    name: "Megir 8601",
    price: 34.99,
    originalPrice: 47,
    imageUrl: "/modelos/modelo12.jpg",
  },
  {
    id: "modelo-13",
    name: "Curren 8443",
    price: 34.99,
    originalPrice: 45,
    imageUrl: "/modelos/modelo13.jpg",
  },
  {
    id: "modelo-14",
    name: "Curren 8476",
    price: 27.99,
    originalPrice: 35,
    imageUrl: "/modelos/modelo14.jpg",
  },
  {
    id: "modelo-15",
    name: "Curren 8411",
    price: 27.99,
    originalPrice: 35,
    imageUrl: "/modelos/modelo15.jpg",
  },
];
