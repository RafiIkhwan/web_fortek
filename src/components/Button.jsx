const Button = ({ className, clickHandler, children }) => {
	return (
		<button className={className} type="button">{children}</button>
	)
}

export default Button