import { Inter, Roboto, Poppins, Livvic, Sen } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const roboto = Roboto({ subsets: ["latin"], weight: ["900"] });
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const livvic = Livvic({ subsets: ["latin"], weight: ["400", "500", "600"] });
export const sen = Sen({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
