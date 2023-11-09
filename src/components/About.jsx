import { Mar06, May03 } from "../assets/images/image"

const About = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl z-[3] relative -top-5 h-[calc(100vh)]">
      <div className="w-full text-center py-6">
        <h2 className="font-poppins text-xl font-bold">About Us</h2>
      </div>
      <div className="items-center h-96">
        <div className="overflow-x-auto space-x-4 flex flex-row bg-black h-full w-full">
          <Carousel img={May03} />
          <Carousel>
            <Image src={Mar06} /> 
          </Carousel>
          <Carousel>
            <Image src={May03} />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

const Carousel = ({ children, img }) => {
  return (
    <div className="w-screen h-96 relative overflow-hidden bg-cover" style={{ backgroundImage: `url(${img})` }}>
      {children}
    </div>
  )
}

const Image = ({ src }) => {
  return (
    <img className="h-96 w-full object-cover filter blur" src={src} />
  )
}

export default About