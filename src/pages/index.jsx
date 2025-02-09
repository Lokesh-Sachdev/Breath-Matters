import Homebody from "@/components/Homebody";
import { Nunito, Spectral_SC } from "next/font/google";

export const spectralSC = Spectral_SC({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-spectral",
});

export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export default function Home() {
  return (
    <div className={`${nunito.className} ${spectralSC.variable}`}>
      <Homebody />
    </div>
  );
}
