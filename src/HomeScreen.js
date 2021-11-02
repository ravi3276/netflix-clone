import React from 'react'
import Banner from './Banner'
import './HomeScreen.css'
import Nav from './Nav'
import Row from './Row'
import requests from './request'
function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* nav */}
            <Nav />

            {/* bannaer */}
            <Banner />

            {/* rows */}
            <Row title="netflix originals" Urls={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title="trending now" Urls={requests.fetchTrending}/>
            <Row title="top rated" Urls={requests.fetchTopRated}/>
            <Row title="action movies" Urls={requests.fetchActionMovies}/>
            <Row title="comedy movies" Urls={requests.fetchComedyMovies}/>
            <Row title="horror movies" Urls={requests.fetchHorrorMovies}/>
            <Row title="romantic movies" Urls={requests.fetchRomanceMovies}/>
            <Row title="documentaries" Urls={requests.fetchDocumentaries}/>

        </div>
    )
}

export default HomeScreen
