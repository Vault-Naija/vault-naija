import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/Inter/Inter-Regular.woff');
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('/fonts/Inter/Inter-SemiBold.ttf');
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/fonts/Inter/Inter-Bold.ttf');
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/Inter/Inter-ExtraBold.ttf');
}

 *{
  ::-webkit-scrollbar {
    width: 0.5rem;
    height:0.5rem;
   
  }
  ::-webkit-scrollbar-track {
    background: #ddd;
    
  }
   
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primaryColor}; 
    border-radius: 0.3rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primaryColor};
  }
 }
 *,
  *::after,
  *::before {
      margin:0;
      padding:0;
      box-sizing:inherit;
      font-family: Inter; 
  }
  html{
      font-size:62.5%;
      
  }
body {
  font-family: 'Jost', sans-serif;
   font-style: normal;
    box-sizing:border-box;
    color:${({ theme }) => theme.color} ;
    background-color:${({ theme }) => theme.body} ;
    /* background-color:#F3EFE9; */
   
      @media(max-width: 568px) {
      overflow-x: hidden;
  }

  }
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
}
input[type=number] {
  -moz-appearance: textfield;
}



input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}      
`
