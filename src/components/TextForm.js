import React, { useState } from 'react';
export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Convert uppercase','success') 
    }
    const handleLowerClick = () => {
        let newText = text.toLocaleLowerCase()
        setText(newText)
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const handleCopy = (e) => {
        navigator.clipboard.writeText(text)
        props.showAlert('Copied','successfully')
    }
    return (
        <>
            <div className='container' style={{color : props.mode === 'dark' ? 'grey' : 'black'}}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="5" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'yellow' : 'green' }} ></textarea>
                </div>
                <button type="button" className='btn btn-primary' onClick={handleUpClick}>Convert To UpperCase</button>
                <button type="button" className='btn btn-primary mx-3' onClick={handleLowerClick}>Convert To LowerCase</button>
                <button type="button" className='btn btn-primary mx-3' onClick={handleCopy}>Copy Textarea</button>
            </div>
            <div className="container my-5" style={{color : props.mode === 'dark' ? 'grey' : 'black'}}>
                <p className='my-3'>{text.length === 0 ? 0 : text.split(' ').length} words and {text.length} characters</p>
                <p className='my-3'>{text.length === 0 ? 0 : (text.split(' ').length) * 0.008} Min. Read</p>
                <h3>Preview</h3>
                <p className='my-3'>{text.length > 0 ? text : 'Write something in the text area.'}</p>
            </div>
        </>
    )
}

// one {} for script and another for object.