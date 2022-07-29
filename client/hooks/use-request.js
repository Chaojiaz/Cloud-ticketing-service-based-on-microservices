import axios from 'axios';
import { useState } from 'react';

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      //reset the error useState
      setErrors(null);
      const response = await axios[method](url, { ...body, ...props });

      if(onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(
      <div className="alert alert-danger">
        <h4>Oooops...</h4>
        <ul className="my-0">
          {err.response.data.errors.map(err => <li key={err.message}>{err.message}</li>)}
        </ul>
      </div>
      );
    }
  };
  /**
   * doRequest: a function evoke and run the request
   * error: a block of JSX, will capture all the errors will coming back from the api, and render out them out as
   * nice look JSX
   */
  return { doRequest, errors };
};