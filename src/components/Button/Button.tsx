import React, { PropsWithChildren } from "react";
// import "./Button.scss";
import styled from 'styled-components'

export interface IButton {
  color?: "primary" | "secondary"| "error"| "warning"| "info"| "success";
  size?: "small" | "medium" | "large";
  state?: "contained" | "outlined" | "text";
  uppercase?:boolean;
  borderRadius?:number;
}

const cssValue ={
  color:{
    "primary": "#9155FD",
    "secondary":"#8A8D93",
    "error":"#FF4C51",
    "warning": "#FFB400",
    "info":"#16B1FF",
    "success":"#56CA00",
  },
}

const Button = ({ children, color="primary",size="small",state="contained",uppercase=false,borderRadius=5 }: PropsWithChildren<IButton>) => {
  let cssSize = ""
  switch(size) {
    case "small":
      cssSize += `padding:4px 13px;font-size: 13px;line-height: 22px;`
      break;
    case "medium":
      cssSize += `padding:7px 22px;font-size: 14px;line-height: 24px;`
      break;
    case "large":
      cssSize += `padding:8px 26px;font-size: 15px;line-height: 26px;`
      break;
  }

  const StyledButton = styled.button`
  background: ${state === "contained"?cssValue.color[color]:"none"};
  ${state === "outlined"?"border: 1px solid " +cssValue.color[color]:"border:none"};
  color: ${state !== "contained"?cssValue.color[color]:"#FFFFFF"};
  box-shadow: ${state === "contained"?"0px 4px 6px -4px rgba(58, 53, 65, 0.1), 0px 6px 10px -4px rgba(58, 53, 65, 0.08), 0px 4px 8px -4px rgba(58, 53, 65, 0.16);":"none"};
  ${uppercase?"text-transform: uppercase;":""};
  ${cssSize}
  border-radius: ${borderRadius}px;
  cursor: pointer;
  `

  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
};

export default Button;
