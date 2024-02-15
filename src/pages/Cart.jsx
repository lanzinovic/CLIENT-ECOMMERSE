import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'

const Container = styled.div`
  
`
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding:"10px" })}
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=>props.type === "filled" && "none"};
  background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
  color: ${props=>props.type === "filled" && "white"};
`
const TopTexts = styled.div`
  ${mobile({display:"none" })}
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection:"column"})}
`
const Info = styled.div`
  flex: 3;
`
const Product  = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection:"column"})}
`
const ProductDetail  = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span`
  
`
const ProductId = styled.span`
  
`
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
`
const ProductSize = styled.span`
  
`
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 20px;
`
const ProductAmount = styled.span`
   font-size: 24px;
   margin: 5px;
   ${mobile({ margin: "5px 25px"})}
`
const ProductPrice = styled.span`
   font-size: 30px;
   font-weight: 300;
   ${mobile({ marginBottom:"20px"})}
`
const Hr = styled.hr`
  background-color: whitesmoke;
  border: none;
  height: 1px;
`

const Summary = styled.div`
   flex: 1;
   border: 0.5px solid  lightgray;
   border-radius: 10px;
   padding: 20px;
   height: 50vh;
`
const SummaryTitle = styled.h1`
   font-weight: 200;
`
const SummaryItem = styled.div`
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;
   font-weight: ${props=>props.type === "total" && "500"};
   font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`
   
`
const SummaryItemPrice = styled.span`
   
`
const Button = styled.button`
   width: 100%;
   padding: 10px;
   background-color: black;
   color: white;
   font-weight: 600;
   border-radius: 5px;
`

export default function Cart() {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/474x/ae/39/1b/ae391b86311bd986c5ac72f9dc7ee16b.jpg"/>
                <Details>
                  <ProductName><b>Product:</b> SweatShirt Khaki</ProductName>
                  <ProductId><b>ID:</b> 34236</ProductId>
                  <ProductColor color="#b29079"/>
                  <ProductSize><b>Size:</b> Medium</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>$20</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/564x/de/dd/3d/dedd3d8f3ec58659e569f95cbdcb027f.jpg"/>
                <Details>
                  <ProductName><b>Product:</b> Black Hoodie</ProductName>
                  <ProductId><b>ID:</b> 34237</ProductId>
                  <ProductColor color="black"/>
                  <ProductSize><b>Size:</b> Medium</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>$25</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem >
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 105</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 105</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}
