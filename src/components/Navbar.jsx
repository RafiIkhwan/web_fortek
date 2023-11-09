import Container from "./Container"
import Fortek from "../assets/images/icon/Logopng_fortek.png"

const Navbar = () => {
	return (
		<nav className="fixed top-0 z-[5] w-full">
			<Container>
				<div className="w-full bg-white shadow-md rounded-full">
					<div className="text-xs sm:text-sm flex justify-between items-center px-2 pr-4 py-2">
						<div className="flex font-medium items-center gap-2">
							<img className="w-8 rounded-full" src={Fortek} alt="" />
							<p className="font-bold">FORTEK</p>
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
				</div>
			</Container>
		</nav>
	)
}

const Link = ({ href, children }) => {
	return (
		<a className="text-dark hover:text-primary font-poppins" href={href}>{children}</a>
	)
}

export default Navbar