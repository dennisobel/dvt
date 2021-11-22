import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {useState,useEffect,Suspense, lazy} from 'react'
import {Link} from "react-router-dom"
import LazyLoad from "react-lazyload";


import Navbar from "../components/Navbar";

import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

// const Navbar = lazy(() => import("../components/Navbar"))
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
    const [state, setState] = useState({
        image: "",
        title: "",
        release_date: "",
        duration: "",
        preview: ""
    }); 
    
          
    const { id } = useParams();

    useEffect(() => {
      onSearch(id)
      // setState({
      //   image: "",
      //   title: "",
      //   release_date: "",
      //   duration: "",
      //   preview: ""        
      // })        
    },[])

    const proxy = "http://localhost:8080"
    const baseUrl = "https://api.deezer.com"    

    const onSearch = async (id) => {
      console.log('querty:',id)
      const res = await fetch(`${proxy}/${baseUrl}/track/${id}`, {
          method: 'GET',
          // mode: 'no-cors'
      })

      const data = await res.json()
      console.log("data",data)
      // setState(prevState => {
      //   return { ...prevState, results: data }
        // }) 
      setState({
        image: data.artist.picture_big,
        title: data.title,
        release_date: data.release_date,
        duration: data.duration,
        preview: data.preview        
      })                  
        
      return data
    }   

  return (
    
    <Container>
      <Wrapper>
        <InfoContainer>
          {console.log(state)}
          <Title>{state.title}</Title>
          
          <Desc>
            Release Date : {state.release_date}
          </Desc>
          <Price>Duration: {state.duration}</Price>
          <AddContainer>
            <a target="_blank" rel="noopener" href={`${state.preview}`}>Preview</a>
          </AddContainer>
        </InfoContainer>
        <ImgContainer>
          <Image src={state.image} />
        </ImgContainer>        
      </Wrapper>
    </Container>
    
  );
};

export default Product;
