import { useEffect, useState, useRef } from 'react'
import gear from '../assets/images/gear_fortek.png'
import Button from "./Button"

const Join = () => {
    const [speed, setSpeed] = useState(1)
    const imageRef = useRef(null)
    const [text, setText] = useState("")
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        let timeout

        const handleScroll = () => {
            setSpeed(3)
            clearTimeout(timeout)

            timeout = setTimeout(() => {
                setSpeed(1)
            }, 1000)
        }

        window.addEventListener('scroll', handleScroll)

        return (() => {
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(timeout)
        })
    }, [])

    useEffect(() => {
        const rotateImage = () => {
            if (imageRef.current) {
                imageRef.current.style.transform = `rotate(${window.scrollY / speed}deg)`
            }
        }

        rotateImage()
    }, [speed])

    const activities = ["Petualangan", "Penelitian"]
    const adjectives = ["Menarik", "Seru", "Inspiratif"]

    const changeText = () => {
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]
        const randomActivity = activities[Math.floor(Math.random() * activities.length)]
        setText(`${randomActivity} ${randomAdjective}`)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true)
            setTimeout(() => {
                setAnimate(false)
            }, 1000)
            changeText()
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <div id="join" className="relative -top-16" />
            <div className="max-w-full mx-auto bg-white rounded-3xl z-[3] relative -top-5 h-[calc(100vh)] overflow-y-auto">
                <div className="w-full text-center space-y-6 mt-6">
                    <p className="font-poppins text-xl font-bold">
                        Eurika! Ikuti ekskul FORTEK<br />
                        <span>Temukan <span className={'transition duration-200 ' + (animate && 'text-white')}>{text}</span> bersama kami!</span>
                    </p>
                    <Button className="bg-sky-500 p-4 min-w-[200px] rounded-full font-bold text-white shadow hover:shadow-md transition duration-0.5 hover:shadow-primary shadow-primary">Bergabung dengan FORTEK</Button>
                </div>
                <div className="overflow-hidden h-[calc(100vh/2)] absolute bottom-0 w-full justify-center ">
                    <img ref={imageRef} className='rotate-image mx-auto' src={gear} alt="" />
                </div>
            </div>
        </>
    )
}

export default Join