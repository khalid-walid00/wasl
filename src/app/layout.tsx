import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "~/providers/reduxProvider";
import metatagsGenerator, {
  ContentType,
} from "~/utils/formater/metatagsGenerator";
import "react-datepicker/dist/react-datepicker.css"; 
import NextTopLoader from "nextjs-toploader";
import "tippy.js/dist/tippy.css";
import GlobalRedirect from "~/features/redirect";
export const metadata: Metadata = metatagsGenerator({
  title: "الصفحة الرئيسية",
  description: `وصف`,
  imageUrl: "",
  type: ContentType.website,
  url: `https://khalid-walid.netlify.app`,
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"} dir={"ltr"}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zain:wght@200;300;400;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <NextTopLoader showSpinner={false} color={"#008ffb"} />
            <ReduxProvider>
            <GlobalRedirect/>
              {children}
            </ReduxProvider>
      </body>
    </html>
  );
}
