import type React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative overflow-hidden py-8 lg:py-12">
      <div className="container mx-auto max-w-8xl px-8">{children}</div>
    </div>
  );
}
