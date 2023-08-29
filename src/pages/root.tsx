import {Link} from "react-router-dom"

import TypewriterCom from "@/components/typewriters/TypewriterCom.tsx"
import ReactTypeAnimation from "@/components/typewriters/ReactTypeAnimation.tsx"
import OwnTypeAnimation from "@/components/typewriters/OwnTypeAnimation.tsx"
import RequestAnimationType from "@/components/typewriters/RequestAnimationType.tsx"

function RootPage() {

  return (
    <>
      <div className={'m-2 p-2 bg-blue-100'}>
        <p>From typewriter library:</p>
        <TypewriterCom/>
      </div>

      <div className={'m-2 p-2 bg-blue-200'}>
        <p>From react type animation library:</p>
        <ReactTypeAnimation/>
      </div>

      <div className={'m-2 p-2 bg-blue-300'}>
        <p>Own type setTimeout:</p>
        <OwnTypeAnimation/>
      </div>

      <div className={'m-2 p-2 bg-blue-400'}>
        <p>Own type requestAnimationFrame:</p>
        <RequestAnimationType/>
      </div>

      <div className={'m-2 p-2'}>
        <p>OpenAI Typewriter Website 👋</p>
        <button className={`
          bg-blue-200 p-2 rounded-lg hover:bg-blue-300  
          transition duration-700 ease-in-out
        `}>
          <Link to={'/openai'}>
            Enter
          </Link>
        </button>
      </div>
    </>
  )
}

export default RootPage
