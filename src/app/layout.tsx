// layout.tsx
import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import "./fonts.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Navigation from "@/components/navigation"; // Adjust the import path if necessary
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: "Stevensonchiropractic",
  description: "Your Adamstown Chiropractor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Satoshi, sans-serif', backgroundColor: '#EEEEEE', padding: '20px' }}>
        <SmoothScrolling>
          <Navigation />
          <div style={{  }}>
            {children}
          </div>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
