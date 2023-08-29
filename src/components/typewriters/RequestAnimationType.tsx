import TypeAnimationFrame from "@/utils/TypeAnimationFrame.tsx"

function RequestAnimationType() {
  return (
    <>
      <TypeAnimationFrame
        text={'hello world'}
        className={'text-yellow-800'}
        delay={120}
        repeat={true}
      />
    </>
  )
}

export default RequestAnimationType
