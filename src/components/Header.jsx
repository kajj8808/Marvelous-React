import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background-color: #fff;
  // backdrop-filter: blur(36px);
  a {
    background-color: red;
    font-size: 18px;
    color: #fff;
    padding: 6px 8px;
    font-weight: bold;
    // letter-spacing: -2px;
  }
`;
export default function Header() {
  return (
    <HeaderContainer>
      <Link to={"/"}>MARVEL</Link>
    </HeaderContainer>
  );
}
