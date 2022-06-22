import styled from "styled-components";

interface ITeste {
    deactivated?: string
}

const CounterButton = styled.button<ITeste>` 
    appearance: none;
    background: none;
    font-size: 1.3em;
    outline: none;
    border: 2px solid transparent;
    width: 12%;
    color: black;
    cursor: ${props => props.deactivated ? "not-allowed" : "pointer"};
    background-color: #DBF1FF;
    border-radius: 5px;
    transition: all 0.15s;
    box-shadow: 1px 1px 1px 1px;
`;

export default CounterButton;

//not allowed