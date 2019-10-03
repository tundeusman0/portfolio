import React from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { connect } from 'react-redux';

class RichEditor extends React.Component {
  state = {
    headline: this.props.blog ? this.props.blog.headline : '',
    detail: this.props.blog ? this.props.blog.detail : '',
    editorState: EditorState.createEmpty(),
    msg: null
  };
  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'Blog Fail') {
        this.setState({ msg: error.msg });
      } else {
        this.setState({ msg: null });
        this.props.history.push('/admin/blog');
      }
    }
  }

  onChange = e => this.setState({ headline: e.target.value });
  onEditorStateChange = editorState =>this.setState({ editorState });
  handleSubmit = e => {
    e.preventDefault();
    const headline = this.state.headline;
    const detail = draftToHtml(
      convertToRaw(this.state.editorState.getCurrentContent())
    );
    this.props.formSubmit({ headline, detail });
  };
  componentDidMount() {
    if (this.props.formName === 'Edit Blog') {
      const blocksFromHtml = htmlToDraft(this.state.detail);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      const editorState = EditorState.createWithContent(contentState);
      this.setState({ editorState });
    }
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className="formEditor">
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
                    <Editor
                      editorState={editorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      onEditorStateChange={this.onEditorStateChange}
                    />
                    <input
                      className="button"
                      type="submit"
                      value={this.props.formName}
                      onClick={this.handleSubmit}
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

// export default RichEditor;
const mapStateToProps = state => ({
  error: state.authError
});

export default connect(mapStateToProps)(RichEditor);
