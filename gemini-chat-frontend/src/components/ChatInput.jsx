import { useState } from "react";

const ChatInput = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question);
      setQuestion('');
    }
  }

  return (

    <div className="inputContainer p-2 text-white bg-opacity-10 my-4 px-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="header py-3" htmlFor="question">Enter a Prompt</label>
          <textarea type="text"
            className="form-control py-2"
            id="question"
            placeholder="Enter Here"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        
        <button type="submit" className="btn btn-primary my-3">Submit</button>
      </form>
    </div>
  )
}

export default ChatInput;