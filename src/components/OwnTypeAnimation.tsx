import Typewriter from "@/utils/Typewriter.tsx"

function OwnTypeAnimation() {

  return (
    <>
      <Typewriter
        className={'text-yellow-600'}
        text={'hello world'}
        delay={120}
        repeat={true}
      />
    </>
  )
}

export default OwnTypeAnimation
