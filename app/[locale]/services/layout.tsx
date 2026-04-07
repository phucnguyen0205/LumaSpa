import Footer from "@/components/layout/footer/page";
import Header from "@/components/layout/header/page";
import React from "react";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="services-wrapper">
        <Header />
      {children}
         <Footer />
    </div>
  );
}