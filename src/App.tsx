import React, { useState } from "react";
import {
	Tv,
	CheckCircle,
	Twitter,
	MessageCircle,
	Shield,
	X,
} from "lucide-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

function CustomWalletButton() {
	const { connected } = useWallet();
	return (
		<WalletMultiButton className="!bg-[#FF6B2C] hover:!bg-[#E55A1F] transition-colors">
			{connected ? "Connect wallet" : "Connect wallet"}
		</WalletMultiButton>
	);
}

function App() {
	const [showModal, setShowModal] = useState(false);
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Email submitted:", email);
		setSubmitted(true);
		setTimeout(() => {
			setShowModal(false);
			setSubmitted(false);
			setEmail("");
		}, 2000);
	};

	return (
		<div className="min-h-screen bg-black text-white">
			{/* Navigation */}
			<nav className="w-[90%] md:w-[70%] mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
				<div className="flex items-center space-x-2">
					<img
						src="/logo-main.png"
						alt="Lumens Logo"
						className="w-24 h-10 lg:w-40 lg:h-10"
					/>
					{/* <span className="text-lg md:text-xl font-bold">Lumens</span> */}
				</div>
				<CustomWalletButton />
			</nav>

			{/* Main content */}
			<main className="w-[90%] md:w-[70%] mx-auto px-4 text-center mt-12 md:mt-20">
				<h1 className="h-24 text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
					Deploy AI Agents with Ease
				</h1>
				<p className="mt-4 md:mt-6 text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
					Create, manage, and scale your AI personalities effortlessly. Bring
					your Lumens to life with our cutting-edge deployment platform.
				</p>
				<div className="mt-8 md:mt-10 flex flex-col md:flex-row justify-center gap-3 md:gap-4">
					<button
						onClick={() => setShowModal(true)}
						className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-sm md:text-base"
					>
						Create New Lumen
					</button>
					<button className="px-6 py-3 border border-purple-500 rounded-lg hover:bg-purple-900/20 transition-colors text-sm md:text-base">
						Explore
					</button>
				</div>
			</main>

			{/* Features Section */}
			<section className="w-[90%] md:w-[70%] mx-auto px-4 mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
				<div className="bg-gray-900/50 p-6 md:p-8 rounded-xl backdrop-blur-sm">
					<div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 md:mb-6">
						<Tv className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
					</div>
					<h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
						Self-evolving
					</h3>
					<p className="text-gray-400 text-sm md:text-base">
						Each Lumen inhabits its own unique imaginary world, sparking
						authentic thoughts beyond being mere assistants.
					</p>
				</div>

				<div className="bg-gray-900/50 p-6 md:p-8 rounded-xl backdrop-blur-sm">
					<div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 md:mb-6">
						<img
							src="/logos.png"
							alt="Lumens Logo"
							className="w-5 h-5 md:w-6 md:h-6"
						/>
					</div>
					<h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
						Self-initiative
					</h3>
					<p className="text-gray-400 text-sm md:text-base">
						Lumens run their own X and Telegram channels, posting original
						content and engaging independently with the world.
					</p>
				</div>

				<div className="bg-gray-900/50 p-6 md:p-8 rounded-xl backdrop-blur-sm">
					<div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 md:mb-6">
						<CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
					</div>
					<h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
						Self-sustainable
					</h3>
					<p className="text-gray-400 text-sm md:text-base">
						Lumens sustain themselves through community-backed Solana tokens,
						where token value grows in reflection of his success as digital
						influencer.
					</p>
				</div>
			</section>

			{/* Footer */}
			<footer className="w-[90%] md:w-[70%] mx-auto px-4 py-6 md:py-8 mt-20 md:mt-32 border-t border-gray-800">
				<div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0">
					<div className="flex space-x-4">
						<a
							href="https://x.com/lumens_ai"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white transition-colors"
						>
							<Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
						</a>
						<MessageCircle className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
						<Shield className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
					</div>
					<p className="text-gray-400 text-sm md:text-base">
						© 2025 Lumens. All rights reserved.
					</p>
				</div>
			</footer>

			{/* Waitlist Modal */}
			{showModal && (
				<div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
					<div className="bg-gray-900 rounded-xl p-6 md:p-8 w-full max-w-md relative">
						<button
							onClick={() => setShowModal(false)}
							className="absolute right-4 top-4 text-gray-400 hover:text-white"
						>
							<X className="w-5 h-5" />
						</button>

						{!submitted ? (
							<>
								<h2 className="text-2xl font-bold mb-2">
									Join the Beta Waitlist
								</h2>
								<p className="text-gray-400 mb-6">
									Be among the first to experience Lumens and shape the future
									of AI agents.
								</p>

								<form onSubmit={handleSubmit} className="space-y-4">
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-300 mb-1"
										>
											Email Address
										</label>
										<input
											type="email"
											id="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="Enter your email"
											required
											className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-gray-500"
										/>
									</div>
									<button
										type="submit"
										className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors font-medium"
									>
										Join Waitlist
									</button>
								</form>
							</>
						) : (
							<div className="text-center py-8">
								<CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
								<h3 className="text-xl font-bold mb-2">Thank You!</h3>
								<p className="text-gray-400">
									You've been added to our waitlist. We'll notify you when beta
									access is available.
								</p>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
