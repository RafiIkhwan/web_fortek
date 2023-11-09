const Container = ({ className, children }) => {
  return (
    <div className={`${className} max-w-[1080px] w-full px-3 sm:px-0 py-5 mx-auto box-border`}>
      {children}
    </div>
  )
}

export default Container