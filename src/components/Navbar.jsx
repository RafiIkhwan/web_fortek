import Container from "./Container"
import Fortek from "../assets/images/icon/Logopng_fortek.png"
import { useState, useEffect } from "react";

const Navbar = () => {
	const [scrolling, setScrolling] = useState(false);

	const scrollHandler = () => {
		if (window.scrollY > 200) {
			setScrolling(true);
		} else {
			setScrolling(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	return (
		<nav className={`${scrolling ? 'py-0 max-w-full' : 'max-w-[1280px] py-5'} transition-all duration-500 fixed top-0 z-[5] w-full m-auto inset-x-0`}>
			<div className={`${scrolling ? 'rounded-none' : 'rounded-[64px]'} bg-white shadow-md transition-all duration-300`}>
				<Container>
					<div className="text-xs sm:text-base flex justify-between items-center px-2 pr-4 py-2">
						<div className="flex font-medium items-center gap-1 sm:gap-2">
							<img className={`${scrolling ? 'rounded-[0%]' : 'rounded-[50%]'} w-6 sm:w-10 transition-all duration-500`} src={Fortek} alt="" />
							<p className="font-bold font-poppins tracking-wider">FORTEK</p>
						</div>
						<ul className="gap-2 flex font-medium items-center sm:gap-4">
							<li>
								<Link href="#home">Beranda</Link>
							</li>
							<li>
								<Link href="#about">Tentang</Link>
							</li>
							<li>
								<Link href="#history">Sejarah</Link>
							</li>
							<li>
								<Link href="#join">Join</Link>
							</li>
							<li>
								<Link href="#contact">Kontak</Link>
							</li>
						</ul>
					</div>
				</Container>
			</div>
		</nav>
	)
}

const Link = ({ href, children }) => {
	return (
		<a className="text-dark hover:text-primary font-poppins" href={href}>{children}</a>
	)
}

export default Navbar