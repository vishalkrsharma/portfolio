import { ApiResponse } from '@/types/global.types';
import { MediumBlogItem } from '@/types/blog.types';

const MEDIUM_RSS_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@vishalkrsharma';

export const getBlogs = async (): Promise<ApiResponse<MediumBlogItem[]>> => {
  try {
    const res = await fetch(MEDIUM_RSS_URL, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.statusText}`);
    }

    const data = await res.json();

    if (data.status !== 'ok') {
      throw new Error('RSS feed returned non-ok status');
    }

    return {
      data: data.items ?? [],
      success: true,
      message: 'Blogs fetched successfully.',
    };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';

    return {
      data: [],
      success: false,
      message: errorMessage,
    };
  }
};
