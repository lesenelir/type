import {useEffect, useState} from "react"

interface IProps {
  delay: number
  text: string
  repeat: boolean
  className?: string
}

function Typewriter(props: IProps) {
  const {delay, text, repeat, className} = props
  const [currentText, setCurrentText] = useState<string>('')
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  useEffect(() => {
    let timer: NodeJS.Timeout | number
    if (isDeleting) {
      // delete
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
          setCurrentIndex(preIndex => preIndex - 1)
        }, delay)
      } else {
        repeat && setIsDeleting(false)
      }
    } else {
      // type write
      if (currentIndex < text.length) {
        timer = setTimeout(() => {
          setCurrentText(currentText + text[currentIndex])
          setCurrentIndex(preIndex => preIndex + 1)
        }, delay)
      } else {
        repeat && setIsDeleting(true)
      }
    }

    return () => clearTimeout(timer)
  }, [currentIndex, currentText, delay, isDeleting, repeat, text])

  return (
    <div className={className}>
      {currentText}
      <span className={`inline-block w-[1px] h-[1em] ml-[2px] bg-black animate-blink`}/>
    </div>
  )
}

export default Typewriter
