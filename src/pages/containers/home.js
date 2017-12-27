import React, { Component } from 'react';
import HomeLayout from '../components/homeLayout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handleError';
import VideoPlayer from '../../player/containers/videoPlayer';

class Home extends Component {

  state = {
    modalVisible: false
  }

  handleOpenModal = () => {
    this.setState({
      modalVisible: true
    })
  }

  handleCloseModalClick = () => {
    this.setState({
      modalVisible: false
    })
  }

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories 
            categories={this.props.data.categories} 
            handleOpenModal={this.handleOpenModal}
          />
          {this.state.modalVisible ? <ModalContainer >
            <Modal 
              handleClick={this.handleCloseModalClick}
            >
              
          <VideoPlayer /> 
            </Modal>
          </ModalContainer>
          : null
        }
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home
