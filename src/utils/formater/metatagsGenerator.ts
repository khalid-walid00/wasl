import { Metadata } from "next";

export enum ContentType {
  article = 'article',
  website = 'website'
}
interface metatagsGeneratorProps {
  title: string,
  description: string,
  imageUrl: string,
  authorName?: string,
  type: ContentType,
  url: string
}
const metatagsGenerator = ({ title, description, imageUrl, authorName, type, url }: metatagsGeneratorProps) => {
  const data: Metadata = {
    title,
    description,
    authors: {
      name: authorName,
    },
    openGraph: {
      title,
      description,
      siteName: "قُمرة - Qumra",

      images: [{
        url: imageUrl,
        alt: title,
      }],
      type,
      url,
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      images: {
        url: imageUrl,
      }
    }
  }

  return data
}

export default metatagsGenerator