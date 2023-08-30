import {useEffect, useRef, useState} from "react"
import Typewriter, {TypewriterClass} from 'typewriter-effect'

import {textList} from "@/source/main.ts"
import {INavbarLeft, INavbarRight} from "@/types/data.ts"
import {navbarLeftData, navbarRightData} from "@/source/navbar.ts"
import LZIcon from "@/components/icons/LZIcon.tsx"
import NavbarLi from "@/components/openai/NavbarLi.tsx"
import ArrowUpRightIcon from "@/components/icons/ArrowUpRightIcon.tsx"

import '@/style/openai.css'

function OpenAIPage() {
  const [textIndex, setTextIndex] = useState<number>(0)
  const [colorIndex, setColorIndex] = useState<number>(0)
  // save typewriter instance
  const typewriterRef = useRef<TypewriterClass | null>(null)

  // when textIndex changed, start typewriter
  useEffect(() => {
    if (typewriterRef.current) {
      const cursorElement = document.querySelector('.Typewriter__cursor--main')
      if (cursorElement) {
        (cursorElement as HTMLElement).style.opacity = '1'
      }

      typewriterRef.current
        .typeString(`<span class='mr-0.5 text-4xl'>${textList[textIndex]}</span>`)
        .pauseFor(1500)
        .callFunction(() => {
          // Before delete start, change colorIndex
          setColorIndex((prevState: number) => (prevState + 1) % textList.length)
        })
        .deleteAll(20)
        .pauseFor(1500)
        .callFunction(() => {
          setTextIndex((prevState: number) => (prevState + 1) % textList.length)
        })
        .start()
    }
  }, [textIndex])

  return (
    <div className={`w-screen h-screen flex flex-col bg-openai-b-${colorIndex} text-openai-t-${colorIndex}`}>
      {/* Navbar */}
      <nav className={'h-22 p-5 flex flex-row'}>
        {/* Navbar Icon and main text */}
        <div className={'flex flex-row'}>
          <LZIcon width={52} height={52}/>
          <p className={'text-xl flex flex-col justify-center'}>Lesenelir AI Base</p>
        </div>

        {/* chevron down lists */}
        <ul className={'xl:flex flex-row max-xl:hidden ml-40 gap-4'}>
          {navbarLeftData.map((item: INavbarLeft) => (
            <NavbarLi key={item.text} text={item.text} chevron={item.chevron}/>
          ))}
        </ul>

        {/* arrow up right icons */}
        <ul className={'xl:flex flex-row max-xl:hidden gap-4 ml-auto'}>
          {navbarRightData.map((item: INavbarRight) => (
            <NavbarLi key={item.text} text={item.text} arrow={item.arrow}/>
          ))}
        </ul>

        {/* mobile icon */}
        <ul className={'xl:hidden max-xl:flex ml-auto'}>
          <li className={'flex flex-row items-center cursor-pointer underline-offset-4 hover:underline'}>
            Menu
          </li>
        </ul>
      </nav>

      {/* Content */}
      <main className={'flex-1 flex flex-col justify-center items-center p-5'}>
        <Typewriter
          options={{
            delay: 40,
            cursor: '',
            cursorClassName: 'Typewriter__cursor--main'
          }}
          onInit={(typewriter: TypewriterClass) => {
            typewriterRef.current = typewriter
            typewriter
              .pauseFor(2500)
              .callFunction(() => {
                const cursorElement = document.querySelector('.Typewriter__cursor--main')
                if (cursorElement) {
                  (cursorElement as HTMLElement).style.opacity = '1'
                }
              })
              .pauseFor(1000)
              .typeString(`<span class='mr-0.5 text-4xl'>${textList[textIndex]}</span>`)
              .pauseFor(1500)
              .callFunction(() => {
                // Before delete start, change colorIndex
                setColorIndex((prevState: number) => (prevState + 1) % textList.length)
              })
              .deleteAll(20)
              .pauseFor(1500)
              .callFunction(() => {
                setTextIndex((prevState: number) => (prevState + 1) % textList.length)
              })
              .start()
          }}
        />
      </main>

      {/* Footer */}
      <footer className={'p-5 pb-16'}>
        <Typewriter
          options={{
            delay: 10,
            cursor: '',
            cursorClassName: 'Typewriter__cursor--circle',
          }}
          onInit={(typewriter: TypewriterClass) => {
            typewriter
              .typeString(`<span class='text-lg'>Lesenelir AI Base: </span>`)
              .typeString(`<span>A collection of art and code works about AI, inspired by OpenAI.</span>`)
              .typeString('<br/>')
              .typeString(`<span>This project includes: ChatGPT and DALL-E.</span>`)
              .callFunction(() => {
                // hidden cursor when typing complete
                const cursorElement = document.querySelector('.Typewriter__cursor--circle')
                cursorElement && cursorElement.remove()
              })
              .start()
          }}
        />
        <div className={'flex flex-row'}>
          <p className={'mt-4 underline underline-offset-4 cursor-pointer hover:text-opacity-30'}>
            <a href={'https://github.com/lesenelir'} target={'_blank'} rel={'noopener noreferrer'}>
              Find the author
            </a>
          </p>
          <ArrowUpRightIcon width={24} height={24} className={'ml-1 mt-4'}/>
        </div>
      </footer>
    </div>
  )
}

export default OpenAIPage
