import Image from 'next/image';

const persons = [
  {
    name: 'ProFileCarft Team',
    role: 'Development Team',
    avatar: '/icons/profilecarft-logo.svg',
    github: 'https://github.com/program-animesh/profilecarft-resume-builder',
  },
];

const PersonCard = ({ children }: { children: React.ReactNode }) => (
  <div className="transition ease-in-out delay-100 duration-300 px-6 py-8 flex flex-col items-center text-center shadow hover:shadow-xl rounded-xl border-2 border-resume-50 hover:border-resume-100">
    {children}
  </div>
);

const ProfileSocial = ({ github }: { github: string }) => (
  <div className="flex gap-4">
    <a href={github} target="_blank" rel="noreferrer">
      <Image src="/icons/github.svg" alt="github" width="24" height="24" />
    </a>
  </div>
);

export default function Person() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {persons.map(({ name, role, avatar, github }) => (
        <PersonCard key={name}>
          <Image className="rounded-full" src={avatar} alt={name} width="96" height="96" />
          <div className="mt-4">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="mt-2 text-gray-500">{role}</p>
          </div>
          <div className="mt-4">
            <ProfileSocial github={github} />
          </div>
        </PersonCard>
      ))}
    </div>
  );
}
