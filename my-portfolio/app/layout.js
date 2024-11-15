import { Provider } from "@/components/ui/provider";
import Navbar from "./components/Navbar"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar>
            {children}
          </Navbar>
        </Provider>
      </body>
    </html>
  );
}