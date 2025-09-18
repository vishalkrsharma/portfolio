import { GitHubRepo } from '@/types/github-repo.types';
import { ApiResponse } from '@/types/global.types';
import axios from 'axios';

export const getAllProjects = async (): Promise<ApiResponse<GitHubRepo[]>> => {
  try {
    const res = await axios(`https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
      },
    });

    return {
      data: res.data,
      success: true,
      message: 'Repositories fetched successfully.',
    };
  } catch (error: any) {
    return {
      data: [],
      success: false,
      message: error?.message || error?.response?.data?.message,
    };
  }
};
