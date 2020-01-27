import React from 'react';
import {Link} from 'react-router-dom'

const userprofile = () => {
  return (
    
    <div className="user-panel mt-3 pb-3 mb-3 d-flex align-items-center">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt='no img'/>
        </div>
        <div className="info">
          <Link href="#" className="d-block">Alexander Pierce</Link>
          <Link href="#" className="d-block">RECP007</Link>

        </div>
      </div>

  );
}

export default userprofile;
