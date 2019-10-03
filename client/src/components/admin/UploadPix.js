import React from 'react';

class ResumePix extends React.Component {
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
      $imagePreview = (
        <div className="smallerImage">
          <img src={imagePreviewUrl} alt="imagePreview" />
        </div>
      );
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }
    return (
      <div className="formEditor">
        <div className="form_wrapper" style={{ margin: 5 }}>
          <div className="form_container">
            <div className="title_container">
              <div className="row clearfix">
                <div className="smallerImage">
                  <img src={this.props.pixSrc} alt="home-pix2" />
                </div>
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
      </div>
    );
  }
}

export default ResumePix;
