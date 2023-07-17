import Bot from "@/components/Bot";
import ClientOnly from "@/components/ClientOnly";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import RecoilRoot from "@/provider/RecoilRoot";
import SessionProvider from "@/provider/SessionProvider";
import ThemeProvider from "@/provider/ThemeProvider";
import ToastContainerBar from "@/provider/ToastContainerBar";
import { getServerSession } from "next-auth";
import "../styles/globals.css";

export const metadata = {
  title: "AGRG: Awesome Github Readme Generator",
  description: "Github Readme File Generator",
  icons:
    "https://dl.dropboxusercontent.com/scl/fi/n38m6skphjqktvxruhed7/5b85ea21472c504d5e2b8257fae9.png?rlkey=05tm180nt0qfxk35hxk9fisp2&dl=0",
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
          <ThemeProvider>
            <RecoilRoot>
              <ClientOnly>
                <ToastContainerBar />
                <Navbar />
                <Bot />
                {children}
                <Footer />
              </ClientOnly>
            </RecoilRoot>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
