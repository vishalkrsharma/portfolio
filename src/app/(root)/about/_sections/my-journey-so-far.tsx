import { sanityFetch } from '@/sanity/lib/live';
import { EXP_QUERY } from '@/sanity/lib/queries';
import { Exp } from '@/types/sanity.types';

const MyJourneySoFar = async () => {
  const {
    data: exps,
  }: {
    data: Exp[];
  } = await sanityFetch({ query: EXP_QUERY });

  return (
    <div className='space-y-4'>
      <h2 className='font-doto text-3xl'>My Journey So Far</h2>
      <ul className='space-y-3'>
        {exps.map((exp) => (
          <li
            key={exp._id}
            className='space-y-1'
          >
            <h3 className='text-lg font-semibold'>{exp.companyName}</h3>
            <p className='text-muted-foreground'>
              {exp.role} | {exp.startDate} - {exp.isPresent ? 'Present' : exp.endDate}
            </p>
            <ul className='list-disc ml-4 space-y-0.5 text-muted-foreground/80'>
              {exp.description.map((block) => (
                <li key={block._key}>{block.children.map((span) => span.text).join('')}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyJourneySoFar;
