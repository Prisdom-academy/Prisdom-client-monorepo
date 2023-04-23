import Head from 'next/head';

interface IPrisdomHeadProps {
  title?: string;
}

const PrisdomHead = (props: IPrisdomHeadProps) => {
  const { title = 'Prisdom gateway' } = props;

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default PrisdomHead;
