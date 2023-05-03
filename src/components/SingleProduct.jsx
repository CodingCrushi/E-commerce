import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";

//--------------- Center Design ---------------
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;
//--------------- Center Design ---------------
const ImgContainer = styled.div`
  flex: 6;
`;

const Image = styled.img`
  width: 98%;
  height: 60vh;
  object-fit: cover;
  outline : 4px solid orangered ;
  outline-offset : 12px  ;
  transition : 0.75s ease-in-out ;
  cursor: pointer;
  &:hover{
      outline : none ;
      width: 100%;
    }
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 5;
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
  border: none ;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  outline : 2px solid orange ;
  outline-offset : 4px ;
  transition : 0.5s linear;
  
  &:hover{
      background-color: orangered;
      outline : 2px solid  white ;
      outline-offset : -7px ;
  }
`;


const SingleProduct = () => {
  const [count , setCount ] = useState(1)

  const handleDeincress = () => {
    if(count > 0){
      setCount(prev => prev - 1)
    }else{
      setCount(0)
    }
  }
  const handleIncress = () => {
    setCount(prev => prev + 1)
  }


  return (
    <Container>
      <Wrapper id="shop">
        <ImgContainer>
          <Image src="/images/hat.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{cursor : "pointer"}} onClick={() => handleDeincress()} />
              <Amount>{count}</Amount>
              <Add style={{cursor : "pointer"}} onClick={() => handleIncress()}/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default SingleProduct;
