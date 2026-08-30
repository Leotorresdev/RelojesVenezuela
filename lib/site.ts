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

export const catalogProductsCaballero: CatalogItem[] = [
  {
    id: "caballero-curren-8462",
    name: "Curren 8462",
    price: 39.00,
    originalPrice: 49.00,
    imageUrl: "/curren-8462-green.jpg",
    variants: [
      { colorName: "Verde", colorCode: "#008000", imageUrl: "/curren-8462-green.jpg" },
      { colorName: "Gris", colorCode: "#808080", imageUrl: "/curren-8462-grey.jpg" }
    ]
  },
  {
    id: "caballero-curren-8464",
    name: "Curren 8464",
    price: 39.00,
    originalPrice: 49.00,
    imageUrl: "/curren-8464-white.jpg",
    variants: [
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/curren-8464-white.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8464-black.jpg" }
    ]
  },
  {
    id: "caballero-curren-8461",
    name: "Curren 8461",
    price: 39.00,
    originalPrice: 49.00,
    imageUrl: "/curren-8461-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8461-black.jpg" },
      { colorName: "Verde", colorCode: "#008000", imageUrl: "/curren-8461-green.jpg" },
      { colorName: "Gris", colorCode: "#808080", imageUrl: "/curren-8461-gray.jpg" }
    ]
  },
  {
    id: "caballero-curren-8467",
    name: "Curren 8467",
    price: 34.00,
    originalPrice: 44.00,
    imageUrl: "/curren-8467-blue.jpg",
    variants: [
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/curren-8467-blue.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/curren-8467-white.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8467-black.jpg" },
      { colorName: "Verde", colorCode: "#008000", imageUrl: "/curren-8467-green.jpg" }
    ]
  },
  {
    id: "caballero-skmei-2423",
    name: "Skmei 2423",
    price: 39.00,
    originalPrice: 49.00,
    imageUrl: "/skmei-2423-gold.jpg",
    variants: [
      { colorName: "Dorado", colorCode: "#D4AF37", imageUrl: "/skmei-2423-gold.jpg" },
      { colorName: "Plateado", colorCode: "#C0C0C0", imageUrl: "/skmei-2423-silver.jpg" },
      { colorName: "Plateado-Blanco", colorCode: "#F5F5F5", imageUrl: "/skmei-2423-silver-white.jpg" }
    ]
  },
  {
    id: "caballero-skmei-2222",
    name: "Skmei 2222",
    price: 27.00,
    originalPrice: 37.00,
    imageUrl: "/skmei-2222.jpg",
    variants: []
  },
  {
    id: "caballero-chenxi-949",
    name: "Chenxi 949",
    price: 39.00,
    originalPrice: 49.00,
    imageUrl: "/chenxi-949.jpg",
    variants: []
  },
  {
    id: "caballero-curren-8465",
    name: "Curren 8465",
    price: 32.00,
    originalPrice: 42.00,
    imageUrl: "/curren-8465-blue.jpg",
    variants: [
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/curren-8465-blue.jpg" },
      { colorName: "Verde", colorCode: "#008000", imageUrl: "/curren-8465-green.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8465-black.jpg" },
      { colorName: "Gris", colorCode: "#808080", imageUrl: "/curren-8465-grey.jpg" }
    ]
  },
  {
    id: "caballero-curren-8472",
    name: "Curren 8472",
    price: 32.00,
    originalPrice: 42.00,
    imageUrl: "/curren-8472-blue.jpg",
    variants: [
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/curren-8472-blue.jpg" },
      { colorName: "Verde", colorCode: "#008000", imageUrl: "/curren-8472-green.jpg" }
    ]
  },
  {
    id: "caballero-skmei-1990",
    name: "Skmei 1990",
    price: 39.00,
    originalPrice: 49.00,
    imageUrl: "/skmei-1990.jpg",
    variants: [
      { colorName: "Plateado", colorCode: "#C0C0C0", imageUrl: "/skmei-1990.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/skmei-1990-2.jpg" }
    ]
  },
  {
    id: "caballero-skmei-2382",
    name: "Skmei 2382",
    price: 24.80,
    originalPrice: 34.80,
    imageUrl: "/skmei-2382-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/skmei-2382-black.jpg" },
      { colorName: "Dorado", colorCode: "#D4AF37", imageUrl: "/skmei-2382-gold.jpg" },
      { colorName: "Plateado", colorCode: "#C0C0C0", imageUrl: "/skmei-2382-silver.jpg" },
      { colorName: "Militar", colorCode: "#556B2F", imageUrl: "/skmei-2382-military.jpg" }
    ]
  },
  {
    id: "caballero-megir-8601",
    name: "Megir 8601",
    price: 45.00,
    originalPrice: 55.00,
    imageUrl: "/megir-8601-green.jpg",
    variants: [
      { colorName: "Verde", colorCode: "#008000", imageUrl: "/megir-8601-green.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/megir-8601-black.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/megir-8601-blue.jpg" }
    ]
  },
  {
    id: "caballero-megir-2220",
    name: "Megir 2220",
    price: 39.00,
    originalPrice: 49.00,
    imageUrl: "/megir-2220-blue.jpg",
    variants: [
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/megir-2220-blue.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/megir-2220-black.jpg" }
    ]
  },
  {
    id: "caballero-poedagar-926",
    name: "Poedagar 926",
    price: 39.00,
    originalPrice: 49.00,
    imageUrl: "/poedagar-926-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/poedagar-926-black.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/poedagar-926-white.jpg" }
    ]
  },
  {
    id: "caballero-poedagar-825-3480",
    name: "Poedagar 825",
    price: 34.80,
    originalPrice: 42,
    imageUrl: "/poedagar-825-white.jpg",
    variants: [
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/poedagar-825-white.jpg" },
      { colorName: "Verde", colorCode: "#008000", imageUrl: "/poedagar-825-green.jpg" },
      { colorName: "Dorado/Blanco", colorCode: "#D4AF37", imageUrl: "/poedagar-825-gold-white-new.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/poedagar-825-blue.jpg" },
      { colorName: "Dorado/Negro", colorCode: "#000000", imageUrl: "/poedagar-825-gold-black.jpg" },
      { colorName: "Negro", colorCode: "#222222", imageUrl: "/poedagar-825-black-new.jpg" },
      { colorName: "Dorado", colorCode: "#D4AF37", imageUrl: "/poedagar-825-gold.jpg" }
    ]
  },
  {
    id: "caballero-poedagar-930",
    name: "Poedagar 930",
    price: 28.80,
    originalPrice: 38,
    imageUrl: "/poedagar-930-white.jpg",
    variants: [
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/poedagar-930-white.jpg" },
      { colorName: "Verde", colorCode: "#008000", imageUrl: "/poedagar-930-green.jpg" }
    ]
  },
  {
    id: "caballero-nibosi-2628",
    name: "Nibosi 2628",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/nibosi-2628-blue.jpg",
    variants: [
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/nibosi-2628-blue.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/nibosi-2628-white.jpg" },
      { colorName: "Verde", colorCode: "#008000", imageUrl: "/nibosi-2628-green.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/nibosi-2628-black.jpg" }
    ]
  },
  {
    id: "caballero-curren-8388",
    name: "Curren 8388",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8388-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8388-black.jpg" },
      { colorName: "Verde", colorCode: "#008000", imageUrl: "/curren-8388-green.jpg" }
    ]
  },
  {
    id: "caballero-curren-8399",
    name: "Curren 8399",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8399-silver.jpg",
    variants: [
      { colorName: "Plateado", colorCode: "#C0C0C0", imageUrl: "/curren-8399-silver.jpg" },
      { colorName: "Marrón", colorCode: "#8B4513", imageUrl: "/curren-8399-brown.jpg" }
    ]
  },
  {
    id: "caballero-curren-8398",
    name: "Curren 8398",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8398.jpg",
    variants: []
  },
  {
    id: "caballero-curren-8402",
    name: "Curren 8402",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8402-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8402-black.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/curren-8402-blue.jpg" }
    ]
  },
  {
    id: "caballero-curren-8442",
    name: "Curren 8442",
    price: 42.00,
    originalPrice: 50,
    imageUrl: "/curren-8442-blue.jpg",
    variants: [
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/curren-8442-blue.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8442-black.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/curren-8442-white.jpg" },
      { colorName: "Rojo", colorCode: "#FF0000", imageUrl: "/curren-8442-red.jpg" },
      { colorName: "Naranja", colorCode: "#FFA500", imageUrl: "/curren-8442-orange.jpg" }
    ]
  },
  {
    id: "caballero-curren-8427",
    name: "Curren 8427",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8427-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8427-black.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/curren-8427-white.jpg" }
    ]
  },
  {
    id: "caballero-curren-8444",
    name: "Curren 8444",
    price: 30.00,
    originalPrice: 38,
    imageUrl: "/curren-8444.jpg",
    variants: []
  },
  {
    id: "caballero-curren-8452",
    name: "Curren 8452",
    price: 28.00,
    originalPrice: 38,
    imageUrl: "/curren-8452-white.jpg",
    variants: [
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/curren-8452-white.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8452-black.jpg" },
      { colorName: "Verde", colorCode: "#008000", imageUrl: "/curren-8452-green.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/curren-8452-blue.jpg" }
    ]
  },
  {
    id: "caballero-curren-8106-white",
    name: "Curren 8106 White",
    price: 29.00,
    originalPrice: 38,
    imageUrl: "/curren-8106.jpg",
    variants: [
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/curren-8106.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8106-black.jpg" }
    ]
  },
  {
    id: "caballero-curren-8322",
    name: "Curren 8322",
    price: 30.00,
    originalPrice: 38,
    imageUrl: "/curren-8322.jpg",
    variants: []
  },
  {
    id: "caballero-curren-8314",
    name: "Curren 8314",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8314.jpg",
    variants: []
  },
  {
    id: "caballero-curren-8291",
    name: "Curren 8291",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8291-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8291-black.jpg" },
      { colorName: "Marrón Claro", colorCode: "#D2B48C", imageUrl: "/curren-8291-light-brown.jpg" },
      { colorName: "Marrón Oscuro", colorCode: "#654321", imageUrl: "/curren-8291-dark-brown.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/curren-8291-blue.jpg" },
      { colorName: "Celeste", colorCode: "#87CEEB", imageUrl: "/curren-8291-sky-blue.jpg" }
    ]
  },
  {
    id: "caballero-curren-8329",
    name: "Curren 8329",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8329.jpg",
    variants: []
  },
  {
    id: "caballero-curren-8324",
    name: "Curren 8324",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8324.jpg",
    variants: []
  },
  {
    id: "caballero-curren-8346",
    name: "Curren 8346",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8346.jpg",
    variants: []
  },
  {
    id: "caballero-curren-8375",
    name: "Curren 8375",
    price: 34.99,
    originalPrice: 44,
    imageUrl: "/curren-8375.jpg",
    variants: []
  },
  {
    id: "caballero-curren-8384",
    name: "Curren 8384",
    price: 39.00,
    originalPrice: 48,
    imageUrl: "/curren-8384-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-8384-black.jpg" },
      { colorName: "Marrón", colorCode: "#8B4513", imageUrl: "/curren-8384-brown.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/curren-8384-blue.jpg" }
    ]
  },
  {
    id: "caballero-poedagar-613-silver-case-leather",
    name: "Poedagar 613 silver case leather",
    price: 24.00,
    originalPrice: 30,
    imageUrl: "/poedagar-613-silver-case-blue-leather.jpg",
    variants: [
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/poedagar-613-silver-case-blue-leather.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/poedagar-613-silver-case-black-leather.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/poedagar-613-silver-case-white-leather.jpg" }
    ]
  },
  {
    id: "caballero-poedagar-613-rose-gold",
    name: "Poedagar 613 rose gold",
    price: 32.00,
    originalPrice: 40,
    imageUrl: "/poedagar-613-rose-gold-black.jpg",
    variants: [
      { colorName: "Oro Rosa/Negro", colorCode: "#000000", imageUrl: "/poedagar-613-rose-gold-black.jpg" },
      { colorName: "Oro Rosa/Azul", colorCode: "#1E3A8A", imageUrl: "/poedagar-613-rose-gold-blue.jpg" }
    ]
  },
  {
    id: "caballero-poedagar-928-leather-silver",
    name: "Poedagar 928 Leather",
    price: 36.00,
    originalPrice: 45,
    imageUrl: "/poedagar-928-leather-black-silver.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/poedagar-928-leather-black-silver.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/poedagar-928-leather-case-silver-blue.jpg" }
    ]
  },
  {
    id: "caballero-poedagar-928-leather-black",
    name: "Poedagar 928 Leather Black",
    price: 36.00,
    originalPrice: 45,
    imageUrl: "/poedagar-928-leather-case-black-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/poedagar-928-leather-case-black-black.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/poedagar-928-leather-black-blue.jpg" }
    ]
  },
  {
    id: "caballero-poedagar-825-monocolor",
    name: "Poedagar 825",
    price: 32.00,
    originalPrice: 40,
    imageUrl: "/poedagar-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/poedagar-black.jpg" },
      { colorName: "Dorado", colorCode: "#D4AF37", imageUrl: "/poedagar-825-gold.jpg" }
    ]
  },
  {
    id: "caballero-poedagar-825",
    name: "Poedagar 825",
    price: 34.00,
    originalPrice: 40,
    imageUrl: "/poedagar-825-gold-white.jpg",
    variants: [
      { colorName: "Dorado/Blanco", colorCode: "#FFFFFF", imageUrl: "/poedagar-825-gold-white.jpg" },
      { colorName: "Dorado/Verde", colorCode: "#14532D", imageUrl: "/poedagar-825-gold-green.jpg" },
      { colorName: "Dorado/Azul", colorCode: "#1E3A8A", imageUrl: "/poedagar-825-gold-blue.jpg" },
      { colorName: "Dorado/Negro", colorCode: "#000000", imageUrl: "/poedagar-825-gold-black.jpg" }
    ]
  },
  {
    id: "caballero-poedagar-893",
    name: "Poedagar 893",
    price: 35.00,
    originalPrice: 45,
    imageUrl: "/poedagar-893-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/poedagar-893-black.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/poedagar-893-white.jpg" }
    ]
  },
  {
    id: "caballero-poedagar-928",
    name: "Poedagar 928",
    price: 35.00,
    originalPrice: 45,
    imageUrl: "/poedagar-928-silver-black.jpg",
    variants: [
      { colorName: "Plata/Negro", colorCode: "#333333", imageUrl: "/poedagar-928-silver-black.jpg" }
    ]
  },
  {
    id: "caballero-poedagar-613-leather",
    name: "Poedagar 613 Leather",
    price: 28.00,
    originalPrice: 35,
    imageUrl: "/poedagar-613-leather-green.jpg",
    variants: [
      { colorName: "Verde", colorCode: "#14532D", imageUrl: "/poedagar-613-leather-green.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/poedagar-613-leather-blue.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/poedagar-613-leather-white.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/poedagar-613-leather-black.jpg" }
    ]
  },
  {
    id: "caballero-poedagar-613",
    name: "Poedagar 613",
    price: 29.60,
    originalPrice: 35,
    imageUrl: "/poedagar-613-white.jpg",
    variants: [
      { colorName: "Blanco", colorCode: "#FFFFFF", imageUrl: "/poedagar-613-white.jpg" },
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/poedagar-613-black.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/poedagar-613-blue.jpg" },
      { colorName: "Verde", colorCode: "#14532D", imageUrl: "/poedagar-613-green.jpg" }
    ]
  },
  {
    id: "caballero-1",
    name: "Curren 8106",
    price: 24.99,
    originalPrice: 30,
    imageUrl: "/modelos/caballero/modelo1.jpg",
  },
  {
    id: "caballero-2",
    name: "Curren 8374",
    price: 29.99,
    originalPrice: 36,
    imageUrl: "/modelos/caballero/modelo2.jpg",
  },
  {
    id: "caballero-3",
    name: "Poedagar 825",
    price: 24.99,
    originalPrice: 30,
    imageUrl: "/modelos/caballero/modelo3.jpg",
  },
  {
    id: "caballero-4",
    name: "Curren 8457",
    price: 25.99,
    originalPrice: 32,
    imageUrl: "/modelos/caballero/modelo4.jpg",
  },
  {
    id: "caballero-5",
    name: "Curren 8458",
    price: 24.99,
    originalPrice: 31,
    imageUrl: "/modelos/caballero/modelo5.jpg",
  },
  {
    id: "caballero-6",
    name: "Onola 3826W",
    price: 26.75,
    originalPrice: 33,
    imageUrl: "/modelos/caballero/modelo6.jpg",
  },
  {
    id: "caballero-7",
    name: "Onola 3827D",
    price: 29.99,
    originalPrice: 39,
    imageUrl: "/modelos/caballero/modelo7.jpg",
  },
  {
    id: "caballero-8",
    name: "Curren 8427",
    price: 29.99,
    originalPrice: 40,
    imageUrl: "/modelos/caballero/modelo8.jpg",
  },
  {
    id: "caballero-9",
    name: "Curren 8401",
    price: 34.99,
    originalPrice: 45,
    imageUrl: "/modelos/caballero/modelo9.jpg",
  },
  {
    id: "caballero-10",
    name: "Curren 8459",
    price: 33.99,
    originalPrice: 43,
    imageUrl: "/modelos/caballero/modelo10.jpg",
  },
  {
    id: "caballero-11",
    name: "Wlisth 6147",
    price: 19.99,
    originalPrice: 28,
    imageUrl: "/modelos/caballero/modelo11.jpg",
  },
  {
    id: "caballero-12",
    name: "Megir 8601",
    price: 34.99,
    originalPrice: 47,
    imageUrl: "/modelos/caballero/modelo12.jpg",
  },
  {
    id: "caballero-13",
    name: "Curren 8443",
    price: 34.99,
    originalPrice: 45,
    imageUrl: "/modelos/caballero/modelo13.jpg",
  },
  {
    id: "caballero-14",
    name: "Curren 8476",
    price: 27.99,
    originalPrice: 35,
    imageUrl: "/modelos/caballero/modelo14.jpg",
  },
  {
    id: "caballero-15",
    name: "Curren 8411",
    price: 27.99,
    originalPrice: 35,
    imageUrl: "/modelos/caballero/modelo15.jpg",
  },
  {
    id: "caballero-16",
    name: "Curren 8442",
    price: 33.99,
    originalPrice: 44,
    imageUrl: "/modelos/caballero/modelo16.jpg",
  },
  {
    id: "caballero-17",
    name: "Poedagar 827",
    price: 22.40,
    originalPrice: 30,
    imageUrl: "/modelos/caballero/modelo17.jpg",
  },
  {
    id: "caballero-18",
    name: "Curren 8437",
    price: 29.99,
    originalPrice: 37,
    imageUrl: "/modelos/caballero/modelo18.jpg",
  },
  {
    id: "caballero-19",
    name: "Onola 3827W",
    price: 26.74,
    originalPrice: 33,
    imageUrl: "/modelos/caballero/modelo19.jpg",
  },
  {
    id: "caballero-20",
    name: "Curren 8438",
    price: 31.99,
    originalPrice: 37,
    imageUrl: "/modelos/caballero/modelo20.jpg",
  },
  {
    id: "caballero-21",
    name: "Curren 8471",
    price: 28.99,
    originalPrice: 34,
    imageUrl: "/modelos/caballero/modelo21.jpg",
  },
  {
    id: "caballero-22",
    name: "Curren 8473",
    price: 23.99,
    originalPrice: 30,
    imageUrl: "/modelos/caballero/modelo22.jpg",
  },
  {
    id: "caballero-23",
    name: "Curren 8406",
    price: 26.99,
    originalPrice: 34,
    imageUrl: "/modelos/caballero/modelo23.jpg",
  },
  {
    id: "caballero-24",
    name: "Curren 8435",
    price: 32.99,
    originalPrice: 40,
    imageUrl: "/modelos/caballero/modelo24.jpg",
  },
  {
    id: "caballero-25",
    name: "Curren 8452",
    price: 23.99,
    originalPrice: 29,
    imageUrl: "/modelos/caballero/modelo25.jpg",
  },
  {
    id: "caballero-26",
    name: "Curren 8375",
    price: 26.99,
    originalPrice: 35,
    imageUrl: "/modelos/caballero/modelo26.jpg",
  },
  {
    id: "caballero-27",
    name: "Curren 8365",
    price: 25.99,
    originalPrice: 32,
    imageUrl: "/modelos/caballero/modelo27.jpg",
  },
  {
    id: "caballero-28",
    name: "Curren 8472",
    price: 25.99,
    originalPrice: 32,
    imageUrl: "/modelos/caballero/modelo28.jpg",
  },
];

export const catalogProductsDamas: CatalogItem[] = [
  {
    id: "dama-curren-9079",
    name: "Curren 9079",
    price: 29.00,
    originalPrice: 39.00,
    imageUrl: "/curren-9079.jpg",
    variants: []
  },
  {
    id: "dama-curren-9072",
    name: "Curren 9072",
    price: 32.00,
    originalPrice: 42.00,
    imageUrl: "/curren-9072.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-9072.jpg" },
      { colorName: "Rosado", colorCode: "#FFC0CB", imageUrl: "/curren-9072-pink.jpg" }
    ]
  },
  {
    id: "dama-curren-9093",
    name: "Curren 9093",
    price: 29.00,
    originalPrice: 39.00,
    imageUrl: "/curren-9093.jpg",
    variants: []
  },
  {
    id: "dama-curren-9067-gold",
    name: "Curren 9067",
    price: 29.00,
    originalPrice: 39.00,
    imageUrl: "/curren-9067-gold.jpg",
    variants: [
      { colorName: "Dorado", colorCode: "#D4AF37", imageUrl: "/curren-9067-gold.jpg" },
      { colorName: "Oro Rosa", colorCode: "#B76E79", imageUrl: "/curren-9067-gold-pink.jpg" }
    ]
  },
  {
    id: "dama-curren-9024-black",
    name: "Curren 9024 Black",
    price: 29.00,
    originalPrice: 39.00,
    imageUrl: "/curren-9024-black.jpg",
    variants: [
      { colorName: "Negro", colorCode: "#000000", imageUrl: "/curren-9024-black.jpg" }
    ]
  },
  {
    id: "dama-curren-9051",
    name: "Curren 9051",
    price: 29.00,
    originalPrice: 39.00,
    imageUrl: "/curren-9051.jpg",
    variants: [
      { colorName: "Dorado", colorCode: "#D4AF37", imageUrl: "/curren-9051.jpg" },
      { colorName: "Rosado", colorCode: "#FFC0CB", imageUrl: "/curren-9051-pink.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", imageUrl: "/curren-9051-blue.jpg" }
    ]
  },
  {
    id: "dama-1",
    name: "Curren 9095",
    price: 19.99,
    originalPrice: 27,
    imageUrl: "/modelos/dama/dama1.jpg",
  },
  {
    id: "dama-2",
    name: "Curren 9101",
    price: 24.99,
    originalPrice: 29,
    imageUrl: "/modelos/dama/dama2.jpg",
  },
  {
    id: "dama-3",
    name: "Curren 9109",
    price: 22.99,
    originalPrice: 28,
    imageUrl: "/modelos/dama/dama3.jpg",
  },
  {
    id: "dama-4",
    name: "Curren 9104",
    price: 19.99,
    originalPrice: 26,
    imageUrl: "/modelos/dama/dama4.jpg",
  },
  {
    id: "dama-5",
    name: "Curren 9088",
    price: 20.99,
    originalPrice: 27,
    imageUrl: "/modelos/dama/dama5.jpg",
  },
  {
    id: "dama-6",
    name: "Curren 9111",
    price: 23.99,
    originalPrice: 29,
    imageUrl: "/modelos/dama/dama6.jpg",
  },
  {
    id: "dama-7",
    name: "Curren 9096",
    price: 24.99,
    originalPrice: 29,
    imageUrl: "/modelos/dama/dama7.jpg",
  },
  {
    id: "dama-8",
    name: "Curren 9090",
    price: 19.99,
    originalPrice: 26,
    imageUrl: "/modelos/dama/dama8.jpg",
  },
  {
    id: "dama-9",
    name: "Curren 9099",
    price: 21.99,
    originalPrice: 28,
    imageUrl: "/modelos/dama/dama9.jpg",
  },
  {
    id: "dama-10",
    name: "Curren 8439",
    price: 24.99,
    originalPrice: 29,
    imageUrl: "/modelos/dama/dama10.jpg",
  },
  {
    id: "dama-11",
    name: "Poedagar 708",
    price: 23.45,
    originalPrice: 29,
    imageUrl: "/modelos/dama/dama11.jpg",
  },
  {
    id: "dama-12",
    name: "Curren 9094",
    price: 19.99,
    originalPrice: 26,
    imageUrl: "/modelos/dama/dama12.jpg",
  },
  {
    id: "dama-13",
    name: "Curren 9072",
    price: 24.99,
    originalPrice: 30,
    imageUrl: "/modelos/dama/dama13.jpg",
  },
  {
    id: "dama-14",
    name: "Curren 9106",
    price: 19.99,
    originalPrice: 27,
    imageUrl: "/modelos/dama/dama14.jpg",
  },
  {
    id: "dama-15",
    name: "Curren 9103",
    price: 22.75,
    originalPrice: 29,
    imageUrl: "/modelos/dama/dama15.jpg",
  },
  {
    id: "dama-16",
    name: "Curren 9068",
    price: 20.99,
    originalPrice: 27,
    imageUrl: "/modelos/dama/dama16.jpg",
  },
  {
    id: "dama-17",
    name: "Curren 9100",
    price: 24.99,
    originalPrice: 30,
    imageUrl: "/modelos/dama/dama17.jpg",
  },
];
