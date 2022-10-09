import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundView from '../views/Auth/NotFound/NotFoundView'
import HomeUserView from '../views/User/Home/HomeUserView'

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/'>
					<Route index element={<HomeUserView />} />
				</Route>
				<Route path="*" element={<NotFoundView />} />
			</Routes>
		</BrowserRouter>
	)
}

export default MainRouter
