import React from 'react';
import axios from 'axios';

class Blog extends React.Component {
  state = {
    img: ''
  };
  componentDidMount() {
    axios
      .get(`api/blog/pix/${this.props.id}`)
      .then(res => this.setState({ img: res.data }));
  }
  render() {
    const { img } = this.state;
    const { headline, details } = this.props;
    return (
      <div>
        {img && <img src={`/api/blog/pix/${this.props.id}`} alt="blog-pix" />}
        <p className="headline">{headline}</p>
        <div dangerouslySetInnerHTML={{ __html: details }} />
      </div>
    );
  }
}

export default Blog;
