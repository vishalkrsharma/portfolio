import { Repository } from '@/types';
import Link from 'next/link';
import { FaLink, FaGithub } from 'react-icons/fa';
import ProjectCard from './project-card';

const getStarredRepos = async () => {
  try {
    const res = await fetch('https://api.github.com/users/vishalkrsharma/repos', {
      method: 'GET',
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();

    const repos = data.filter((repo: Repository) => repo.stargazers_count > 0);

    return repos;
  } catch (error) {
    console.log(error);
  }
};

const Projects = async () => {
  const repos = await getStarredRepos();

  return (
    <section className='space-y-12'>
      <h1 className='text-text text-xl font-semibold tracking-[.25rem]'>Projects</h1>

      {repos.map((repo: Repository) => (
        <ProjectCard
          key={repo.id}
          repo={repo}
        />
      ))}
    </section>
  );
};

export default Projects;
