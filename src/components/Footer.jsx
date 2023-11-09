import Container from "./Container"
import { Instagram, Facebook, Discord, WhatsApp } from "../assets/images/icon/Social"
import Fortek from "../assets/images/icon/Logopng_fortek.png"

const Footer = () => {
	return (
		<footer className="bg-dark h-max-auto">
			<div className="mx-auto w-full max-w-screen-xl  mp-4 py-6 lg:py-8">
				<div className="flex justify-between flex-col">
					<div className="mb-6 md:mb-0 flex flex-row">
						<a href="#top">
							<img src={Fortek} className="h-20 mr-3" />
						</a>
						<div className="flex items flex-col font-poppins my-2">
							<p className="text-xl whitespace-nowrap text-white mb-3">FORTEK</p>
							<p className="text-xl whitespace-nowrap text-white">SMKN 1 CIMAHI</p>
						</div>
					</div>
					<div className="flex justify-center items-center gap-x-32 font-poppins text-white mt-16 text-center">
						<Link href="http://instagram.com">
							<Instagram />
							<span>Instagram</span>
						</Link>
						<Link href="http://facebook.com">
							<Facebook />
							<span>Facebook</span>
						</Link>
						<Link href="http://discord.com">
							<Discord/>
							<span>Discord</span>
						</Link>
						<Link href="http://whatsapp.com">
							<WhatsApp/>
							<span>WhatsApp</span>
						</Link>
					</div>
					<div className="flex justify-center text-white font-poppins mt-20">
						@2023 FORTEK | Forum  Iptek Pembangunan
					</div>
				</div>
			</div>
		</footer>
	)
}

const Link = ({ href, children }) => {
	return (
		<a href={href} className="hover:text-primary flex flex-col justify-center">
			{children}
		</a>
	)
}

export default Footer