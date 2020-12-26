import React,{useState} from 'react'
import "./Filter.css";
import StarRatingComponent from "react-star-rating-component";


const Filter = ({getInput}) => {
    const [searchInput,setSearchInput] = useState('')
    const [rate, setRate] = useState(0)

    const handleInput = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
        getInput(e.target.value,rate)
    }
    const onStarClick = (e) => {
        setRate(e)
        getInput(searchInput,e)
    }
    
    return (
        <div>
            <label className="search" >search</label>
            <input 
                className="search" 
                type='text' 
                value={searchInput} 
                onChange={handleInput} 
                placeholder="Title or Rate" 
            />
            <StarRatingComponent 
                className="search"
                name="rate" 
                starCount={5}
                value={rate}
                onStarClick={onStarClick}
            />
        </div>
    )
}

export default Filter
