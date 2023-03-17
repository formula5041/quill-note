// components
import Search from './components/layout/Search'
import ArticleBlock from './components/layout/ArticleBlock'
import './App.css'

function App() {

  return (
    <section className="section-search">
      <Search/>
      <div className='articleBlock-container-style'>
        <ArticleBlock
          icon='FaApple'
          title='How Apple Become A Big Company?'
          content='When the 10 years age...'
        />
        <ArticleBlock
          icon='FaAmazon'
          title='Amazon Will Change The Shopping Style.'
          content='technology-content'
        />
        <ArticleBlock
          icon='FaAmazon'
          title='Who Is The Next CEO In Amazon?'
          content='technology-content'
        />
        <ArticleBlock
          icon='FaTwitter'
          title='Twitter Is Better than Facebook?'
          content='technology-content'
        />
        <ArticleBlock
          icon='FaGithub'
          title='Which Git Control Application Is Faster And Efficiency?'
          content='technology-content'
        />
      </div>
    </section>
  )
}

export default App
