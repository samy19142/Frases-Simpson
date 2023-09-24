import styled from "styled-components";
import Logo from "../the-simpson.png";
const Welcome = (props) => {
  const {reqApi}=props;

  return (
    <ContentLogo>
      <WelcomeText>
        Bienvenido, dale click a la Imagen;
      </WelcomeText>
      <ImageLogo src={Logo} alt="Logo-simpson" onClick={()=>reqApi()}/>
    </ContentLogo>
    
  );
};

const ImageLogo = styled.img`
  width: 450px;
  height: auto;
  transition: background-color 1s linear;

  &:hover {
    cursor: pointer;
    background-color: #e2e437;
    border-radius:50px;
  }
`;

const ContentLogo = styled.div`
  width: 100%;
  text-align: center;
`;

const WelcomeText=styled.p`
color:#2a9d8f;
text-align:center;
font-weight:900;
padding:50px 0 10px 0;
font-size:25px;
`;


export default Welcome;
