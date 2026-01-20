export default function Projects() {
    const projects = [
        {
            title: "Uphaar",
            category: "Full Stack (React/Node)",
            description: "Smart India Hackathon 2023. Scalable UI with robust backend integration.",
            color: "from-orange-500 to-amber-500"
        },
        {
            title: "Hacktoberfest '23",
            category: "Official Event Site",
            description: "Real-time contribution tracking via GitHub API. 100+ registrations in 24h.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Anantya",
            category: "Cultural Fest Platform",
            description: "High-performance Next.js app with Cloudinary optimizations.",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "AI Chatbot",
            category: "Machine Learning Integration",
            description: "Intelligent response interface powered by Gemini API.",
            color: "from-emerald-500 to-teal-500"
        }
    ];

    return (
        <section className="relative z-20 bg-[#121212] py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
                    Selected Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative h-96 w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-8 transition-all duration-500 hover:bg-white/10 hover:scale-[1.02]"
                        >
                            {/* Abstract Gradient Background for placeholder */}
                            <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${project.color} transition-opacity duration-500 group-hover:opacity-30`} />

                            <div className="relative z-10 flex flex-col justify-end h-full">
                                <span className="text-sm font-medium text-white/60 mb-2 uppercase tracking-widest">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-lg text-gray-300">
                                    {project.description}
                                </p>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transform -translate-x-full transition-all duration-1000 group-hover:animate-shine" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
