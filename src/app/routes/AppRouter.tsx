import { useRoutes } from 'react-router-dom'
import Error404 from '../errors/Error404'
import HelloTestPage from '../pages/HelloTestPage'
import HomeTestPage from '../pages/HomeTestPage'
import GrpcPage from '../pages/GrpcPage'
import DegreeCatalogPage from '../pages/DegreeCatalogPage'

export const AppRouter = () => {
    return useRoutes([
        {
            path: '/test',
            element: <HomeTestPage />
        },
        {
            path: '/test/:id',
            element: <HelloTestPage />
        },
        {
            path: '/grpc',
            element: <GrpcPage />
        },
        {
            path: '/',
            element: <DegreeCatalogPage />
        },
        {
            path: '/query',
            element: <DegreeCatalogPage />
        },
        {
            path: '*',
            element: <Error404 />
        }
    ])
}
