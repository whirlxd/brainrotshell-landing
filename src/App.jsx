import React, { useState, useEffect } from "react";
import { Terminal, Github, Book, Code, Zap } from "lucide-react";

export default function Page() {
	const [command, setCommand] = useState("");
	const [output, setOutput] = useState([
		"Welcome to Brainrot Shell Demo",
		"Try some commands:",
		'> yap "hello world"',
	]);
	const [cursorVisible, setCursorVisible] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setCursorVisible((v) => !v);
		}, 530);
		return () => clearInterval(interval);
	}, []);

	const handleCommand = (e) => {
		e.preventDefault();
		if (!command.trim()) return;

		let response = "";
		switch (command.toLowerCase()) {
			case 'yap "hello world"':
				response = "hello world";
				break;
			case "skill issue":
				response = "sounds like a you problem tbh";
				break;
			case "fr fr":
				response = "no cap fr fr on god";
				break;
			default:
				response = "command not found (try the examples above)";
		}

		setOutput((prev) => [...prev, `> ${command}`, response]);
		setCommand("");
	};

	return (
		<div className="h-screen bg-[#23212C]  font-mono custom-scroll overflow-y-scroll">
			<nav className="border-b border-[#44475a] p-4 sticky top-0 bg-[#23212C] z-10">
				<div className="container flex items-center justify-between mx-auto">
					<div className="flex items-center gap-2">
						<Terminal className="h-6 w-6 text-[#bd93f9]" />
						<span className="font-bold text-[#F7F8F2]">Brainrot Shell</span>
					</div>
					<div className="flex gap-4">
						<a
							href="https://github.com/whirlxd/brainrot-shell"
							className="hover:text-[#bd93f9] text-[#F7F8F2] transition-colors"
						>
							GitHub
						</a>
						<a
							href="https://github.com/whirlxd/brainrot-shell#prerequisites"
							className="hover:text-[#bd93f9] text-[#F7F8F2] transition-colors"
						>
							Docs
						</a>
					</div>
				</div>
			</nav>

			<main className="container px-4 py-12 mx-auto space-y-24">
				<section className="space-y-8 text-center">
					<h1 className="text-6xl font-bold text-[#FE80BF]">Brainrot Shell</h1>
					<p className="text-[#F7F8F2] text-xl max-w-2xl mx-auto">
						Elevate your command line experience with a shell that speaks your
						language. Where &quot;echo&quot; becomes &quot;yap&quot; and every
						command matches your freak.
					</p>
					<div className="flex justify-center gap-4">
						<a
							href="#demo"
							className="bg-[#9580FF] hover:bg-[#9580FF]/80 text-[#282a36] px-4 py-2 rounded"
						>
							Get Started
						</a>

						<a
							href="https://github.com/whirlxd/brainrot-shell#installation"
							target="_blank"
							rel="noopener noreferrer"
							className="border border-[#9580FF] text-[#9580FF] hover:bg-[#bd93f9]/10 px-4 py-2 rounded"
						>
							Learn More
						</a>
					</div>
				</section>

				{/* preview*/}
				<section id="demo" className="max-w-3xl mx-auto space-y-8">
					<h2 className="text-4xl font-bold text-[#8BFF80] text-center">
						Try It Out
					</h2>
					<div className="bg-[#282a36] rounded-lg p-4 shadow-xl border border-[#6272a4]">
						<div className="flex items-center justify-between mb-2">
							<div className="flex gap-2">
								<div className="w-3 h-3 rounded-full bg-[#ff5555]" />
								<div className="w-3 h-3 rounded-full bg-[#f1fa8c]" />
								<div className="w-3 h-3 rounded-full bg-[#50fa7b]" />
							</div>
							<div className="text-[#6272a4] text-sm">brainrot-shell</div>
						</div>
						<div className="font-mono text-sm">
							{output.map((line, i) => (
								<div
									key={i}
									className={
										line.startsWith(">") ? "text-[#ff79c6]" : "text-[#FFFF80]"
									}
								>
									{line}
								</div>
							))}
							<form
								onSubmit={handleCommand}
								className="flex items-start gap-2 mt-2"
							>
								<span className="text-[#ff79c6]">{">"}</span>
								<input
									type="text"
									value={command}
									onChange={(e) => setCommand(e.target.value)}
									className="flex-1 bg-transparent outline-none"
									placeholder="Type a command..."
								/>
								<span
									className={`text-[#f8f8f2] text-left ${cursorVisible ? "opacity-100" : "opacity-0"}`}
								>
									▋
								</span>
							</form>
						</div>
					</div>
				</section>
				<section className="max-w-4xl mx-auto">
					<h2 className="text-4xl font-bold text-[#80FFEA] text-center mb-12">
						Features
					</h2>
					<div className="grid gap-8 md:grid-cols-2">
						<div className="bg-[#44475a] p-6 rounded-lg space-y-4">
							<div className="flex items-center gap-2">
								<Zap className="h-6 w-6 text-[#ffb86c]" />
								<h3 className="text-xl font-bold text-[#f8f8f2]">
									Brainrot Commands
								</h3>
							</div>
							<p className="text-[#f8f8f2] leading-relaxed">
								Why learn shell commands when you can use the language you
								already know (and hate)
							</p>
						</div>
						<div className="bg-[#44475a] p-6 rounded-lg space-y-4">
							<div className="flex items-center gap-2">
								<Code className="h-6 w-6 text-[#ff79c6]" />
								<h3 className="text-xl font-bold text-[#f8f8f2]">
									Fully Customizable
								</h3>
							</div>
							<p className="text-[#f8f8f2] leading-relaxed">
								Don&apos;t like a command? Change it! The code is open source
								and command names can be changed as per your wish
							</p>
						</div>
						<div className="bg-[#44475a] p-6 rounded-lg space-y-4">
							<div className="flex items-center gap-2">
								<Github className="h-6 w-6 text-[#bd93f9]" />
								<h3 className="text-xl font-bold text-[#f8f8f2]">
									Open Source
								</h3>
							</div>
							<p className="text-[#f8f8f2] leading-relaxed">
								Built by the community, for the community. Contribute, modify,
								and make it your own with our MIT license.
							</p>
						</div>
						<div className="bg-[#44475a] p-6 rounded-lg space-y-4">
							<div className="flex items-center gap-2">
								<Book className="h-6 w-6 text-[#50fa7b]" />
								<h3 className="text-xl font-bold text-[#f8f8f2]">
									No docs needed
								</h3>
							</div>
							<p className="text-[#f8f8f2] leading-relaxed">
								the command names have been chosen to be as intuitive as
								possible and you can always use the help command
							</p>
						</div>
					</div>
				</section>
				<section className="max-w-3xl mx-auto space-y-8">
					<h2 className="text-4xl font-bold text-[#50fa7b] text-center">
						Installation
					</h2>
					<div className="bg-[#44475a] rounded-lg p-6 space-y-4">
						<p className="text-[#f8f8f2] mb-2">
							Get up and running in no time:
						</p>
						<pre className="bg-[#282a36] p-4 rounded text-[#f8f8f2] whitespace-pre overflow-x-auto custom-scroll">
							git clone https://github.com/whirlxd/brainrot-shell.git cd
							brainrot-shell ./install.bat
						</pre>
						<div className="flex items-center justify-between mt-4">
							<div>
								<h3 className="text-xl font-bold text-[#8be9fd] mb-2">
									Prerequisites
								</h3>
								<ul className="list-disc list-inside text-[#f8f8f2]">
									<li>Windows OS</li>
									<li>Git installed</li>
									<li>Python 3.x</li>
								</ul>
							</div>

							<a
								href="https://github.com/whirlxd/brainrot-shell#installation"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-[#bd93f9] hover:bg-[#bd93f9]/80 text-[#282a36] px-4 py-2 rounded"
							>
								View Full Guide
							</a>
						</div>
					</div>
				</section>
			</main>

			<footer className="border-t border-[#44475a] py-8 mt-24">
				<div className="container mx-auto px-4 text-center text-[#6272a4]">
					<p>
						&copy; {new Date().getFullYear()} Brainrot Shell. All rights
						reserved.
					</p>
					<p className="mt-2">
						Built with ❤️ by
						<a
							href="https://whirlxd.xyz"
							className="text-[#bd93f9] hover:underline ml-2"
						>
							whirlxd
						</a>
					</p>
				</div>
			</footer>
		</div>
	);
}
