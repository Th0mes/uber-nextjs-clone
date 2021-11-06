import type { NextPage } from 'next'
import tw from 'tailwind-styled-components'
import Map from 'src/components/Map'
import Link from 'src/components/Link'

const Home: NextPage = () => {
  return (
    <Container>
      <Map />
      <ActionIcons>
        {/* Header */}
        <Header>
          <UberLogo
            src={'https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg'}
          />
          <Profile>
            <Name>Thomes</Name>
            <UserImage src={'https://github.com/th0mes.png'} />
          </Profile>
        </Header>
        {/* ActionButtons */}
        <ActionButtons>
          <ActionButton to={'/search'}>
            <ActionButtonImage src={'https://i.ibb.co/cyvcpfF/uberx.png'} />
            Ride
          </ActionButton>
          <ActionButton to={'#'}>
            <ActionButtonImage src={'https://i.ibb.co/n776JLm/bike.png'} />
            2-Wheels
          </ActionButton>
          <ActionButton to={'#'}>
            <ActionButtonImage
              src={'https://i.ibb.co/5RjchBg/uberschedule.png'}
            />
            Reserve
          </ActionButton>
        </ActionButtons>
        {/* InputButton */}
        <InputButton>Where to?</InputButton>
      </ActionIcons>
    </Container>
  )
}

const Container = tw.div`
  flex
  flex-col
  h-screen
`

const ActionIcons = tw.div`
  flex-1
  p-4
`

const Header = tw.div`
  flex
  justify-between
  items-center
`

const UberLogo = tw.img`
  h-28
`

const Profile = tw.div`
  flex
  items-center
`

const Name = tw.div`
  mr-4
  w-20
  text-sm
`

const UserImage = tw.img`
  h-12
  w-12
  rounded-full
  border
  border-gray-200
  p-px
`

const ActionButtons = tw.div`
  flex
`

const ActionButton = tw(Link)`
  flex
  bg-gray-200
  flex-1
  m-1
  h-32
  items-center
  flex-col
  justify-center
  rounded-lg
  transform
  hover:scale-105
  transition
  text-xl
`

const ActionButtonImage = tw.img`
  h-3/5
`

const InputButton = tw.div`
  h-20
  bg-gray-200
  text-2xl
  font-semibold
  p-4
  flex
  items-center
  mt-8
`

export default Home
