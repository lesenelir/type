import Typewriter from 'typewriter-effect'

function TypewriterCom() {

  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Hello World!')
            .callFunction(() => {
              console.log('String typed out!')
            })
            .pauseFor(1000)
            .deleteAll()
            .callFunction(() => {
              console.log('All strings were deleted')
            })
            .start()
        }}
      />

      <Typewriter
        options={{
          strings: ['Hello World', 'Some other string'],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  )
}

export default TypewriterCom
