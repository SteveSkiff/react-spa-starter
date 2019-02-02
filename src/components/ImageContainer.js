import React from 'react'
import styled from 'styled-components'
import {css} from 'styled-components'
import { BlurIn, ImgHover } from './KeyFrames'


const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576,
  }
  
  const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
  
    return acc
  }, {})



const Image = styled.img`
    animation: ${BlurIn} 0.5s linear 0s;
    padding: 1px;
    padding: 2px;
    z-index: 1;
`

const ImgContainer = styled.div`

    background-color: lightgrey;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 250px;
    overflow: scroll;
    margin: 10px;
    padding: 4px;
    margin-top: 0px;
    border: 1px solid black;
    box-shadow: inset 0px 0px 3px 1px black;
    z-index: 0;
    border-radius: 0px 0px 5px 5px;

    ${media.phone`
        margin: 0;
        padding: 2px;
        width: 100vw;
        border-radius: 5px 0px 0px 5px;
    `}

`

const Loading = styled.p`
  text-align: center;
  font-size: 1em;
  width: 100vw;
  margin: 0;
  padding: 0;
  verticle-align: center;
  color: grey;
`

const LinkWrapper = styled.a`
    padding: 0;
    margin: 0;
    text-decoration: none;
    &:hover {
        animation: ${ImgHover} .2s ease-in 0s forwards;
    }

`




class ImageContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: null,
            imagesObj: null,
        }
    }

    render() {
        const imagesToRender = this.props.images;
        const loading = this.props.loading
        let renderImage = (imagesToRender && !loading ?
            imagesToRender.map((image, i) => 
                <LinkWrapper key={i} href={image.largeImageURL} target='_blank'>
                    <Image src={image.previewURL} alt={image.tags} />
                </LinkWrapper>
            )
            :
            <Loading> </Loading> 
        )

        return(
                <ImgContainer>
                    {renderImage}
                </ImgContainer>

        )
    }
}

export default ImageContainer;