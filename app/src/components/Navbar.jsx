import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Container = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Logo = styled.img`
  background-color: white;
  border-radius: 50%;
  margin-left: 30px;
  height: 50px;
`;
export const Line = styled.div`
  height: 1px;
  width: 70%;
  background-color: white;
  opacity: 20%;
  margin-left: 50px;
  position: absolute;
  right: 800px;
  z-index: 2;
`;
export const Navigation = styled.div`
  height: 100%;
  width: 830px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
  position: absolute;
  display: flex;
  align-items: center;
`;

export const NavContainer = styled.div`
  display: flex;
  width: 90%;
  height: 100px;
  align-items: center;
  position: relative;
  justify-content: flex-end;
  overflow: hidden;
`;

export const Number = styled.span`
  color: white;
  margin-right: 15px;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  font-size: 16px;
`;

export const Text = styled.span`
  color: white;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 200;
  font-size: 16px;
`;

export const Links = styled.div`
  height: 100%;
  width: 650px;
  /* background-color: white; */
  margin-left: 100px;
  display: flex;
  justify-content: space-around;
`;

export const Link = styled(NavLink)`
  height: 95%;
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 200;
  font-size: 16px;
  z-index: 4;
  text-decoration: none;
  &:hover {
    border-bottom: 5px solid rgb(135, 135, 135);
    cursor: pointer;
  }
`;

export function Navbar() {
  return (
    <>
      <Container>
        <Logo src="src/assets/logo.svg"></Logo>
        <NavContainer>
          <Line></Line>
          <Navigation>
            <Links>
              <Link
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <Number>00</Number>
                <Text>HOME</Text>
              </Link>

              <Link
                to="/Destination"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <Number>01</Number>
                <Text>DESTINATION</Text>
              </Link>
              <Link
                to="/Crew"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <Number>02</Number>
                <Text>CREW</Text>
              </Link>
              <Link
                to="/Technology"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <Number>03</Number>
                <Text>TECHNOLOGY</Text>
              </Link>
            </Links>
          </Navigation>
        </NavContainer>
      </Container>
    </>
  );
}
