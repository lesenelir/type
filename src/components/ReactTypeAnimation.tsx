import {TypeAnimation} from "react-type-animation"

function ReactTypeAnimation() {

  return (
    <>
      <TypeAnimation
        sequence={[
          'This is a test',
          1000,
          'This is an another test',
          2000,
          'This is the last test',
          3000
        ]}
        wrapper="p"
        repeat={Infinity}
        className={'text-red-400'}
      />
    </>
  )
}

export default ReactTypeAnimation
