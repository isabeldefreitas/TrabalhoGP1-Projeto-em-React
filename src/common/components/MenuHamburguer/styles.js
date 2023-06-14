import styled from "styled-components";

export const Menu = styled.nav`
  width: 275px;
  height: 300px;
  background-color: #D3D3D3;
  position: absolute;
  top: 1;
  right: 0;
  
  

  ul {
    margin: 0;
    
  }
  
`;

export const Container = styled.div`
  background-color: #121212;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 300px;
  right: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;


