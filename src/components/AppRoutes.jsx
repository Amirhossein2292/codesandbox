import { Routes, Route} from 'react-router-dom'
import { Category, Home } from '../Pages'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:categoryId' element={<Category />} />
        </Routes>
    </div>
  )
}

export default AppRoutes