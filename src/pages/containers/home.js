import React, { Component } from 'react';
import HomeLayout from '../components/homeLayout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';

class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Related />
        <Categories categories={this.props.data.categories} />
        <ModalContainer >
          hola
        </ModalContainer>
      </HomeLayout>
    )
  }
}

export default Home
