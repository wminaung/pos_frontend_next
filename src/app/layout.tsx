import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { getServerSession } from "next-auth";
import BaseLayout from "@/components/layouts/base-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession();

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <BaseLayout session={session}>{children}</BaseLayout>
            </body>
        </html>
    );
}
