import { allowPages } from "~/config/constant";
type PagePath = {
  title: string;
}
const protectedRoutes = (pages: PagePath[], pathAfterAppName: string): boolean => {
  const allowedTitles = pages?.map((item: PagePath) => item.title) || [];
  const allowedPaths = allowedTitles.map((title: string) => allowPages[title] || '');

  const isPathInAllowedPages = Object.values(allowPages).includes(pathAfterAppName);
  const isPathInPages = allowedPaths.some((path: string) => pathAfterAppName === path);

  return isPathInPages || !isPathInAllowedPages;
};


export default protectedRoutes;