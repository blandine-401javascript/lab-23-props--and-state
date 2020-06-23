import React from 'react';

const Form = ({ reqType, url, reqBody, updateState, submitButton }) => {
  return (
    <div className='form'>
      <div className='form-top'>
        <select
          id='reqType'
          value={reqType}
          onChange={(e) => updateState('reqType', e.target.value)}
        >
          <option value='GET'>GET</option>
          <option value='POST'>POST</option>
          <option value='PUT'>PUT</option>
          <option value='DELETE'>DELETE</option>
        </select>
        <input
          id='url'
          type='text'
         
          value={url}
          onChange={(e) => updateState('url', e.target.value)}
        />
        <button type='submit' id='submit' onClick={submitButton}>
          Submit
        </button>
      </div>
      <div className='form-bottom'>
        <textarea
          id='reqBody'
          
          rows='6'
          value={reqBody}
          onChange={(e) => updateState('reqBody', e.target.value)}
        />
      </div>
    </div>
  );
};

export default Form;