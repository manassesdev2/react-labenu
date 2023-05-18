import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import LoginPage from '../pages/LoginPage'
import ErrorPage from '../pages/ErrorPage'

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/profile/:name" element={<ProfilePage/>}/>
                <Route path="/login/:name" element={<LoginPage/>}/>
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    )
}