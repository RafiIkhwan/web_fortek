import Button from "./Button"

const Banner = () => {
	return (
		<div className="w-full h-full">
			<div className="w-full h-[calc(100vh+20px)] relative z-[1] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(https://media.discordapp.net/attachments/999310133278539786/1172001384183382156/WhatsApp_Image_2023-07-26_at_10.25.48_PM.jpeg?ex=655eba58&is=654c4558&hm=fb75350fe491f4695a7e65517c47a77c8555e9a72d32a43b8425033248771fe3&=&width=1180&height=662)' }} />
			<div className="h-[calc(100vh+20px)] bg-gradient-to-tr from-black via-slate-900 to-white inset-0 absolute opacity-50 z-[2]" />
			<div className="w-full h-full text-white absolute z-[3] text-center inset-0 flex flex-col justify-center items-center gap-5">
				<h1 className="font-inter font-extrabold text-4xl sm:text-6xl tracking-wide">FORUM SAINS & TEKNOLOGI</h1>
				<h2 className="font-inter text-3xl">SMK NEGERI 1 CIMAHI</h2>
				<Button className="bg-white rounded-full text-primary shadow py-2 hover:shadow-md transition duration-0.5 hover:shadow-primary shadow-primary font-bold sm:py-4 px-6">Selengkapnya...</Button>
			</div>
		</div>
	)
}

export default Banner