import React, {ReactNode} from "react";
// import "./Button.scss";
import styled from 'styled-components'
import { getConvertedClasses } from "../../libs/tailwindToCss";
import { defaultTheme,ITheme } from "../../libs/defaultTheme";

export interface IButton {
  children?:ReactNode;
  tailwindStyle?:string,
  cssStyle?:string,
  color?: "primary" | "secondary"| "error"| "warning"| "info"| "success";
  size?: "small" | "medium" | "large";
  state?: "contained" | "outlined" | "text";
  uppercase?:boolean;
  borderRadius?:number;
  rounded?:boolean;
}

type TButton = 
{
  props:{
    children?:ReactNode;
    tailwindStyle?:string,
    cssStyle?:string,
    color?:string,
    size?:string,
    state?:string,
    uppercase?:boolean,
    borderRadius?:number,
    rounded?:boolean,
  }

};


const tailwindToCss = (input:string) => {
  const resultCss = getConvertedClasses(input);
  return(resultCss);
};

const getStyle = (input:IButton) => {
  const {
          children,
          tailwindStyle="",
          cssStyle="",
          color="primary",
          size="small",
          state="contained",
          uppercase=false,
          borderRadius=5,
          rounded=false,
        }=input;

  const resultCss =`
      background: ${state === "contained"?defaultTheme.color[color as keyof ITheme]:"none"};
      ${state === "outlined"?"border: 1px solid " +defaultTheme.color[color as keyof ITheme]+";":"border:none;"}
      color: ${state !== "contained"?defaultTheme.color[color]:"#FFFFFF"};
      box-shadow: ${state === "contained"?"0px 4px 6px -4px rgba(58, 53, 65, 0.1), 0px 6px 10px -4px rgba(58, 53, 65, 0.08), 0px 4px 8px -4px rgba(58, 53, 65, 0.16);":"none"};
      ${uppercase?"text-transform: uppercase;":""}

      ${size === "small" ? "padding:4px 13px;font-size: 13px;line-height: 22px;":""}
      ${size === "medium" ? "padding:7px 22px;font-size: 14px;line-height: 24px;":""}
      ${size === "large" ? "padding:8px 26px;font-size: 15px;line-height: 26px;":""}

      border-radius: ${borderRadius}px;
      ${rounded?"border-radius:9999px;":""}
      cursor: pointer;

      ${tailwindToCss(tailwindStyle)}
      ${cssStyle}

  `

  return(resultCss);
};


const Button= (props:IButton) => {
  const {
    children,
    tailwindStyle="",
    color="primary",
    size="small",
    state="contained",
    uppercase=false,
    borderRadius=5
  }=props;

  return (
    <StyledButton props={props}>
      {children} 
    </StyledButton>
  );
};



const StyledButton = styled.button<TButton>`
  ${(p:any) => getStyle(p.props)};
`;

export default Button;
