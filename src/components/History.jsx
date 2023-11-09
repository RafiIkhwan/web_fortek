import Container from "./Container"

const History = () => {
	return (
		<div id="history" className="bg-gradient-to-t from-slate-400 via-gray-300 to-white h-[420px]">
			<div className="font-inter text-4xl w-full text-dark text-center tracking-[20px]">SEJARAH</div>
			<div className="overflow-x flex flex-row py-5">
				<Year>
					2010
				</Year>
			</div>
		</div>
	)
}

const Year = ({ children }) => {
	return (
		<div className="w-full text-9xl text-center p-0 m-0 font-md font-poppins text-dark">{children}</div>
	)
}

export default History