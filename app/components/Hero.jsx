export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen bg-[#0B1120] text-white flex items-center pt-24 px-6 overflow-hidden relative"
        >

            {/* Background Glow */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <div>

                    <p className="text-purple-400 font-semibold tracking-widest uppercase mb-5">
                        Welcome to my portfolio
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Hi, I'm <br />

                        <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                            Bavya CS
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold mb-6">
                        Full Stack Web Developer
                    </h2>

                    <p className="text-gray-400 text-lg leading-8 max-w-xl mb-9">
                        I am a passionate web developer who loves creating
                        beautiful, responsive and user-friendly websites.
                        I enjoy turning creative ideas into real-world
                        digital experiences using modern web technologies.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-5">

                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/20"
                        >
                            View My Work →
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="px-8 py-4 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition duration-300"
                        >
                            Download CV ↓
                        </a>

                    </div>

                    {/* Social Links */}
                    <div className="flex gap-5 mt-10">

                        <a
                            href="https://github.com/Bavyacs"
                            target="_blank"
                            rel="noreferrer"
                            className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition"
                        >
                            GH
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-cyan-500 hover:text-cyan-400 transition"
                        >
                            in
                        </a>

                    </div>

                </div>

                {/* Right Profile Image */}
                <div className="flex justify-center items-center">

                    <div className="relative">

                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 blur-2xl opacity-30"></div>

                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-r from-purple-500 to-cyan-400">

                            <div className="w-full h-full rounded-full bg-[#111C30] border-4 border-[#0B1120] flex items-center justify-center overflow-hidden">

                                <img
                                    src="/me.jpeg"
                                    alt="Bavya profile"
                                    className="w-full h-full object-cover"
                                />

                            </div>

                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 -left-10 bg-[#17243B] border border-purple-500/40 rounded-xl px-5 py-4 shadow-xl">
                            <p className="text-purple-400 font-bold text-xl">
                                Developer
                            </p>
                            <p className="text-gray-400 text-sm">
                                Creative & Passionate
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}