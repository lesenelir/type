import ChevronDownIcon from "@/components/icons/ChevronDownIcon.tsx"
import ArrowUpRightIcon from "@/components/icons/ArrowUpRightIcon.tsx"

interface IProps {
  text: string,
  chevron?: boolean,
  arrow?: boolean
}

function NavbarLi(props: IProps) {
  const {text, chevron, arrow} = props

  if (text === 'Get Started') {
    return (
      <li className={`flex flex-row items-center p-2 border underline-offset-4
        cursor-pointer transition duration-400 ease-in
        hover:bg-black hover:text-white`
      }>
        {text}
        {arrow && <ArrowUpRightIcon width={20} height={20}/>}
      </li>
    )
  }

  return (
    <li className={'flex flex-row items-center cursor-pointer underline-offset-4 hover:underline'}>
      {text}
      {chevron && <ChevronDownIcon width={20} height={20}/>}
      {arrow && <ArrowUpRightIcon width={20} height={20}/>}
    </li>
  )
}

export default NavbarLi
