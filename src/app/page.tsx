import React, { useMemo } from "react"
import { FilmDetails } from "./components/FilmDetails"
import { FilmReview } from "./components/FilmReview"
import { ReviewForm } from "./components/ReviewForm"
import { FilmDetails as FilmDetailsInterface } from "./interfaces"

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
    <div>
      <header />
      <FilmDetails
        title={filmDetails.title}
        genre={filmDetails.genre as 'comedy'}
        seasonsCount={filmDetails.sesonsCount} />
      <FilmReview reviews={filmDetails.reviews}/>
      <ReviewForm />
    </div>
  )
}
