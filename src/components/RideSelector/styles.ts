import tw from 'tailwind-styled-components'

export const Container = tw.div`
  flex-1
  overflow-y-scroll
  flex
  flex-col
`
export const Title = tw.div`
  text-gray-500
  text-center
  text-xs
  py-2
  border-b
`

export const CarList = tw.div`
  overflow-y-scroll
`

export const Car = tw.div`
  flex
  p-4
  items-center
`

export const CarImage = tw.img`
  h-14
  mr-4
`

export const CarDetails = tw.div`
  flex-1
`

export const Service = tw.div`
  font-medium
`

export const Time = tw.div`
  text-xs
  text-blue-500
`

export const Price = tw.div`
  text-sm
`
