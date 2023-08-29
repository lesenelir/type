import {INavbarLeft, INavbarRight} from "@/types/data.ts"

export const navbarLeftData: INavbarLeft[] = [
  {
    text: 'Research',
    chevron: true,
  },
  {
    text: 'API',
    chevron: true,
  },
  {
    text: 'ChatGPT',
    chevron: true,
  },
  {
    text: 'Safety',
    chevron: false,
  },
  {
    text: 'Company',
    chevron: true,
  }
]

export const navbarRightData: INavbarRight[] = [
  {
    text: 'Search',
    arrow: false,
  },
  {
    text: 'Log in',
    arrow: true,
  },
  {
    text: 'Get Started',
    arrow: true,
  }
]
