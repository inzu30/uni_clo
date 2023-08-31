import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Heading,Text,Button } from '@chakra-ui/react'

function Editorial() {
  return (
    <div>
        <Card align='center'>
  <CardHeader>
    <Heading size='md'> EDITORIAL</Heading>
  </CardHeader>
  <CardBody>
    <Text>Read all about it! Explore style hints and tips from UNI_CLO, discover more about our collections and products, and meet unique leaders like New York Jets Head Coach Robert Saleh through Nick Wheeler's interviews in A Tailored Life.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>Discover More</Button>
  </CardFooter>
</Card>
    </div>
  )
}

export default Editorial;