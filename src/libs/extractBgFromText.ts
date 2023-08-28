export function extractBgFromText(className: string | undefined) {
  if (className) {
    const textClassMatch = className.match(/text-([a-z0-9-]+)/)
    if (textClassMatch) {
      return `bg-${textClassMatch[1]}`
    }
  }

  // default bg color
  return 'bg-black'
}
