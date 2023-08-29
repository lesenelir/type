import {INavbarLeft, INavbarRight} from "@/types/data.ts"
import {navbarLeftData, navbarRightData} from "@/source/data.tsx"

import LZIcon from "@/components/icons/LZIcon.tsx"
import NavbarLi from "@/components/openai/NavbarLi.tsx"

// const textList: string[] = [
//   "Let's go",
//   "Let's design",
//   "Let's build",
//   "Let's discover",
//   "Let's explore",
//   "Let's innovate",
//   "Let's chit-chat",
//   "Let's brainstorm",
// ]

// const navbarList: string[] = [
//   'Research',
//   'API',
//   'ChatGPT',
//   'Safety',
//   'Company',
// ]

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
      <main>

      </main>

      {/* Footer */}
      <footer>

      </footer>
    </div>
  )
}

export default OpenAIPage
