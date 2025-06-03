
import { useState } from 'react'
import './App.css'
import Nickify from './component/Nickify'

function App() {
  const [content, setContent] = useState<string>('')

  return (
    <>
      <Nickify setContent={setContent} isAiEnabled={true} />
      <article
        className="max-w-4xl p-2 pb-4 border-dotted border-b-2 border-gray-300 tiptap"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {content}
    </>
  )
}

export default App
