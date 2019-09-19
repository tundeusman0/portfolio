import React from 'react';
import { Link } from 'react-router-dom';
import pp from '../../pp.jpg';
import Status from './Status';
import Form from './Form';
import { editUser } from '../../actions/user';
import { connect } from 'react-redux';

export class User extends React.Component {
  render() {
    return (
      <div className="User">
        <Link to="/admin/admin">Back to Admin User</Link>
        <div>
          <Form
            formName="User Edit"
            editUser={{
              email: this.props.email,
              userName: this.props.userName
            }}
            history={this.props.history}
            submitForm={user => this.props.editUser(user)}
          />
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
const mapStateToProps = state => ({
  email: state.auth.user.email,
  userName: state.auth.user.userName
});
export default connect(
  mapStateToProps,
  { editUser }
)(User);
