import React, { Component } from 'react';

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit (event) {
    event.preventDefault();
    const { filter, responses } = this.props;
    filter(this.state.value, responses);
  }

  // TODO add zip code validation
  /* TODO add responsiveness so that hero image and form appear side by side
  when viewport is over a certain width, instead of overlaying */
  render () {
    return (
      <div className='hero-image'>
        <h1> Austin's Most Dangerous Dogs </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <div>
              Is there a dangerous dog living near you?
            </div>
            <input
              type='text'
              value={this.state.value}
              placeholder='78757...'
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='Find by Zip Code' disabled={!this.state.value} />
        </form>
        <input type='button' className='button' onClick={this.props.showAll} value='Show All Dogs' />
      </div>
    );
  };
}

export default Header;
