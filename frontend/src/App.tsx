/* eslint-disable */
/* prettier-ignore */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/Layout/App'
import HomeLayout from './components/Layout/Home'
import DeployPage from './pages/Deploy'
import HomePage from './pages/Home'
import TokenPage from './pages/Token'
import TokensPage from './pages/Tokens'
import WalletRedirect from './pages/WalletRedirect'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <HomeLayout>
        <HomePage />
      </HomeLayout>
    ),
  },
  // {
  //   path: '/deploy',
  //   element: (
  //     <AppLayout>
  //       <DeployPage />
  //     </AppLayout>
  //   ),
  // },
  // {
  //   path: '/tokens',
  //   element: (
  //     <AppLayout>
  //       <TokensPage />
  //     </AppLayout>
  //   ),
  // },
  // {
  //   path: '/token/:address',
  //   element: (
  //     <AppLayout>
  //       <TokenPage />
  //     </AppLayout>
  //   ),
  // },
  {
    path: '/wallet-redirect/:redirectUrl',
    element: <WalletRedirect />,
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
