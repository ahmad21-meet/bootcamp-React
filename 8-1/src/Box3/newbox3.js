import React  from 'react';

import Box4 from '../Component4/Box4'
import styled from 'styled-components';
const Box3 = styled.div`
   width: 300px;
   height: 300px;
   background-color: rgb(113, 0, 128);
   padding: 10px;
   margin: 5px;
   display: flex;
   flex-direction: column; 
   align-items: center;
   justify-content: center; 
`;function box3(props){
    return (
        <Box3>
        <Box4></Box4>
        <Box4></Box4>
     </Box3>    )
}

export default box3;