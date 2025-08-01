import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddShows from './pages/admin/AddShows'
import ListShows from './pages/admin/ListShows'
import ListBookings from './pages/admin/ListBookings'

const App = () => {

  //to identify the admin path
  const isAdminRoute = useLocation().pathname.startsWith('/admin');


  return (
    <>
      <Toaster/>
      {/* When we are on users pages then we have to show the navbar and Footer and for admin its hidden */}
      { !isAdminRoute && <Navbar/>} 
      <Routes>
        {/* routes for user */}
        <Route path='/' element={ <Home/> }/>
        <Route path='/movies' element={ <Movies/> }/>
        <Route path='/movies/:id' element={ <MovieDetails/> }/>
        <Route path='/movies/:id/:date' element={ <SeatLayout/> }/>
        <Route path='/my-bookings' element={ <MyBookings/> }/>
        <Route path='/favorites' element={ <Favorite/> }/>
        {/* Routes for admin */}
        <Route  path='/admin/*' element={ <Layout/> }> {/* for all paths starting from /admin the layout component is displayed */}
          <Route index element={ <Dashboard/> } />
          <Route path='add-shows' element={ <AddShows/> } />
          <Route path='list-shows' element={ <ListShows/> } />
          <Route path='list-bookings' element={ <ListBookings/> } />
        </Route>
      </Routes>
      { !isAdminRoute && <Footer/>}
    </>
  )
}

export default App