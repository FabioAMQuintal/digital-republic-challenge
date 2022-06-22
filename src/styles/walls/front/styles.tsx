import styled from "styled-components";

const FrontWallShape = styled.div`
    background: #A9CADE;
    position: absolute;
    border: 1px solid;

    height: 100px;
    width: 100px;
    transform: translate(-65%, 0) translate3d(0, 0, calc(160px * 0.5));


    &:hover {
        transform: translate(-65%, 0) translate3d(0, -15%, calc(160px * 0.5))
    }
    
`;

export default FrontWallShape;