export default function About() {
    const experiences = [
        {
            company: "BrainChain",
            role: "Frontend Development Intern",
            period: "Jul 2025 – Oct 2025",
            location: "Pune, India",
            desc: [
                "Translated Figma designs into React.js/MaterialUI apps.",
                "Built reusable component-based UI structures.",
                "Collaborated with UI teams for responsive, consistent experiences."
            ]
        }
    ];

    const education = [
        {
            school: "Pimpri Chinchwad College Of Engineering",
            degree: "B.Tech in Computer Engineering",
            period: "Aug 2021 – July 2025",
            location: "Maharashtra, India"
        },
        {
            school: "CLG Institute",
            degree: "Intermediate (Class XII)",
            period: "March 2021",
            location: "Rajasthan, India"
        }
    ];

    const skills = [
        "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js",
        "Tailwind CSS", "Node.js", "Express", "MongoDB",
        "Java", "C++", "Python", "SQL", "Git/GitHub"
    ];

    const awards = [
        "1st Place: Design X (UI/UX Competition) - 2022",
        "Finalist: Smart India Hackathon - 2023",
        "Event Lead: Webbit (Anantya Techfest) - 2024"
    ];

    return (
        <section className="relative z-20 bg-[#121212] py-24 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Left Column: Experience & Education */}
                <div>
                    <h3 className="text-3xl font-bold text-white mb-8">Experience</h3>
                    <div className="space-y-12">
                        {experiences.map((exp, i) => (
                            <div key={i} className="relative pl-8 border-l border-white/20">
                                <div className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-blue-500" />
                                <span className="block text-sm text-gray-400 mb-1">{exp.period} | {exp.location}</span>
                                <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                                <p className="text-blue-400 mb-4">{exp.company}</p>
                                <ul className="list-disc list-outside ml-4 space-y-2 text-gray-300 text-sm">
                                    {exp.desc.map((d, j) => (
                                        <li key={j}>{d}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-8 mt-16">Education</h3>
                    <div className="space-y-8">
                        {education.map((edu, i) => (
                            <div key={i}>
                                <span className="block text-sm text-gray-400 mb-1">{edu.period}</span>
                                <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                                <p className="text-gray-400">{edu.school}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Skills & Awards */}
                <div>
                    <h3 className="text-3xl font-bold text-white mb-8">Technical Arsenel</h3>
                    <div className="flex flex-wrap gap-3 mb-16">
                        {skills.map((skill, i) => (
                            <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-8">Recognition</h3>
                    <ul className="space-y-4">
                        {awards.map((award, i) => (
                            <li key={i} className="flex items-start text-gray-300">
                                <span className="mr-3 text-yellow-500">★</span>
                                {award}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10">
                        <h4 className="text-2xl font-bold text-white mb-2">Let's Connect</h4>
                        <div className="space-y-2 text-gray-300">
                            <p>📍 Pune, Maharashtra, India</p>
                            <p>📧 <a href="mailto:tarunrathod00805@gmail.com" className="hover:text-white transition-colors">tarunrathod00805@gmail.com</a></p>
                            <p>📞 +91-9145338750</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
