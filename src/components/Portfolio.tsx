import { projects } from "../data";

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-700" text-white py-16 px-8>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all duration-300  hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-2 text-blue-400">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <span className="mt-4 inline-block text-sm text-blue-400 font-semibold">
                Zobrazit projekt &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;