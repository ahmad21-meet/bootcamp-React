import React  from 'react';

import Box3 from '../Component3/Box3'
import styled from 'styled-components';
const Box2 = styled.div`
   width: 400px;
   height: 400px;
   background-color: rgb(128, 126, 0);
   padding: 10px;
   margin: 5px;
   display: flex;
   align-items: center;
   justify-content: center;
   `;


function box2(props){
    return (
        <Box2 ><Box3></Box3></Box2>
        )
}

export default box2;