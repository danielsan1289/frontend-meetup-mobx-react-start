import React, { Component } from 'react'
import { mocks } from '../helpers/mocks'
import { randomChoice, randomBoolean } from '../helpers/utils'

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

  /* mock response for simulate an async call using promise
     because git api only allows 60 calls per hour */
    // const mock = randomChoice(mocks)
    // this.setState({ value: mock.login })

    this.setState({ loading: true })
    setTimeout(() => {
      /* uncomment for call real api */
      window.fetch(`https://api.github.com/users/${this.state.value}`)
      .then(res => res.json())
      .then(user => {
        this.setState({ loading: false })
        this.props.handleUser(user)
      })

      /* mock response for simulate an async call using promise
         because git api only allows 60 calls per hour */
        //  const mock = mocks.find(mock => mock.login === this.state.value)
        //  const isSuccessFlow = randomBoolean()

        //  const promise = new Promise((resolve, reject) => {
        //    if (isSuccessFlow) {
        //      resolve(mock)
        //    } else {
        //     reject()
        //   }
        //  })

        //  promise
        //    .then(jsonRes => this.onLoadProfileSuccess(jsonRes))
        //    .catch(() => this.onLoadProfileFail())

    }, 500)
  }

  onLoadProfileSuccess = (user) => {
    this.setState({ loading: false, value: '' })
    this.props.handleUser(user)
  }

  onLoadProfileFail = () => {
    this.setState({ loading: false, value: '' })
  }

  render() {
    const { value, loading } = this.state
    return (
      <form onSubmit={this.handleSubmit} className="search">
        <label>
          GitHub account:
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search" />
        {loading && <span>{`Loading ${this.state.value} account...`}</span>}
      </form>
    )
  }
}

export default SearchBar
