import Typewriter, {TypewriterClass} from 'typewriter-effect'

import {INavbarLeft, INavbarRight} from "@/types/data.ts"
import {navbarLeftData, navbarRightData} from "@/source/navbar.ts"
import LZIcon from "@/components/icons/LZIcon.tsx"
import NavbarLi from "@/components/openai/NavbarLi.tsx"
import ArrowUpRightIcon from "@/components/icons/ArrowUpRightIcon.tsx"

import '@/style/openai.css'

function OpenAIPage() {
  return (
    <div className={'w-screen h-screen flex flex-col'}>
      {/* Navbar */}
      <nav className={'h-22 p-5 flex flex-row'}>
        {/* Navbar Icon and main text */}
        <div className={'flex flex-row'}>
          <LZIcon width={52} height={52}/>
          <p className={'text-xl flex flex-col justify-center'}>Lesenelir AI Base</p>
        </div>

        {/* chevron down lists */}
        <ul className={'flex flex-row ml-40 gap-4'}>
          {navbarLeftData.map((item: INavbarLeft) => (
            <NavbarLi key={item.text} text={item.text} chevron={item.chevron}/>
          ))}
        </ul>

        {/* arrow up right icons */}
        <ul className={'flex flex-row gap-4 ml-auto'}>
          {navbarRightData.map((item: INavbarRight) => (
            <NavbarLi key={item.text} text={item.text} arrow={item.arrow}/>
          ))}
        </ul>
      </nav>

      {/* Content */}
      <main className={'flex-1 flex flex-col justify-center items-center p-5'}>
        <Typewriter
          options={{
            delay: 10,
            cursor: '',
          }}
          onInit={(typewriter: TypewriterClass) => {
            typewriter
              .pauseFor(3000)
              .typeString('hello world')
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
              .typeString(`<span class="text-lg">Lesenelir AI Base: </span>`)
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
