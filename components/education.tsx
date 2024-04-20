const Education = () => {
  return (
    <section className='space-y-8'>
      <h1 className='text-text text-xl font-semibold tracking-[.25rem]'>Education</h1>
      <table className='w-full text-left space-y-20 border-separate border-spacing-4'>
        <thead>
          <tr>
            <th className='border-none align-top w-40'>Timeline</th>
            <th className='border-none align-top'>Course</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-primary text-balance text-lg w-40 align-top'>2020-present</td>
            <td className='text-balance text-primary text-lg align-top'>
              Techno International New Town
              <br />
              B.Tech in Computer Science & Engineering
            </td>
          </tr>
          <tr>
            <td className='text-primary text-balance text-lg w-40 align-top'>2008-2020</td>
            <td className='text-balance text-primary text-lg align-top'>
              Maria&apos;s Day School
              <br />
              Higher Secondary & Secondary
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Education;
