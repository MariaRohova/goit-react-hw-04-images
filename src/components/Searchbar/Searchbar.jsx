import React, { Component } from 'react';
import {
  StyledSearchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Styled';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    search: '',
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    this.reset();
  };

  reset = () => {
    this.setState({
          search: '',
        });
      };

  onHandleChange = ({target:{value}}) => {
    this.setState({
  search:value
})
  }

  render() {
    return (
      <StyledSearchbar className="searchbar">
        <SearchForm className="form" onSubmit={this.onHandleSubmit}>
          <SearchFormButton type="submit" className="button">
            <span className="button-label">Search</span>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.onHandleChange}
            placeholder="Search images and photos"
          />
        </SearchForm>
      </StyledSearchbar>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};