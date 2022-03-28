import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

import './FAQ.styles.scss';

const Question = ({question, text, delay}) => {
    const [showText, setShowText] = useState(false)
    useEffect(()=>{
        Aos.init({ duration: 200 })
      }, [])
    const handleClick = () => {
        setShowText(!showText)
    }
    return(
        <div className='Question_Container' >
            <div className='row1'>
                <p>{question}</p>
                <p onClick={handleClick} className='button'>{showText ? "-" : "+"}</p>
            </div>
            {
               showText && text && text.map((answer, i) => 
                <p className='text' data-aos="fade-right" data-aos-easing="ease-in-sine"  key={i} data-aos-delay={delay} data-aos-once={true}>{answer}</p>
               )
            }
        </div>
    )
}

function FAQ() {
    let answer1 = ["NFT stands for ‘non fungible token’. An NFT is basically data that is accounted for on a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token."]
    let answer2 = ["NFT Minting is the process by which your digital art or digital content becomes a part of the Ethereum blockchain."]
    let answer3 = ["TBA"]
    let answer4 = [`Download the MetaMask extension for Google Chrome.", "Buy ETH on an exchange like Binance, OKEx, Huobietc, and send it to your MetaMask Wallet.", "Connect your Metamask Wallet to the website by clicking "WalletConnect." Then click "Mint Now" on our website and approve the transaction on Metamask.`]
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  return (
    <div className='FAQ_Container'>
        <h2>FAQ</h2>
        <Question question="WHAT IS AN NFT?" text={answer1} />
        <Question question="WHAT DOES MINT MEAN?" text={answer2} />
        <Question question="WHAT IS THE MINT PRICE AND DATE?" text={answer3} />
        <Question question="HOW CAN I BUY AN LSD LAB NFT" text={answer4} />
    </div>
  )
}

export default FAQ