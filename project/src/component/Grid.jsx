import { Card, CardHeader, CardBody, CardFooter ,SimpleGrid,Heading,Button,Text} from '@chakra-ui/react'
import firstimg from "../assets/firstimg.jpg"
import Secimg from "../assets/Secimg.jpg"
import thirimg from "../assets/thirimg.jpg"
import React from 'react'

export default function Grid() {
  return (
    <div>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card>
   
    <CardBody>
      <img src={firstimg} alt="" />
    </CardBody>
    
  </Card>
  <Card>
    
    <CardBody>
      <img src={Secimg} alt="" />
    </CardBody>
   
  </Card>
  <Card>
   
    <CardBody>
        <img src={thirimg} alt="" />
    </CardBody>
    
  </Card>
</SimpleGrid>
    </div>
  )
}

