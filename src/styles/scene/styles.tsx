import styled from "styled-components";

const Scene = styled.div`
  height: 40vh;
  width: 100%;
  //background-color: #D3EFFF;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 400px) {
    height: 40vh;
  }
`;

export default Scene;