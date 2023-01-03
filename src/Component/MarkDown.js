import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Markdown() {
  const [markdown, setMarkdown] = useState("");
  return (
    <div className="container my-5 py-5 bg-dark">
      <div className="row" >
        <div className="col-6">
          <div>
            <textarea
              type="text"
              cols="60"
              rows="20"
              onChange={(e) => setMarkdown(e.target.value)}
            />

          </div>
        </div>
        <div className="col-6">
          <div className="card h-100">
          <ReactMarkdown >{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>

  );
}
