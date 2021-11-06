import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import { Container } from './styles'

type MapProps = {
  pickupCoordinates?: any
  dropoffCoordinates?: any
}

mapboxgl.accessToken =
  'pk.eyJ1IjoidGgwbWVzIiwiYSI6ImNrZzh6bzF2czBtOWgyeW16NDI0anV3eDcifQ.-VV4s1pYsj8eObVbGuLI9g'

const Map = ({ pickupCoordinates, dropoffCoordinates }: MapProps) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.28011, 39.39172],
      zoom: 4
    })

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates)
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates)
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates], { padding: 60 })
    }
  }, [pickupCoordinates, dropoffCoordinates])

  const addToMap = (map: any, coordinates: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }

  return <Container id={'map'}></Container>
}

export default Map
