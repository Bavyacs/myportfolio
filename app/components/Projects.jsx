const projects = [
  {
    title: "Jewellery Website",
    description: "A responsive jewellery shopping website using React and Tailwind CSS."
  },
  {
    title: "Green Bin",
    description: "A waste management platform for scheduling waste collection."
  },
  {
    title: "Spotify Clone",
    description: "A music streaming interface inspired by Spotify."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-950 text-white">

      <h2 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-10">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-xl hover:scale-105 transition"
          >

            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              {project.title}
            </h3>

            <p className="text-gray-400">
              {project.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}