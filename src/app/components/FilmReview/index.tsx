import { FunctionComponent } from "react";
import { Review } from "@/app/interfaces";

interface Props {
    reviews: Review[]
}

export const FilmReview: FunctionComponent<Props> = ({ reviews }) => {
    return (
        <div>
            {
                Boolean(reviews.length) && reviews.map((review) => (
                    <div key={review.id}>
                        <span>{review.author}</span>
                        <span>{review.text}</span>
                        <span>{review.rating}</span>
                    </div>
                ))
            }
        </div>
    );
}