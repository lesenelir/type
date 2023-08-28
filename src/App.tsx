import TypewriterCom from "@/components/TypewriterCom.tsx"
import ReactTypeAnimation from "@/components/ReactTypeAnimation.tsx"
import OwnTypeAnimation from "@/components/OwnTypeAnimation.tsx"
import RequestAnimationType from "@/components/RequestAnimationType.tsx"

function App() {

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

    </>
  )
}

export default App
