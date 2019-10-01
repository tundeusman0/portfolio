import React from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {
  state = {
    headline: this.props.blog ? this.props.blog.headline : '',
    detail: this.props.blog ? this.props.blog.detail : '',
    msg: null
  };
  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'Logo Fail') {
        this.setState({ msg: error.msg });
      } else {
        this.setState({ msg: null });
        this.props.history.push('/admin/blog');
      }
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    const { headline, detail } = this.state;
    const blog = { headline, detail };
    e.preventDefault();
    if (this.formName === 'Edit Blog') {
      this.props.formSubmit(blog);;
    } else {
      this.props.formSubmit(blog);
    }
  };
  render() {
    return (
      <div className="User arrange">
        <div className="form_wrapper" style={{ margin: '5px' }}>
          <div className="form_container">
            <div className="title_container">
              {this.state.msg && <p>{this.state.msg}</p>}
              <h2>{this.props.formName}</h2>
              <div className="row clearfix">
                <div className="">
                  <form onSubmit={this.onSubmit}>
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fas fa-pencil-alt"></i>
                      </span>
                      <input
                        type="text"
                        placeholder={'Head Line'}
                        value={this.state.headline}
                        onChange={this.onChange}
                        name={'headline'}
                        required
                      />
                    </div>

                    <div className="textarea_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-message"></i>
                      </span>
                      <textarea
                        type="text"
                        placeholder="Start Bloging."
                        value={this.state.detail}
                        onChange={this.onChange}
                        name="detail"
                        required
                      ></textarea>
                    </div>

                    <input
                      className="button"
                      type="submit"
                      value={this.props.formName}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.authError
});

export default connect(mapStateToProps)(Form);
