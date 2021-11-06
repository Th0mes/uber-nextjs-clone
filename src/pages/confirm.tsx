import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Link from 'src/components/Link'
import Map from 'src/components/Map'
import RideSelector from 'src/components/RideSelector'
import tw from 'tailwind-styled-components'

const Confirm = () => {
  const router = useRouter()

  const { pickup, dropoff } = router.query

  const [pickupCoordinates, setPickupCoordinates] = useState()
  const [dropoffCoordinates, setDropoffCoordinates] = useState()

  const getPickupCoordinates = (pickup: any) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoidGgwbWVzIiwiYSI6ImNrZzh6bzF2czBtOWgyeW16NDI0anV3eDcifQ.-VV4s1pYsj8eObVbGuLI9g',
          limit: '1'
        })
    )
      .then(response => response.json())
      .then(data => {
        setPickupCoordinates(data.features[0].center)
      })
  }

  const getDropoffCoordinates = (dropoff: any) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoidGgwbWVzIiwiYSI6ImNrZzh6bzF2czBtOWgyeW16NDI0anV3eDcifQ.-VV4s1pYsj8eObVbGuLI9g',
          limit: '1'
        })
    )
      .then(response => response.json())
      .then(data => {
        setDropoffCoordinates(data.features[0].center)
      })
  }

  useEffect(() => {
    getPickupCoordinates(pickup)
    getDropoffCoordinates(dropoff)
  }, [pickup, dropoff])

  return (
    <Container>
      <BackButtonContainer to={'/search'}>
        <ReturnButton
          src={'https://img.icons8.com/ios-filled/50/000000/left.png'}
        />
      </BackButtonContainer>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector />
        <ConfirmButtonContainer to={'#'}>
          <ConfirmButton>Confirm Uber X</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Container>
  )
}

const Container = tw.div`
  flex
  h-screen
  flex-col
`

const BackButtonContainer = tw(Link)`
  z-10
`

const ReturnButton = tw.img`
  h-12
  absolute
  top-2
  left-2
  bg-white
  rounded-full
  drop-shadow-2xl
`

const RideContainer = tw.div`
  flex-1
  flex
  flex-col
  h-1/2
`

const ConfirmButtonContainer = tw(Link)`
  flex
  p-2.5
  border-t-2
`

const ConfirmButton = tw.button`
  flex-1
  bg-black
  text-white
  font-semibold
  py-2
  text-xl
`

export default Confirm
