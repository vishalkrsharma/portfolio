import { GitHubRepo } from '@/types/github-repo.types';
import { ApiResponse } from '@/types/global.types';
import axios from 'axios';

export const getAllProjects = async (): Promise<ApiResponse<GitHubRepo[]>> => {
  try {
    const res = await axios(`https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_GITHUB_ACCESS_TOKEN}`,
      },
    });

    return {
      data: res.data,
      success: true,
      message: 'Repositories fetched successfully.',
    };
  } catch (error: unknown) {
    let errorMessage = 'An unknown error occurred';
    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.message || error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    return {
      data: [],
      success: false,
      message: errorMessage,
    };
  }
};
