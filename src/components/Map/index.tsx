import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import { Container } from './styles'

mapboxgl.accessToken =
  'pk.eyJ1IjoidGgwbWVzIiwiYSI6ImNrZzh6bzF2czBtOWgyeW16NDI0anV3eDcifQ.-VV4s1pYsj8eObVbGuLI9g'

const Map = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.28011, 39.39172],
      zoom: 4
    })
  }, [])

  return (
    <Container id={'map'}>
      <h1>Map</h1>
    </Container>
  )
}

export default Map
