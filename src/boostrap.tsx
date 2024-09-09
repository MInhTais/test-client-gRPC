import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'remixicon/fonts/remixicon.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './app/components/GlobalStyles'
import { AppProvider } from './app/shared/AppContext'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <GlobalStyles>
                    <AppProvider>
                        <App />
                        <ReactQueryDevtools initialIsOpen={false} />
                    </AppProvider>
                </GlobalStyles>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
)
