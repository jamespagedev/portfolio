import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card.js';
import associatesDegree from "../../assets/img/associatesdegree.png";
import bachelorsDegree from "../../assets/img/bachelorsdegree.png";
import favoriteBooks from "../../assets/img/favoritebooks.png";
import lambdaBadge from "../../assets/img/lambdabadge.png";

// globals
import { rWidths, Colors } from '../../globals/CssMixins.js';

// Variables
const pictures = [
  {
    title: 'A.S. Degree',
    picture: associatesDegree
  },
  {
    title: 'B.S. Degree',
    picture: bachelorsDegree
  },
  {
    title: 'Favorite Books',
    picture: favoriteBooks
  },
  {
    title: 'Code Bootcamp',
    picture: lambdaBadge
  }
]
const totalPictures = pictures.length;

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 0 22rem 5rem 0;

  @media (max-width: 2500px) {
    padding: 0 15rem 5rem 0;
  }

  @media (max-width: 1900px) {
    padding: 0 12rem 5rem 0;
  }

  @media (max-width: 1450px) {
    padding: 0 10rem 5rem 0;
  }

  @media (max-width: ${rWidths.tablet}) {
    padding: 0 7rem 5rem 0;
  }

  @media (max-width: ${rWidths.phone}) {
    padding: 0;
  }
`;

const NavSelector = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2.5rem;

  @media (max-width: 500px) {
    margin-bottom: 2.0rem;
  }
`;

const ButtonSelector = styled.button`
  display: flex;
  justify-content: center;
  width: 23%;
  padding: 1.5rem 0.7rem;
  background-color: ${props => props.selected ? Colors.HippieBlue : 'white'};
  border: 0.1rem solid black;
  font-size: 2.6rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  &:hover {
    color: white;
    background-color: ${Colors.GrayChateau};
  }

  @media (max-width: 2400px) {
    font-size: 2rem;
  }

  @media (max-width: 2000px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1700px) {
    font-size: 1.3rem;
  }

  @media (max-width: 1550px) {
    padding: 1.5rem 2.5rem;
  }

  @media (max-width: 500px) {
    padding: 1rem 0.7rem;
  }

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }

  @media (max-width: 350px) {
    font-size: 1rem;
  }
`;

//=========================================== component ===========================================
class CarouselEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  nextImgIndex = (ev) => {
    ev.preventDefault();
    const index = (this.state.index + 1) % totalPictures;
    this.setState({index: index})
  }

  prevImgIndex = (ev) => {
    ev.preventDefault();
    const index = (this.state.index - 1) % totalPictures;
    this.setState({index: index})
  }

  setImgIndex = (ev, index) => {
    ev.preventDefault();
    this.setState({index: index})
  }

  render() {
    console.log(this.props);
    return (
      <DivWrapper>
        <NavSelector>
          <ButtonSelector type="button" onClick={ev => this.setImgIndex(ev, 0)} selected={(this.state.index === 0)}>{pictures[0].title}</ButtonSelector>
          <ButtonSelector type="button" onClick={ev => this.setImgIndex(ev, 1)} selected={(this.state.index === 1)}>{pictures[1].title}</ButtonSelector>
          <ButtonSelector type="button" onClick={ev => this.setImgIndex(ev, 2)} selected={(this.state.index === 2)}>{pictures[2].title}</ButtonSelector>
          <ButtonSelector type="button" onClick={ev => this.setImgIndex(ev, 3)} selected={(this.state.index === 3)}>{pictures[3].title}</ButtonSelector>
        </NavSelector>
        <Card property={pictures[this.state.index]}/>
      </DivWrapper>
    );
  }
};

export default CarouselEducation;