import { Inter } from "next/font/google";
import "./globals.css";
import SidebarAdmin from "@/components/AdminComponents/SidebarAdmin";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SmartStay | Admin Portal",
  description: "Hotel management portal for admins ",
  icons: "/smartlogo.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row gap-4 h-screen w-screen bg-gray-500">
          <SidebarAdmin/>
          <div className="w-full">
          {children}
          </div>
        
        </div>
        
        </body>
    </html>
  );
}
