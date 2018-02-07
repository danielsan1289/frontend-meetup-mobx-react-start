import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      loading: false
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ loading: true })
    setTimeout(() => {
      window.fetch(`https://api.github.com/users/${this.state.value}`)
      .then(res => res.json())
      .then(user => {
        this.setState({ loading: false })
        this.props.handleUser(user)
      })
    }, 2500)
  }

  render() {
    const { value, loading } = this.state
    return (
      <form onSubmit={this.handleSubmit} className="search">
        <label>
          github account:
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        {loading && <span>{`Loading ${this.state.value} account...`}</span>}
      </form>
    )
  }
}

export default SearchBar
