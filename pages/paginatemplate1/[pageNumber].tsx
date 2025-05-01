import { GetStaticPaths, GetStaticProps } from 'next';
import Template1 from '../../components/Template1';

interface PageData {
  pageNumber: number;
  title: string;
  content: string;
}

interface PageProps {
  pageData: PageData;
}

const PageTemplate1 = ({ pageData }: PageProps) => {
  return (
    <Template1
      pageNumber={pageData.pageNumber}
      title={pageData.title || `Page ${pageData.pageNumber}`}
      content={pageData.content}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/content/landingpage/paginatemplate1/pages_1000.json');
    if (!res.ok) {
        throw new Error(`Failed to fetch pages: ${res.status}`);
    }
  const pages: PageData[] = await res.json();

  const paths = pages.map((_, index) => ({
    params: { pageNumber: (index + 1).toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { pageNumber } = context.params!;
  const res = await fetch('http://localhost:3000/content/landingpage/paginatemplate1/pages_1000.json');
  const pages: PageData[] = await res.json();

  const pageData = pages[parseInt(pageNumber as string, 10) - 1];

  return {
    props: {
      pageData: {
        pageNumber: parseInt(pageNumber as string, 10),
        title: pageData.title || `Page ${pageNumber}`,
        content: pageData.content,
      },
    },
  };
};

export default PageTemplate1;