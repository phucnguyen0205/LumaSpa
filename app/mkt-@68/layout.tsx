import React from "react";
import "../globals.css"; 

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-stone-100 antialiased min-h-screen">
      {children}
    </div>
  );
}