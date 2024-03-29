import React from 'react';
import styles from 'styled-components'; // импорт css

const Buttton = styles.button `
width: 100%;
font: inherit;
padding: 0.5rem 1.5rem;
border: 1px solid #8b005d;
color: white;
background: #8b005d;
box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
cursor: pointer;

@media (min-width: 700px) {
width: auto;
}

&:focus {
outline: none;
}

&:hover,
&:active {
background: #ac0e77;
border-color: #ac0e77;
box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}
`;
// styled component метов css

// const Button = props => {
//   return (
//     <button type={props.type} className={styles.button} onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Buttton;
