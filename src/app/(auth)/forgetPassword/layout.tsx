import { Metadata } from "next";
import metatagsGenerator, {
  ContentType,
} from "~/utils/formater/metatagsGenerator";

export async function generateMetadata(): Promise<Metadata> {
  return metatagsGenerator({
    title: " تغيير كلمة المرور- ",
    description:
      " لسد احتياجات شركتك , بدءاً من تخطيط موارد المؤسسات وحتى إدارة علاقات العملاء والتجارة الإلكترونية ونظام إدارة المحتوى. ارتقِ بعملك إلى المستوى التالي",
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
