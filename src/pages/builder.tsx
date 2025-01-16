import type { NextPage } from 'next';
import Head from 'next/head';
import BuilderLayout from '@/modules/builder/BuilderLayout';

const BuilderPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ProFileCarft: Builder</title>
        <meta name="description" content="Single Page Resume Builder" />
        <link rel="icon" type="image/svg+xml" href="/icons/profilecarft-logo.svg" />
      </Head>

      <BuilderLayout />
    </div>
  );
};

export default BuilderPage;
