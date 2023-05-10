import Card from "./Cards";
import {useState, useEffect} from "react";
import {Container, Select, SimpleGrid} from '@chakra-ui/react'

function Home() {
  const [checkdata, setCheckdata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4")
      .then((respon) => respon.json())
      .then((json) => {
        setCheckdata(json.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function sortData(type) {
    if(type === "name"){
      const Checksort = [...checkdata].sort((itemSatu,itemDua) => itemSatu.name.localeCompare(itemDua.name))
      setCheckdata(Checksort);

    }else{
      const Checksort = [...checkdata].sort((itemSatu,itemDua) => itemSatu[type] - itemDua[type])
      setCheckdata(Checksort);

    }
  }
  return (
  <>
    <Container mx = "auto" maxW="1000px" my={10}>
      <Select name = "sort" placeholder="sort by" onChange={(check) => sortData(check.target.value)}>
        <option value = "name">Name</option>
        <option value = "atk">Attack</option>
        <option value = "def">Defence</option>
      </Select>
      {
        loading ?

        <h1>Loading...</h1> :

          <SimpleGrid spacingX="40px" spacingY = "40px" columns = "4" mt = "30px">{checkdata.map(data =>
            <Card card = {data}></Card>
          )}</SimpleGrid>
      }
    </Container>
  </>
  ) // TODO: replace this
}

export default Home;
