import React from "react";
import styled from "styled-components";

const Input = styled.input`
	padding: 0.5em;
	color: #000000;
	background: #CCCCCC;
	border: none;
	border-radius: 3px;
	width: 75%;
	margin: 0.5em 0.5em 0.2em 0.5em;
	
	input[type="number"]::-webkit-outer-spin-button,
	input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
`;

export default Input;