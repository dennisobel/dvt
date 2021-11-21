import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { search } from '../utils/fetchData'
import {useState,useEffect} from 'react'

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;



const Navbar = (props) => {
  console.log("PROPS:", props);
  const {onSearch} = props;
  const [query,setQuery] = useState("")

// const proxy = "http://localhost:8080"
// const baseUrl = "https://api.deezer.com"

// const search = async (query) => {
//     console.log('querty:',query)
//     const res = await fetch(`${proxy}/${baseUrl}/search?q=${query}`, {
//         method: 'GET',
//         // mode: 'no-cors'
//     })

//     const data = await res.json()
//     return data
// }  

const handleSearch = () => {
  onSearch(query)
}

  const handleInput = (e) => {
    const text = e.target.value
    setQuery(text)
  }

  const handleEnterKeyPressed = (e) => {
    if(e.key=== 'Enter') {
      onSearch(query)
    }
  }  

  return (
    <Container>
      <Title>umculo</Title>
      <Desc>Get the most effortless audio entertainment for you. Only on umculo.</Desc>
      <InputContainer>
        <Input placeholder="Discover music" onChange={handleInput} onKeyPress={handleEnterKeyPressed}/>
        {/* <Button onClick={handleSearch}>
          <Send />
        </Button> */}
      </InputContainer>
    </Container>
  );
};

export default Navbar;
