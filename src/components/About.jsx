import { Aug22, Feb13, July22, June07, Mar06, May03, Okt07, Okt24 } from "../assets/images/image"

const About = () => {
  return (
    <>
      <div id="about" className="relative -top-16" />
      <div className="max-w-full mx-auto bg-white rounded-3xl z-[3] relative -top-5 h-[calc(100vh)]">
        <div className="w-full text-center py-6">
          <h2 className="font-poppins text-xl font-bold">Tentang Kami</h2>
        </div>
        <div className="items-center">
          <div className="overflow-x-auto space-x-4 flex flex-row bg-black h-full w-full snap-x sm:py-5">
            <Carousel>
              <Image src={Feb13} className="hover-container" />
              <div className="absolute p-5 font-poppins font-bold text-white z-[4] top-0 right-0 on-hover">
                <p className="text-2xl">Pengenalan Fortek - 13 Februari 2023</p>
              </div>
              <div className="absolute p-5 font-poppins font-bold text-white z-[4] bottom-0 left-0">
                <h3 className="text-5xl my-2">Apa itu FORTEK ?</h3>
                <p>FORTEK ( Forum Ilmu Pengetahuan dan Teknologi ) adalah ekskul yang mempelajari tentang 9 konsentrasi keahlian dan juga Ilmu Pengetahuan di SMK Negeri 1 Cimahi. FORTEK didirikan sebagai forum berbagi ilmu antar semua kompetensi keahlian, agar semua siswa dapat lebih mengetahui tentang perkembangan zaman, serta menjadi salah satu pembekalan saat di industri nanti.
                </p>
              </div>
            </Carousel>
            <Carousel>
              <Image src={Mar06} className="hover-container" />
              <div className="absolute p-5 font-poppins font-bold text-white z-[4] bottom-0 left-0 on-hover">
                <p className="text-2xl">Ekseperimen Arduino - 6 Maret 2023</p>
              </div>
            </Carousel>
            <Carousel>
              <Image src={July22} className="hover-container" />
              <div className="absolute p-5 font-poppins font-bold text-white z-[4] bottom-0 left-0 on-hover">
                <p className="text-2xl">Stand FORTEK - 22 Juli 2023</p>
              </div>
            </Carousel>
            <Carousel>
              <Image src={Aug22} className="hover-container" />
              <div className="absolute p-5 font-poppins font-bold text-white z-[4] bottom-0 left-0 on-hover">
                <p className="text-2xl">Belajar Memakai 3D Printer - 22 Agustus 2022</p>
              </div>
            </Carousel>
            <Carousel>
              <Image src={Okt07} className="hover-container" />
              <div className="absolute p-5 font-poppins font-bold text-white z-[4] bottom-0 left-0 on-hover">
                <p className="text-2xl">Eksperimen Sains - 07 Oktober 2023</p>
              </div>
            </Carousel>
            <Carousel>
              <Image src={Okt24} className="hover-container" />
              <div className="absolute p-5 font-poppins font-bold text-white z-[4] bottom-0 left-0 on-hover">
                <p className="text-2xl">Persiapan Cerdas Cermat - 24 Oktober 2023</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}

const Carousel = ({ children }) => {
  return (
    <div className="min-w-full sm:min-w-[700px] min-h-full relative overflow-hidden bg-cover snap-center">
      {children}
    </div>
  )
}

const Image = ({ src, className }) => {
  return (
    <div className={(className) + ' h-fit w-full relative z-[1]'}>
      <img className="h-[600px] w-full object-cover filter brightness-50 z-[2]" src={src} />
      <div className={"absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[3]"}></div>
    </div>

  )
}

export default About