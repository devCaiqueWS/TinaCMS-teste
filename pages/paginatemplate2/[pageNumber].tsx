import { GetStaticPaths, GetStaticProps } from 'next';
import Template2 from '../../components/Template2';

interface PageData {
  pageNumber: number;
  title: string;
  content: string[];
}

interface PageProps {
  pageData: PageData;
}

const PageTemplate2 = ({ pageData }: PageProps) => {
  return (
    <Template2
      pageNumber={pageData.pageNumber}
      title={pageData.title}
      content={pageData.content}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/content/landingPage/paginatemplate2/pages_1000_pg2.json');
  if (!res.ok) {
    throw new Error(`Failed to fetch pages: ${res.status}`);
  }
  const pages: PageData[] = await res.json();

  const paths = pages.map((page) => ({
    params: { pageNumber: page.pageNumber.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { pageNumber } = context.params!;
  const res = await fetch('http://localhost:3000/content/landingPage/paginatemplate2/pages_1000_pg2.json');
  const pages: PageData[] = await res.json();

  const pageData = pages.find((page) => page.pageNumber === parseInt(pageNumber as string, 10));

  return {
    props: {
      pageData,
    },
  };
};

export default PageTemplate2;