import { usedSkills, learningSkills } from '../data';

const About = () => {
  return (
    <section id="about" className="bg-gray-800 text-white py-16 px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">O mně</h2>
        
        {/* Sekce Co používám (beze změny) */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Co používám</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {usedSkills.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <skill.icon className="text-6xl text-blue-400" />
                <span className="mt-2 text-sm font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sekce Co se učím - ZMĚNA JE ZDE */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-6">Co se učím</h3>
          <div className="grid grid-cols-4 gap-6 justify-items-center">
            {learningSkills.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <skill.icon className="text-6xl text-green-400" />
                <span className="mt-2 text-sm font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;