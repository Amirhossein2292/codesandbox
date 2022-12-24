import { Layout } from 'antd'
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import { AppFooter, AppHeader, PageContent } from './components'
const App = () => {

  
  return (
    <div className="App" dir='rtl'>
      <Router>
        <Layout>
          <AppHeader />
          <PageContent />
          <AppFooter />
        </Layout>

      </Router>
    </div>
  )
}

export default App