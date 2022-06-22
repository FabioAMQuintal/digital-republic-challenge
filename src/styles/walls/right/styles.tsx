import styled from "styled-components";

const RightWallShape = styled.div`
    background: #A9CADE;
    position: absolute;
    border: 1px solid;
    
    

    height: 100px;
    width: 160px;
    left: 50%;
    top: 50%;
    transform: translate(-90%, 0) rotateY(-90deg) translate3d(0, 0, calc(250px * -0.5));

    &:hover {
        transform: translate(-90%, 0) rotateY(90deg) translate3d(0, -15%, calc(250px * 0.5));
    }

`;

export default RightWallShape;