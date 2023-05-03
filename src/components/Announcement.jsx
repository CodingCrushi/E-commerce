import { Facebook, Instagram, Twitter, Pinterest } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
import { tablet } from "../responsive";

//--------------- Styles ---------------
const Container = styled.div`
  height: 30px;
  width : 100% ;
  background-color: orangered;
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 400;
  ${mobile({ display : "none" })};
`;
//--------------- Left  ---------------
const Left = styled.div`
  flex : 1 ;
  display: flex;
  align-items: center;
`
const SocialIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
//--------------- Center Design ---------------
const Center = styled.div`
  flex : 1 ;
  text-align: center;
  font-size: 0.75rem;
`
//--------------- Right Design ---------------
const Right = styled.div`
  flex : 1 ;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Select = styled.select`
  border-radius : 10px;
  background-color : orangered ;
  border-color : white ;
  padding: 8px;
  font-weight: bold ;
  font-size: 0.5rem;
  margin: 10px;
  color : white;
`
const Option = styled.option`
  font-size: 0.55rem;
`
const Announcement = () => {
  return(
    <Container>
      {/* --------------- Left --------------- */}
    <Left >
      <SocialIcon color="3B5999">
        <Facebook />
      </SocialIcon>
      <SocialIcon color="E4405F">
        <Instagram />
      </SocialIcon>
      <SocialIcon color="55ACEE">
        <Twitter />
      </SocialIcon>
      <SocialIcon color="E60023">
        <Pinterest />
      </SocialIcon>
        
    </Left>
    {/* --------------- Center --------------- */}
    <Center >Super Deal! Free Shipping on Orders Over $50</ Center >
    {/* --------------- Right --------------- */}
    <Right >
    <Select name="currency">    
      <Option value="usd">USD $</Option>
      <Option value="eur">EUR &euro;</Option>
    </Select>

    <Select name="language">    
      <Option value="en-US">English</Option>
      <Option value="es-ES">Espa&ntilde;ol</Option>
      <Option value="es-fr">Fran&ccedil;ais</Option>
    </Select>
    </ Right >
    
    </Container>
  ) 
};

export default Announcement;
