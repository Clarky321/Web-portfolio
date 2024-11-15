/*
import Providers from "./providers";
import Navbar from "../app/components/Navbar"
import MainPage from "./page";

export const metadata = {
  title: "My Portfolio",
  description: "Showcasing my works and posts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar>
            <main>{children}</main>
          </Navbar>
          <MainPage></MainPage>
        </Providers>
      </body>
    </html>
  );
}
*/

import { Provider } from "@/components/ui/provider";
import Navbar from "./components/Navbar";
import MainPage from "./page";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Provider>
          <Navbar>
            {children}
          </Navbar>
          <MainPage></MainPage>
        </Provider>
      </body>
    </html>
  );
}