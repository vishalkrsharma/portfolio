const getAllRepos = async () => {
  try {
    const res = await fetch('https://api.github.com/users/vishalkrsharma/repos', {
      method: 'GET',
    });

    if (!res.ok) {
      throw new Error('Internal Server Error');
    }

    const repos = await res.json();

    return repos;
  } catch (error) {
    console.log(error);
  }
};

export default getAllRepos;
