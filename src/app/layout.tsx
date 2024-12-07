import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "~/providers/reduxProvider";
import metatagsGenerator, {
  ContentType,
} from "~/utils/formater/metatagsGenerator";
import "react-datepicker/dist/react-datepicker.css"; 
import NextTopLoader from "nextjs-toploader";
import "tippy.js/dist/tippy.css";
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
    <html lang={"ar"} dir={"rtl"}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zain:wght@200;300;400;700;800;900&display=swap"
          rel="stylesheet"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NNQBV8F9YH"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NNQBV8F9YH');
            `,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "n0o3lqheed");
            `,
          }}
        ></script>
      </head>

      <body>
        <NextTopLoader showSpinner={false} color={"#008ffb"} />
            <ReduxProvider>
              {children}
            </ReduxProvider>
      </body>
    </html>
  );
}
