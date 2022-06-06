import './Square.css';
import React, { useEffect } from 'react';

function Square(props) {
    let text = props.grid[props.num]
    const handleClick = (e) => {
        const num = props.num
        props.setGrid({...props.grid, [num]: 'x'})
        console.log(props.grid)


    }
    
      return (
        <div className='square'>
            <button type="submit" onClick={()=>handleClick(props.num)}>
                <span>{text}</span>
            </button>

        </div>
    );
}

export default Square;