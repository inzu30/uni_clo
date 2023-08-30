import { Box, Text, Button ,Flex,Spacer, Image, CardBody, Card, Divider,Stack,Heading} from '@chakra-ui/react';

const Cart = () => {
  const cartItems = [
    {
      "id": 1,
      "image": "https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-master/default/dwa8c1ae88/FON2534WHT_COLLAR_DETAIL.jpg",
      "title": "Spread Collar Non-Iron Clifton Weave Shirt - White",
      "price": "759",
      "color": "white",
      "rating": "3.2",
      "catagory": "SHIRTS",
      "details": "The name is inspired by our early days in Bristol, where we sold our first shirts. This unique weave has a distinctive finish that can be dressed up or down, while the mid-weight cotton is perfect for year-round wear. Expect refined details, underpinned with impeccable tailoring (and our marvellous non-iron finish). This rich ocean-blue tone is given extra depth by that exclusive textured weave and will make a stylish contrast with your favourite charcoal or grey suit. The contemporary cutaway collar can be worn open or with a large-knotted tie."
    },
    {
      "id": 2,
      "image": "https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw22405ac5/FON2534OCE_COLLAR_DETAIL.jpg?sw=600&sh=750",
      "title": "Spread Collar Non-Iron Clifton Weave Shirt - Ocean Blue",
      "price": "654",
      "color": "blue",
      "rating": "4.2",
      "catagory": "SHIRTS",
      "details": "The name is inspired by our early days in Bristol, where we sold our first shirts. This unique weave has a distinctive finish that can be dressed up or down, while the mid-weight cotton is perfect for year-round wear. Expect refined details, underpinned with impeccable tailoring (and our marvellous non-iron finish). This rich ocean-blue tone is given extra depth by that exclusive textured weave and will make a stylish contrast with your favourite charcoal or grey suit. The contemporary cutaway collar can be worn open or with a large-knotted tie."
    },
    {
      "id": 3,
      "image": "https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw53491970/FON2534AQA_COLLAR_DETAIL.jpg?sw=600&sh=750",
      "title": "details about product:Spread Collar Non-Iron Clifton Weave Shirt - Aqua Green",
      "price": "567",
      "color": "green",
      "rating": "5",
      "catagory": "SHIRTS",
      "details": "The name is inspired by our early days in Bristol, where we sold our first shirts. This unique weave has a distinctive finish that can be dressed up or down, while the mid-weight cotton is perfect for year-round wear. Expect refined details, underpinned with impeccable tailoring (and our marvellous non-iron finish). This rich ocean-blue tone is given extra depth by that exclusive textured weave and will make a stylish contrast with your favourite charcoal or grey suit. The contemporary cutaway collar can be worn open or with a large-knotted tie."
    },
    {
      "id": 4,
      "image": "https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw3e319466/FON2534PNK_COLLAR_DETAIL.jpg?sw=600&sh=750",
      "title": "details about product:Spread Collar Non-Iron Clifton Weave Shirt - Pink",
      "price": "567",
      "color": "pink",
      "rating": "3.3",
      "catagory": "SHIRTS",
      "details": "The name is inspired by our early days in Bristol, where we sold our first shirts. This unique weave has a distinctive finish that can be dressed up or down, while the mid-weight cotton is perfect for year-round wear. Expect refined details, underpinned with impeccable tailoring (and our marvellous non-iron finish). This rich ocean-blue tone is given extra depth by that exclusive textured weave and will make a stylish contrast with your favourite charcoal or grey suit. The contemporary cutaway collar can be worn open or with a large-knotted tie."
    },
    {
      "id": 5,
      "image": "https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dwaa3fd3c0/hi-res/FON0710BLK_DETAIL_COLLAR.jpg?sw=600&sh=750",
      "title": "Spread Collar Non-Iron Poplin Shirt - Black",
      "price": "453",
      "color": "black",
      "rating": "4.3",
      "catagory": "SHIRTS",
      "details": "The name is inspired by our early days in Bristol, where we sold our first shirts. This unique weave has a distinctive finish that can be dressed up or down, while the mid-weight cotton is perfect for year-round wear. Expect refined details, underpinned with impeccable tailoring (and our marvellous non-iron finish). This rich ocean-blue tone is given extra depth by that exclusive textured weave and will make a stylish contrast with your favourite charcoal or grey suit. The contemporary cutaway collar can be worn open or with a large-knotted tie."
    },
    {
      "id": 6,
      "image": "https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw2e8e125f/hi-res/FON0409WHT_COLLAR_DETAIL.jpg?sw=600&sh=750",
      "title": "Non-Iron Twill Shirt - White",
      "price": "546",
      "color": "white",
      "rating": "4.6",
      "catagory": "SHIRTS",
      "details": "The name is inspired by our early days in Bristol, where we sold our first shirts. This unique weave has a distinctive finish that can be dressed up or down, while the mid-weight cotton is perfect for year-round wear. Expect refined details, underpinned with impeccable tailoring (and our marvellous non-iron finish). This rich ocean-blue tone is given extra depth by that exclusive textured weave and will make a stylish contrast with your favourite charcoal or grey suit. The contemporary cutaway collar can be worn open or with a large-knotted tie."
    },
    {
      "id": 7,
      "image": "https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw3c4174cb/FON2508LLC_COLLAR_DETAIL.jpg?sw=600&sh=750",
      "title": "details about product:Non-Iron Two Color Check Shirt - blue",
      "price": "678",
      "color": "blue",
      "rating": "4.6",
      "catagory": "SHIRTS",
      "details": "The name is inspired by our early days in Bristol, where we sold our first shirts. This unique weave has a distinctive finish that can be dressed up or down, while the mid-weight cotton is perfect for year-round wear. Expect refined details, underpinned with impeccable tailoring (and our marvellous non-iron finish). This rich ocean-blue tone is given extra depth by that exclusive textured weave and will make a stylish contrast with your favourite charcoal or grey suit. The contemporary cutaway collar can be worn open or with a large-knotted tie."
    },
    {
      "id": 8,
      "image": "https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dwcc329f12/FOR2353SKY_MODEL_FULL.jpg?sw=600&sh=750",
      "title": "Semi-Spread Collar Egyptian Cotton Prince Of Wales Check Shirt - Sky Blue",
      "price": "459",
      "color": "blue",
      "rating": "452",
      "catagory": "SHIRTS",
      "details": "The name is inspired by our early days in Bristol, where we sold our first shirts. This unique weave has a distinctive finish that can be dressed up or down, while the mid-weight cotton is perfect for year-round wear. Expect refined details, underpinned with impeccable tailoring (and our marvellous non-iron finish). This rich ocean-blue tone is given extra depth by that exclusive textured weave and will make a stylish contrast with your favourite charcoal or grey suit. The contemporary cutaway collar can be worn open or with a large-knotted tie."
    },
    {
      "id": 9,
      "image": "https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dwa05c7feb/CSN0442OLV_COLLAR_DETAIL.jpg?sw=600&sh=750",
      "title": "Button-Down Collar Non-Iron Twill Gingham Shirt - Olive Green",
      "price": "900",
      "color": "green",
      "rating": "3.3",
      "catagory": "SHIRTS",
      "details": "The name is inspired by our early days in Bristol, where we sold our first shirts. This unique weave has a distinctive finish that can be dressed up or down, while the mid-weight cotton is perfect for year-round wear. Expect refined details, underpinned with impeccable tailoring (and our marvellous non-iron finish). This rich ocean-blue tone is given extra depth by that exclusive textured weave and will make a stylish contrast with your favourite charcoal or grey suit. The contemporary cutaway collar can be worn open or with a large-knotted tie."
    },
    {
      "id": 10,
      "image": "https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw2b278e22/FOR2353SKY_COLLAR_DETAIL.jpg?sw=430&sh=540",
      "title": "Semi-Spread Collar Egyptian Cotton Prince Of Wales Check Shirt - Sky Blue",
      "price": "578",
      "color": "blue",
      "rating": "4.5",
      "catagory": "SHIRTS",
      "details": "The name is inspired by our early days in Bristol, where we sold our first shirts. This unique weave has a distinctive finish that can be dressed up or down, while the mid-weight cotton is perfect for year-round wear. Expect refined details, underpinned with impeccable tailoring (and our marvellous non-iron finish). This rich ocean-blue tone is given extra depth by that exclusive textured weave and will make a stylish contrast with your favourite charcoal or grey suit. The contemporary cutaway collar can be worn open or with a large-knotted tie."
    },
    {
      "id": 11,
      "image": "https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dwd8f80a37/hi-res/JEP0317NAV_COLLAR_DETAIL.jpg?sw=600&sh=750",
      "title": "Smart Jersey Polo - Navy",
      "price": "666",
      "color": "blue",
      "rating": "3.3",
      "catagory": "POLOS",
      "details": "This is the most refined polo your wardrobe has ever seen. Add it to your arsenal for an easy smart-casual look."
    },
    {
      "id": 12,
      "image": "https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw195198ba/hi-res/JEP0317WNE_MODEL_FRONT.jpg?sw=600&sh=750",
      "title": "Smart Jersey Polo - Wine",
      "price": "567",
      "color": "wine",
      "rating": "4.9",
      "catagory": "POLOS",
      "details": "This is the most refined polo your wardrobe has ever seen. Add it to your arsenal for an easy smart-casual look."
    },];

  return (
    <Box>
    <Flex>
        <Box p='18' bg='white' fontSize="large" fontWeight="bold" fontFamily="heading">
           <h1>BAG</h1>
         </Box>
         <Spacer />
         <Box p='1' bg='white'>
            <Flex>
                <Box>
                  <img src="padlock.svg" alt="error" />
                <Text fontSize="2xs">Shopping is secure <br/>with Charles Tyrwhitt.</Text>
                </Box>
               </Flex>
        </Box>
    </Flex>
    <Divider/>
    <Box p={4}>
      {cartItems.length === 0 ? (
        <Text fontSize="large">Your cart is empty.</Text>
      ) : (
        cartItems.map((item, index) => (
          <Box key={index} border="1px" borderColor="gray.200" p={2} mb={2}>
          <Flex>
          <Card maxWidth={'sm'}>
          <CardBody>
          <Image
          src={item.image}
          alt='edit'
          borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
          <Heading size='md'>{item.title}</Heading>
      <Text color='blue.600' fontSize='2xl'>
       Price:${item.price}
      </Text>
      <Text>
       colour:{item.color}
      </Text>
      <Text>
        Ratings:{item.rating}
      </Text>
      <Text>
        category:{item.catagory}
        </Text>
        <Text>Details about item:<br/>
        {item.details}
      </Text>
      
    </Stack>
  </CardBody>
  </Card>
  </Flex>
  </Box>
        ))
      )}
      <Button colorScheme="blue">Proceed to Checkout</Button>
     </Box>
</Box>
  );
}

export default Cart;
