import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "Piu Cabin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by Piu Cabin</footer>
      </body>
    </html>
  );
}
