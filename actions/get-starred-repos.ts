import { Repository } from '@/types';

const getStarredRepos = async () => {
  try {
    const res = await fetch('https://api.github.com/users/vishalkrsharma/repos', {
      method: 'GET',
    });

    if (!res.ok) {
      throw new Error('Internal Server Error');
    }

    const data = await res.json();

    const repos = data.filter((repo: Repository) => repo.stargazers_count > 0);

    return repos;
  } catch (error) {
    console.log(error);
  }
};

export default getStarredRepos;
