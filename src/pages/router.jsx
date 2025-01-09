import React from "react"
import { Route, Routes } from "react-router"
import pagesData from "./pagesData.jsx"

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }) => {
    return <Route key={title} path={`/${path}`} element={element} />
  })

  return <Routes>{pageRoutes}</Routes>
}

export default Router