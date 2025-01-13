import { useState } from 'react'
import './App.css'
import 'bootstrap//dist/css/bootstrap.min.css'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'
import { use } from 'react'
import { fetchChatResponse } from './services/api'
import { Circles, Vortex } from 'react-loader-spinner'

function App() {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleQuestionSubmit = async (question) => {

    setLoading(true);
    setResponse(response);
    try {
      const apiResponse = await fetchChatResponse({ question });
      setResponse(apiResponse);

    } catch (error) {
      alert("Fetching data fails...")
    }
    finally {
      setLoading(false);
    }

  }

  return (
    <>
      <div className='App' >
        <header className='bg-primary text-white text-center py-4'>
          <h1 className="wave-animation">
            <span>C</span>
            <span>h</span>
            <span>i</span>
            <span>t</span>
            <span>-</span>
            <span>C</span>
            <span>h</span>
            <span>a</span>
            <span>t</span>
            <span> </span>
            <span>B</span>
            <span>o</span>
            <span>t</span>
          </h1>

        </header>
        <div className="main">
          <div className="mainContainer">
            <ChatInput onSubmit={handleQuestionSubmit} />
            {loading ? (<div className='text-center py-4'>
              <Vortex
                visible={true}
                height="400"
                width="400"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
              />
            </div>)
              : <ChatResponse response={response} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
