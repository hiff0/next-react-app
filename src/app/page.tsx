"use client"

import React, { useMemo, createContext } from "react"
import { FilmDetails } from "./components/FilmDetails"
import { FilmReview } from "./components/FilmReview"
import { ReviewForm } from "./components/ReviewForm"
import { FilmDetails as FilmDetailsInterface } from "./interfaces"
import { CompoundComponent } from "./components/CompoundComponent"

const filmDetails: FilmDetailsInterface = {
  id: 'awdsadwqewq2321fds',
  title: 'The Simpsons',
  sesonsCount: 33,
  genre: 'comedy',
  similar: [
    {
      id: 'sa54345vfdf543fvd',
      title: 'South Park',
    }
  ],
  reviews: [
    {
      id: 'xc4762fsdf5',
      author: 'VP',
      text: 'Good!',
      rating: 10,
    }
  ]
}

export const ThemeContext = ((): React.Context<number> => {
  const ThemeContext = createContext(1);
  return ThemeContext;
})();

export default function Home() {
  // useMemo - инструмент создания стабильных ссылок на объекты и массивы
  // useCallback - на функции
  // const filmRating = useMemo(() => {
  //   return Math.floor(
  //     filmDetails.reviews.reduce((sum, review) => {
  //       return sum + review.rating
  //     }, 0) / filmDetails.reviews.length
  //   )
  // }, [filmDetails.reviews])

  return (
    <ThemeContext.Provider value={1}>
      <div>
        <header />
        <FilmDetails
          title={filmDetails.title}
          genre={filmDetails.genre as 'comedy'}
          seasonsCount={filmDetails.sesonsCount} />
        <FilmReview reviews={filmDetails.reviews}/>
        <ReviewForm />
        < CompoundComponent />
      </div>
    </ThemeContext.Provider>
  )
}
