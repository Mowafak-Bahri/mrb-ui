

export interface ITheme{
 color: {
  [index: string]: string;
}
}
export const defaultTheme:ITheme ={
  color:{
    "primary": "#9155FD",
    "secondary":"#8A8D93",
    "error":"#FF4C51",
    "warning": "#FFB400",
    "info":"#16B1FF",
    "success":"#56CA00",
  },
}
