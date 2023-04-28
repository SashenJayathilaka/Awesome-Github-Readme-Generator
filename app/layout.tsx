import Bot from "@/components/Bot";
import ClientOnly from "@/components/ClientOnly";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import RecoilRoot from "@/provider/RecoilRoot";
import SessionProvider from "@/provider/SessionProvider";
import ToastContainerBar from "@/provider/ToastContainerBar";
import { getServerSession } from "next-auth";
import "../styles/globals.css";

export const metadata = {
  title: "Readme Generator",
  description: "Github Readme File Generator",
  icons: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <RecoilRoot>
            <ClientOnly>
              <Navbar />
              <ToastContainerBar />
              <Bot />
              {children}
              <Footer />
            </ClientOnly>
          </RecoilRoot>
        </SessionProvider>
      </body>
    </html>
  );
}
