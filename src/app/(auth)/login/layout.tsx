import { Metadata } from "next";
import metatagsGenerator, {
  ContentType,
} from "~/utils/formater/metatagsGenerator";

export async function generateMetadata(): Promise<Metadata> {
  return metatagsGenerator({
    title: "تسجيل الدخول",
    description:
      "تسجيل الدخول",
    imageUrl: "https://khalid-walid.netlify.app/img/world-wide-web.png",
    type: ContentType.website,
    url: `/login`,
  });
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
