import React from "react";
import {MovieSlider, ItemImage, ItemIMG, ItemTitle, MovieListItem} from "./MovieItem.Styled";
import {Link} from "react-router-dom";

function MovieItem(props) {
    const {item, settings} = props;

    return (
        <MovieSlider {...settings}>
            {
                item.length && item.map((i) => {
                    return (
                        <MovieListItem key={i.id}>
                            <Link to={`/detail/${i.id}`}>
                                <ItemImage>
                                    <ItemIMG src={i.large_cover_image} alt={i.title}/>
                                </ItemImage>
                                <ItemTitle className="e_">{i.title}</ItemTitle>
                            </Link>
                        </MovieListItem>
                    )
                })
            }
        </MovieSlider>
    )
}


export default MovieItem;