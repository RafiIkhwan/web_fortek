const Container = ({ className, children, scroll }) => {
  return (
    <div className={`${className} max-w-[1280px] w-full px-3 sm:px-0 mx-auto box-border`}>
      {children}
    </div>
  )
}

export default Container