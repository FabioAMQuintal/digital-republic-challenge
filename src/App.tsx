import React from 'react';
import { FirstWall, SecondWall, ThirdWall, FourthWall, Form, Result } from './components/index';
import { GlobalStyle, ContainerInput, MainContainer, Room, Scene, ContainerContent } from './styles/index';


const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Scene>
          <Room>
            <FirstWall />
            <SecondWall />
            <ThirdWall />
            <FourthWall />
          </Room>
        </Scene>
        <ContainerContent>
          <ContainerInput>
            <Form />
          </ContainerInput>
          <ContainerInput>
            <Result />
          </ContainerInput>
        </ContainerContent>
      </MainContainer>
    </>
  )
};

export default App;