import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
    let { id, media_type } = useParams();
    const [itemDetails, setItemDetails] = useState({});
    const [genres,setGenres]=useState([])

    const getDetails = async (id, media_type) => {
        let { data } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}?api_key=7e77eeccc2cab16be50d42b3937f0c2b`
        );
        setItemDetails(data);
        setGenres(data.genres)
    };
    
    useEffect(() => {
        getDetails(id, media_type);
    }, []);

    

return (
    <>
      <div className="row mt-5 ">
        <div className="col-md-4">
        {itemDetails.poster_path ? 
            <img className="w-100 rounded"src={"https://image.tmdb.org/t/p/w500" + itemDetails.poster_path} alt="..."/>:
            <img className="w-100 rounded"src={"https://image.tmdb.org/t/p/w500" + itemDetails.profile_path} alt="..."/>
        }
        </div>
        <div className="col-md-8">
            <h2 className=" mt-4 ">{itemDetails.title}{itemDetails.name}</h2>
            <p className="text-muted my-2 py-2">{itemDetails.overview} {itemDetails.biography}</p>
            {genres ? 
            <div className="d-flex ">{genres.map((item)=>{
            return <p key={item.id} className="genre p-1 rounded mx-2">{item.name}</p>
            })}</div>:""}
            {itemDetails.vote_average ? <div className="my-3 ">Vote :<span className="text-secondary">{itemDetails.vote_average}</span></div>:""}
            {itemDetails.vote_count?<div  className="my-3">Vote Count :<span className="text-secondary">{itemDetails.vote_count}</span></div>:<div>Birth Date :<span className="text-secondary">{itemDetails.birthday}</span></div>}
            {itemDetails.popularity?<div  className="my-3">Popularity :<span className="text-secondary">{itemDetails.popularity}</span></div>:""}
            {itemDetails.release_date?<div className="my-3">Release Date :<span className="text-secondary">{itemDetails.release_date}</span></div>:""}
            
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
