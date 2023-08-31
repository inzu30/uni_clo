import { Card, CardHeader, CardBody, CardFooter,Text ,Button} from '@chakra-ui/react'
import React from 'react'
import sevimg from "../assets/sevimg.jpg"
import eigimg from "../assets/eigimg.jpg"
import nineimg from "../assets/nineimg.jpg"
import tenimg from "../assets/tenimg.jpg"
import { Link } from 'react-router-dom'
function Card2() {
  return (
    <div>
        <Text><h1>OUR NEW ARRIVALS</h1></Text>
        <Card align='center'>
  <CardHeader>
    <img src={sevimg} alt="" />
  </CardHeader>
  <CardBody>
   <Text><h5>New Shirt of the season</h5></Text>
   <Text><p>Make room in your wardrobe for our new and exclusive Clifton Weave</p></Text>
  </CardBody>
  <CardFooter>
  <Link to="/products/SHIRTS">
    <Button colorScheme='blue'>Shop the Collection</Button>
    </Link>
  </CardFooter>
</Card>
<Card align='center'>
  <CardHeader>
    <img src={eigimg} alt="" />
  </CardHeader>
  <CardBody>
   <Text><h5>The JETS CAPSULE COLLECTION</h5></Text>
   <Text><p>The Official UNI_CLO INDIA Jets collection has landed! For an elevated look on football fan gear,we are representing our favorite NFL team with Oxford Shirts,Merino's Shirts and Cotton Polos</p></Text>
  </CardBody>
  <CardFooter>
  <Link to="/products/JACKETS&COATS">
    <Button colorScheme='blue'>Discover More</Button>
    </Link>
  </CardFooter>
</Card>
<Card align='center'>
  <CardHeader>
    <img src={nineimg} alt="" />
  </CardHeader>
  <CardBody>
   <Text><h5>Seasonal Looks</h5></Text>
   <Text><p>Discover the latest seasonal looks,whether you are dresssing for the commute,a work trip or a weekend away.Stay comfy in style </p></Text>
  </CardBody>
  <CardFooter>
  <Link to="/products/SUITS">
    <Button colorScheme='blue'>Shop Now</Button>
    </Link>
  </CardFooter>
</Card>
<Card align='center'>
  <CardHeader>
    <img src={tenimg} alt="" />
  </CardHeader>
  <CardBody>
   <Text><h5>Golf Collection</h5></Text>
   <Text><p>Give your swing some extra power in our slick golf attire.Our range of versatile separates has been designed to effortlessly take you from the course to the ckubhouse </p></Text>
  </CardBody>
  <CardFooter>
    <Link to="/products/POLOS">
       <Button colorScheme='blue'>Discover More</Button>
       </Link>
  </CardFooter>
</Card>
    </div>
  )
}

export default Card2