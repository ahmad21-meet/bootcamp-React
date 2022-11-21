import React  from 'react';
import Box2 from '../Component2/Box2'


    
const Box = styled.div`
width: 500px;
height: 500px;
background-color: teal;
padding: 10px;
margin: 5px;
display: flex;
align-items: center;
justify-content: center;
`;
function box1(props){
    return (
        <Box><Box2></Box2></Box>
        )
}

export default box1;