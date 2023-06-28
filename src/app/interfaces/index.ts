
export interface Similar {
    id: string;
    title: string;
};

export interface Review {
    id: string;
    author: string;
    text: string;
    rating: number;
};

export interface FilmDetails {
    id: string;
    title: string;
    sesonsCount: number;
    genre: string;
    similar: Similar[];
    reviews: Review[];
}