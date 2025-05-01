import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const LandingPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  interface PageData {
    title: string;
    content: string;
  }
  
  const [pageData, setPageData] = useState<PageData | null>(null);

  useEffect(() => {
    if (slug) {
      console.log("Slug:", slug); // Verifique o valor do slug
      const fetchPageData = async () => {
        try {
          const res = await fetch(`/content/landingPage/${slug}.json`);
          if (!res.ok) {
            throw new Error(`Erro ao buscar dados: ${res.status}`);
          }
          const data = await res.json();
          setPageData(data);
        } catch (error) {
          console.error("Erro ao buscar dados da página:", error);
        }
      };

      fetchPageData();
    }
  }, [slug]);

  if (!pageData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{pageData.title}</h1>
      <div>{pageData.content}</div>
    </div>
  );
};

export default LandingPage;
