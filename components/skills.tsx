const Skills = () => {
  return (
    <section className='space-y-8'>
      <h1 className='text-text text-xl font-semibold tracking-[.25rem]'>Skills</h1>
      <table className='w-full text-left space-y-20 border-separate border-spacing-4'>
        <thead>
          <tr>
            <th className='border-none align-top w-40'>Domain</th>
            <th className='border-none align-top'>Skills</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-primary text-balance text-lg w-40 align-top'>Programming Languages</td>
            <td className='text-balance text-primary text-lg align-top'>C++, Java, JavaScript, TypeScript</td>
          </tr>
          <tr>
            <td className='text-primary text-balance text-lg w-40 align-top'>Web Development</td>
            <td className='text-balance text-primary text-lg align-top'>HTML, CSS, Node.js, React.js, Express.js Next.js, Jest, Zustand, JWT</td>
          </tr>
          <tr>
            <td className='text-primary text-balance text-lg w-40 align-top'>CSS Libraries</td>
            <td className='text-balance text-primary text-lg align-top'>SCSS, TailwindCSS, Headless.ui, Shadcn.ui</td>
          </tr>
          <tr>
            <td className='text-primary text-balance text-lg w-40 align-top'>Stack</td>
            <td className='text-balance text-primary text-lg align-top'>MERN</td>
          </tr>
          <tr>
            <td className='text-primary text-balance text-lg w-40 align-top'>Databases</td>
            <td className='text-balance text-primary text-lg align-top'>PostgreSQL, MongoDB</td>
          </tr>
          <tr>
            <td className='text-primary text-balance text-lg w-40 align-top'>Tools</td>
            <td className='text-balance text-primary text-lg align-top'>Linux, Postman</td>
          </tr>
          <tr>
            <td className='text-primary text-balance text-lg w-40 align-top'>Graduation Curriculum</td>
            <td className='text-balance text-primary text-lg align-top'>
              Data Structures and Algorithms, Object Oriented Programming, Database Management Systems, Computer Networks,Computer Architecture
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Skills;
