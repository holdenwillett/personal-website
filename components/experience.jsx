export default function Experience(props) {
  const experiences = [
    {
      company: "John Deere",
      logo: "/johndeere.png",
      role: "Product Engineering Intern",
      period: "May 2026 – Present",
      location: "Silvis, IL",
      current: true,
      tags: ["MATLAB", "Simulink"],
      bullets: [
        "Apply MATLAB and Simulink to support product engineering and system modeling on an active design team.",
        "Collaborate with cross-functional engineers to contribute to product development processes.",
      ],
    },
    {
      company: "Collins Aerospace",
      logo: "/rtx.png",
      role: "Manufacturing Electrical Engineer Co-Op",
      period: "Jan 2025 – Aug 2025",
      location: "Cedar Rapids, IA",
      current: false,
      tags: ["Electrical Engineering", "Wiring Diagrams", "PDM", "SAP"],
      bullets: [
        "Contributed to a circuit board re-spin by authoring an engineering markup for a custom adapter board; collaborated with design engineers to finalize documentation.",
        "Coordinated resolution of recurring component failures with component engineers, supply chain, and vendors to drive specification updates.",
        "Troubleshot electrical systems using wiring diagrams and multimeters to identify root causes and restore system functionality.",
        "Mentored a peer engineer through task delegation and technical guidance.",
      ],
    },
    {
      company: "Casey's",
      logo: "/caseys.jpg",
      logoClass: "w-full h-full scale-150",
      role: "Software Engineer Intern",
      period: "May 2024 – Aug 2024",
      location: "Ankeny, IA",
      current: false,
      tags: ["SQL", "C#", "Azure DevOps", "Git", "Agile"],
      bullets: [
        "Developed optimized SQL queries and stored procedures to track supply chain data across 50+ stores.",
        "Supported migration of data for 2,600+ stores and 3 distribution centers to new order prediction software.",
        "Built C# solutions for data validation and business software enhancements; resolved 30+ Kanban tickets.",
        "Delivered features using Git and Azure DevOps in a trunk-based Agile/Scrum development environment.",
      ],
    },
    {
      company: "Republic Electric Company",
      logo: "/republiccompanies.jpg",
      logoClass: "w-full h-full",
      role: "Information Technology Intern",
      period: "Jun 2023 – Aug 2023",
      location: "Davenport, IA",
      current: false,
      tags: ["JavaScript", "Infor", "Microsoft 365"],
      bullets: [
        "Developed front-end features for internal business software using JavaScript and Infor.",
        "Led evaluation of a new phone system, assessing call trees, user permissions, and virtual receptionist configuration.",
        "Provided technical support and hardware maintenance for 10+ employees across servers and network systems.",
      ],
    },
  ];

  return (
    <div id={props.id} className="bg-navy-blue text-white h-auto md:px-24 md:py-12 font-mono">
      <div className="flex flex-col items-center px-6">
        <h1 className="mt-10 md:mt-0 mb-10 text-4xl font-medium">
          Career <span className="font-bold">Path</span>
        </h1>
        <div className="w-full max-w-3xl pb-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative flex mb-6">
              <div className="flex flex-col items-center mr-5 flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className={`${exp.logoClass ?? "w-10 h-10"} object-contain`}
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </div>
                {i < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-gray-600 mt-3" />
                )}
              </div>
              <div className="flex-1 bg-mist-black rounded-xl p-5 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-lg font-bold">{exp.role}</span>
                    {exp.current && (
                      <span className="badge badge-success badge-sm">Current</span>
                    )}
                  </div>
                  <span className="text-gray-400 text-sm whitespace-nowrap">{exp.period}</span>
                </div>
                <div className="text-gray-400 text-sm mb-3">
                  {exp.company} · {exp.location}
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {exp.tags.map((tag, j) => (
                    <span key={j} className="badge badge-outline badge-info text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-gray-300 text-sm flex gap-2">
                      <span className="text-blue-400 flex-shrink-0 mt-0.5">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
