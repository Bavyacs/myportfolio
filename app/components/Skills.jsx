const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">

      <h2 className="text-4xl font-bold text-center mb-10">
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-5">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 px-8 py-4 rounded-lg hover:bg-purple-600 transition"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}