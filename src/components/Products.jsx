import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import Navbar from "../components/Navbar";
import {useState, lazy,Suspense} from 'react'
// const Navbar = lazy(() => import("../components/Navbar"))



const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;



const Products = () => {
    const [state, setState] = useState({
        results: []
    });      

    const proxy = "http://localhost:8080"
    const baseUrl = "https://api.deezer.com"    

    const onSearch = async (query) => {
        console.log('querty:',query)
        const res = await fetch(`${proxy}/${baseUrl}/search?q=${query}`, {
            method: 'GET',
            // mode: 'no-cors'
        })

        const data = await res.json()
        console.log("data",data)

        setState(prevState => {
          return { ...prevState, results: data.data }
        })        
        return data
    }    
  return (
    
    
    <>
    <Navbar onSearch={onSearch}/>
    <Container>
      {console.log(state)}
      
      {state.results.map((item) => (
        
        <Product item={item} key={item.id} />
        
      ))}
      
    </Container>
    </>
    
  );
};

export default Products;
