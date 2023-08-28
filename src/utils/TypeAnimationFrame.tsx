import {useCallback, useEffect, useRef, useState} from "react"

interface IProps {
  text: string
  delay: number
  repeat: boolean
  className?: string
}

function TypeAnimationFrame(props: IProps) {
  const {text, delay, repeat, className} = props
  const [currentText, setCurrentText] = useState<string>('')
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const animationFrame = useRef<number | null>(null)
  const lastFrameTimeRef = useRef<number | null>(null)

  const step = useCallback((timestamp: number) => {
    if (!lastFrameTimeRef.current) {
      // when lastFrameTimeRef.current is null, it means this is the first time
      // This is the first frame
      lastFrameTimeRef.current = timestamp
    }

    const elapsed = timestamp - lastFrameTimeRef.current

    if (elapsed >= delay) {
      if (isDeleting) {
        // delete
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
          setCurrentIndex((preIndex) => preIndex - 1)
        } else {
          repeat && setIsDeleting(false)
        }
      } else {
        // type write
        if (currentIndex < text.length) {
          setCurrentText(currentText + text[currentIndex])
          setCurrentIndex((preIndex) => preIndex + 1)
        } else {
          repeat && setIsDeleting(true)
        }
      }

      // record the last frame time
      lastFrameTimeRef.current = timestamp
    }

    animationFrame.current = requestAnimationFrame(step)
  }, [delay, isDeleting, currentText, repeat, currentIndex, text])

  useEffect(() => {
    animationFrame.current = requestAnimationFrame(step)

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [step])

  return (
    <div className={className}>
      {currentText}
      <span className={`inline-block w-[1px] h-[1em] ml-[2px] bg-black animate-blink`}/>
    </div>
  )
}

export default TypeAnimationFrame
