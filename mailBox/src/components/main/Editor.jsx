import React,{useRef, useState} from 'react'
import JoditEditor from 'jodit-react'


function Editor() {
    
    const editor = useRef(null);

    const [content, setContent] = useState("");


    return (
        <div>
            <JoditEditor
                className='text-black my-10'
                ref={editor}
                value={content}
                onChange={newContent=>setContent(newContent)}
            />
        </div>
    )
}

export default Editor
