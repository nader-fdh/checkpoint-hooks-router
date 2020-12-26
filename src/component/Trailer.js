import React from 'react'

const Trailer = ({filteredList,match}) => {
  
    const trai = filteredList.filter((movie) => movie.id == match.params.id)
  
    let show;
    let video;
    if (trai.length > 0) {
        show = <> <p>{trai[0].description} </p> </>
        video = <iframe width="560" height="315" src={trai[0].trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    } 
    
    return (
        <div>
           
            <p>{show} </p>
            {video}
        </div>
    )
}

export default Trailer
