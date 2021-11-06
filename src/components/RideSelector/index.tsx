import { carList } from 'public/carList'
import {
  Container,
  Title,
  CarList,
  Car,
  CarImage,
  CarDetails,
  Service,
  Time,
  Price
} from './styles'

const RideSelector = () => {
  return (
    <Container>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>$24.00</Price>
          </Car>
        ))}
      </CarList>
    </Container>
  )
}

export default RideSelector
