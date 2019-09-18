// import React from 'react';

// const User = () => {
//   return (
//     <div>
//       <h1>Tunde Usman</h1>
//     </div>
//   );
// };

// export default User;

import React from 'react';
import { Link } from 'react-router-dom';
import pp from '../../pp.jpg';
import Status from './Status';
import Form from './Form';

export class User extends React.Component {
  render() {
    return (
      <div className="User">
        <div>
          <Form formName="User Edit" />
          {
            // <div className="form_wrapper">
            //     <div className="form_container">
            //         <div className="title_container">
            //             <div className="row clearfix">
            //                 <div className="">
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
          }
          <Status />
          <img src={pp} alt="home-pix" />
          <form onSubmit={this.formSubmit}>
            <input type="file" />
          </form>
          <Link to={`/edit-skills/`}>Skills</Link>
        </div>
      </div>
    );
  }
}

export default User;
