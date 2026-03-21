export default function Skills() {
  const skills = ['C', 'C++', 'JavaScript', 'Next.js', 'AI Tools']

  return (
    <section className="p-10 bg-black text-white">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <div key={i} className="px-4 py-2 bg-purple-700 rounded-full">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}