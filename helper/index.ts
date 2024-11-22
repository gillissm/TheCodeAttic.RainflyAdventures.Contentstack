import { addEditableTags } from "@contentstack/utils";
import { Page, BlogPosts } from "../typescript/pages";
import getConfig from "next/config";
import { FooterProps, HeaderProps } from "../typescript/layout";
import { getEntry, getEntryByUrl } from "../contentstack-sdk";

// UTIL TYPE FILE TO CENTRALIZE THE CALLS TO CONTENTSTACK API

// TODO: UPDATE AND ADD AS REQUIRED


const { publicRuntimeConfig } = getConfig();
const envConfig = process.env.CONTENTSTACK_API_KEY
  ? process.env
  : publicRuntimeConfig;

const liveEdit = envConfig.CONTENTSTACK_LIVE_EDIT_TAGS === "true";



// export const getHeaderRes = async (): Promise<HeaderProps> => {
//   const response = (await getEntry({
//     contentTypeUid: "header",
//     referenceFieldPath: ["top_level_navigation.navigation_items.internal_link.link_target",
//       "top_level_navigation.navigation_items.external_link.target",
//       "top_level_navigation.navigation_items.sub_menu.sub_menu_reference",
//     "top_level_navigation.menu"],
//     jsonRtePath: ["notification_bar.announcement_text"],
//   })) as HeaderProps[][];

//   liveEdit && addEditableTags(response[0][0], "header", true);
//   console.log(JSON.stringify(response[0][0]));
//   //console.log(response[0][0].top_level_navigation[1].navigation_items);
//   //console.log(response[0][0].top_level_navigation[1].navigation_items[2].sub_menu.sub_menu_reference[0].navigation_items[0].internal_link.link_target);
//   return response[0][0];
// };

// export const getFooterRes = async (): Promise<FooterProps> => {
//   const response = (await getEntry({
//     contentTypeUid: "footer",
//     referenceFieldPath: undefined,
//     jsonRtePath: ["copyright"],
//   })) as FooterProps[][];
//   liveEdit && addEditableTags(response[0][0], "footer", true);
//   return response[0][0];
// };

// export const getAllEntries = async (): Promise<Page[]> => {
//   const response = (await getEntry({
//     contentTypeUid: "content_page",
//     referenceFieldPath: undefined,
//     jsonRtePath: undefined,
//   })) as Page[][];
//   liveEdit &&
//     response[0].forEach((entry) => addEditableTags(entry, "page", true));
//   return response[0];
// };

// export const getPageRes = async (entryUrl: string): Promise<Page> => {
//   const response = (await getEntryByUrl({
//     contentTypeUid: "page",
//     entryUrl,
//     referenceFieldPath: ["page_components.from_blog.featured_blogs"],
//     jsonRtePath: [
//       "page_components.from_blog.featured_blogs.body",
//       "page_components.section_with_buckets.buckets.description",
//       "page_components.section_with_html_code.description",
//     ],
//   })) as Page[];
//   liveEdit && addEditableTags(response[0], "page", true);
//   return response[0];
// };

// export const getBlogListRes = async (): Promise<BlogPosts[]> => {
//   const response = (await getEntry({
//     contentTypeUid: "blog_post",
//     referenceFieldPath: ["author", "related_post"],
//     jsonRtePath: ["body"],
//   })) as BlogPosts[][];
//   liveEdit &&
//     response[0].forEach((entry) => addEditableTags(entry, "blog_post", true));
//   return response[0];
// };

// export const getBlogPostRes = async (entryUrl: string): Promise<BlogPosts> => {
//   const response = (await getEntryByUrl({
//     contentTypeUid: "blog_post",
//     entryUrl,
//     referenceFieldPath: ["author", "related_post"],
//     jsonRtePath: ["body", "related_post.body"],
//   })) as BlogPosts[];
//   liveEdit && addEditableTags(response[0], "blog_post", true);
//   return response[0];
// };
