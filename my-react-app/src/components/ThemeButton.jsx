// import { ThemeContext } from '../context/ThemeContext';

// const {Consumer} = ThemeContext;

// export const ThemeButton = () => {
//   return (
//     <Consumer>
//       {theme => <button theme={theme}>I am styled by the theme context!</button>}
//     </Consumer>
//   );
// }

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeButton = () => {
    const theme = useContext(ThemeContext);

    return <button theme={theme}>I am styled by the theme context!</button>;
}