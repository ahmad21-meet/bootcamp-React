import React from 'react';
import  '../component/box.css';
const FavoriteColor = () => {
    const [isAppear , setIsApper] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setIsApper(!isAppear)
        },4000)
        });
    

    const randomValue = Math.floor(Math.random() * 200);

    return (
        <div className='box' style={{height: randomValue+'px', width: randomValue+'px', backgroundColor: 'red', display: isAppear ? 'block' : 'none'}}  >
        </div>
    );
}
export default FavoriteColor;