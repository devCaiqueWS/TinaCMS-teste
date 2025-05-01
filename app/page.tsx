import Image from "next/image";
import image1 from "../public/images/paginatemplate1.jpeg";
import image2 from "../public/images/paginatemplate2.png";

export default function Home() {
  const totalPages = 2000;
  const links = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center min-h-screen p-8 sm:p-20">

      <h1 className="text-4xl font-bold mb-8 text-center">
        Landing Page - Templates
      </h1>
      <p className="text-lg mb-8 text-center">
        Clique nos links abaixo para acessar as páginas de cada template.
      </p>

      {/* Listas lado a lado com imagens acima */}
      <div className="flex justify-between w-full max-w-5xl">
        {/* Primeira lista */}
        <div className="flex-1 flex flex-col items-center">
          <Image
            src={image1}
            alt="Template 1"
            width={500}
            height={100}
            priority
            className="mb-4" // Adiciona margem inferior
          />
          <h2 style={{ fontWeight: 'bold', fontSize: '30px', margin: '15px' }}> Template 1 </h2>
          <ul className="list-decimal list-inside text-sm text-purple-700">
            {links.slice(0, totalPages / 2).map((page) => (
              <li key={page}>
                <a
                  href={`/paginatemplate1/${page}`}
                  className="hover:underline"
                >
                  /paginatemplate1/{page}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Segunda lista */}
        <div className="flex-1 flex flex-col items-center">
          <Image
            src={image2}
            alt="Template 2"
            width={700}
            height={100}
            priority
            className="mb-4" // Adiciona margem inferior
          />
          <h2 style={{ fontWeight: 'bold', fontSize: '30px', margin: '15px' }}> Template 2 </h2>
          <ul className="list-decimal list-inside text-sm text-purple-700">
            {links.slice(totalPages / 2, totalPages).map((page, index) => (
              <li key={page}>
                <a
                  href={`/paginatemplate2/${index + 1}`}
                  className="hover:underline"
                >
                  /paginatemplate2/{index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
