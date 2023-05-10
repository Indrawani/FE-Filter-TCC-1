import {Link} from "react-router-dom"
import {Box, Image, Heading} from "@chakra-ui/react"

function Card({ card }) {
  return (
  <>
    <Link to = {"/card/" +card.id}>
      <Box className="yugioh-card">
        <Image src = {card.card_images[0].image_url} alt = {card.name}></Image>
        <Heading as="h2" textAlign = "center" size = "md" mt={5} >{card.name}</Heading>
      </Box>
    </Link>
  </>
  ) // TODO: replace this
}

export default Card;
