import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from './constants/routes'
import MainLayout from './layouts/MainLayout'

const Home = lazy(() => import('./pages/Home'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={ROUTES.HOME} element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
