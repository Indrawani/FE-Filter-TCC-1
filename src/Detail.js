import { useParams, Link } from "react-router-dom";
import { useState, useEffect} from "react";
import { Box, Button, Image, Heading, Text, Container, Flex, SimpleGrid } from "@chakra-ui/react";

function Detail() {
  const [checkdetail, setCheckdetail] = useState(null)
  const [loading, setLoading] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
      .then((respon) => respon.json())
      .then((json) => {
        setCheckdetail(json.data[0]);
        // setCheckdetail(data[0]);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  console.log(checkdetail)

  return (
  <>
    <Container maxW="1500px" mx="auto" mt="10">
      <Link to = "/"><Button colorScheme='teal' variant='solid' >Back</Button></Link>
      {
        loading ? 

        <h1>Loading...</h1> :

          <Container>
            
              <Box>
                <Image src = {checkdetail.card_images[0].image_url} alt = {checkdetail.name}/>
              </Box>
              <Container>
                <Heading as = "h2">{checkdetail.name}</Heading>
                  <Text fontWeight="700">Level: {checkdetail.level}</Text>
                  <Text fontWeight="700">{checkdetail.attribute}</Text>
                  <Text fontWeight="700">ATK/{checkdetail.atk} DEF/{checkdetail.def}</Text>
                  <Text>{`[ ${checkdetail.type} / ${checkdetail.race} ]`}</Text>
                  <Text>Description:{checkdetail.desc}</Text>
              </Container>
            

            <Container>
              <Heading>Card Set</Heading>

              <SimpleGrid> {

                  checkdetail.card_sets.map(checkcard => (

                    <Box>
                      <Text>Name: {checkcard.set_name}</Text>
                      <Text>Code: {checkcard.set_code}</Text>
                      <Text>Rarity: {checkcard.set_rarity}</Text>
                      <Text>Price: {checkcard.set_price}</Text>
                    </Box>
                  ))
                }
              </SimpleGrid>
            </Container>
          </Container>
      }
    </Container>
  </>
  ) // TODO: replace this
}

export default Detail;
