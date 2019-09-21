import React from 'react';
import { Link } from 'react-router-dom';
import Status from './Status';
import Form from './Form';
import { editUser, postImage, deleteSkills } from '../../actions/user';
import { connect } from 'react-redux';
import Skills from './Skills';

export class User extends React.Component {
  state = {
    file: null,
    imagePreviewUrl: ''
  };
  formSubmit = e => {
    e.preventDefault();
    const { file } = this.state;
    const data = new FormData();
    data.append('upload', file);
    this.props.postImage(data);
  };
  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="imagePreview" />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }
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
          <Status history={this.props.history} />

          <div className="form_wrapper" style={{ margin: 5 }}>
            <div className="form_container">
              <div className="title_container">
                <div className="row clearfix">
                  <img src={'/api/user/homePix'} alt="home-pix2" />
                  <div className="">
                    <form onSubmit={this.formSubmit}>
                      <input
                        type="file"
                        onChange={e => this.handleImageChange(e)}
                      />
                      <input
                        className="button"
                        type="submit"
                        value={this.props.formName}
                      />
                    </form>
                    <div className="imgPreview">{$imagePreview}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>Skills</div>
          <div>Post Skills</div>
          <Skills formName="Post Skill" history={this.props.history} />

          <div>
            {this.props.skills ? (
              <ul>
                {this.props.skills.map((skill, ind) => (
                  <li key={ind}>
                    <Link to={`/admin/skills/${skill._id}`}>
                      {skill.skill} <span>{skill.rating}</span>
                    </Link>
                    <button onClick={() => this.props.deleteSkills(skill._id)}>
                      Delete Skill
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No Skills</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  email: state.auth.user.email,
  userName: state.auth.user.userName,
  skills: state.auth.user.skills
});

export default connect(
  mapStateToProps,
  { editUser, postImage, deleteSkills }
)(User);
