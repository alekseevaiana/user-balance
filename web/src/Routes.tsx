// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'
import UserBalancePage from './pages/UserBalancePage'

const Routes = () => {
  return (
    <Router>
      <Route name="User balance" path="/balance" page={UserBalancePage} />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
