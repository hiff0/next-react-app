import React from "react"
import { Films } from "./components/Films"
import { FilmDetails } from "./components/FilmDetails"

const filmDetails = {
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
      rating: '10',
    }
  ]
}

export default function Home() {
  return (
    <div>
      <header />
      <FilmDetails
        title={filmDetails.title}
        genre={filmDetails.genre as 'comedy'}
        seasonsCount={filmDetails.sesonsCount} />
      {/* <Reviews />
      <Recommendations />
      <footer /> */}
    </div>
  )
}
