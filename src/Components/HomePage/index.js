import React, { useEffect, useState, useRef, useMemo } from 'react'
import './style.css'
import { ReactComponent as Community1 } from '../assets/images/community1.svg';
import { ReactComponent as Reward } from '../assets/images/reward.svg';
import { ReactComponent as Sell } from '../assets/images/sell.svg';
import { ReactComponent as EthereumCoin } from '../assets/images/EthereumCoin.svg';
import { ReactComponent as BuySell } from '../assets/images/buy-sell.svg';
import { ReactComponent as Binance } from '../assets/images/binance.svg';
import { ReactComponent as Discord1 } from '../assets/images/discord1.svg'
import { ReactComponent as Discord2 } from '../assets/images/discord2.svg'
import { ReactComponent as Instagram1 } from '../assets/images/insta1.svg';
import { ReactComponent as Reddit1 } from '../assets/images/reddit1.svg';
import { ReactComponent as Reddit2 } from '../assets/images/reddit2.svg';
import { ReactComponent as Twitter1 } from '../assets/images/twitter1.svg';
import { ReactComponent as Twitter2 } from '../assets/images/twitter2.svg';
import { ReactComponent as Tiktok1 } from '../assets/images/tiktok1.svg';
import { ReactComponent as Telegram1 } from '../assets/images/telegram1.svg';
import { ReactComponent as Telegram2 } from '../assets/images/telegram2.svg';
import { Lottie1, Lottie2, Lottie3 } from '../Lottie';
import trdd2 from '../assets/images/Ellipse6.png';
import trdd from '../assets/images/5300_2_02-ai 1.png';
export default function HomePage(props) {
    const page1 = useRef();
    const page2 = useRef();
    const page3 = useRef();
    const page4 = useRef();
    const page5 = useRef();
    const options = useMemo(() => ({
        root: null,
        threshold: 0.1,
        rootMargin: "-220px"
        }), []);
    useEffect(() => {
        let temppage1 = null;
        let temppage2 = null;
        let temppage3 = null;
        let temppage4 = null;
        
        const observer = new IntersectionObserver(function
            (entries, observer) {
                entries.forEach(entry => {
                    if(!entry.isIntersecting) return;
                    if(entry.target.classList.contains('p1')){
                        // entry.target.classList.remove('p1')
                        props.changeNav("#00A9BE")
                        props.settextColor('white')
                    }
                    else if(entry.target.classList.contains('p2')){
                        // entry.target.classList.remove('p2')
                        props.changeNav("white")
                        props.settextColor('#00A9BE')
                    }
                    else if(entry.target.classList.contains('p3')){
                        // entry.target.classList.remove('p3')
                        props.changeNav("white")
                        props.settextColor('#00A9BE')
                    }
                    else if(entry.target.classList.contains('p4')){
                        // entry.target.classList.remove('p4')
                        props.changeNav("#035D68")
                        props.settextColor('white')
                    }
                })
            }, options)
        if(page1.current){
            observer.observe(page1.current);
            temppage1 = page1.current;}

        if(page2.current){
        observer.observe(page2.current);
        temppage2 = page2.current;}

        if(page3.current){
        observer.observe(page3.current);
        temppage3 = page3.current;}
        
        if(page4.current){
        observer.observe(page4.current);
        temppage4 = page4.current;}

      return () => {
        if(temppage1)
        observer.unobserve(temppage1);

        if(temppage1)
        observer.unobserve(temppage2);

        if(temppage1)
        observer.unobserve(temppage3);

        if(temppage1)
        observer.unobserve(temppage4);

      }
    }, [page1, page2, page3, page4, page5, options, props]);
    
    const [contentNum, setcontentNum] = useState(0);
    function showAll(){
        setcontentNum(0);
    }
    function showBox1(){
        setcontentNum(1);
    }
    function showBox2(){
        setcontentNum(2);
    }
    function showBox3(){
        setcontentNum(3);
    }
    return (
        <>
            <div className="position-relative p1" ref={page1}>
                <div className='bg-page1'>
                    <div className="container">
                        <div className='display-grid page-1'>

                            <section className='home-section-1'>
                                <h2>CakePool</h2>
                                <h1>We are a community staking cake on Pancakeswap. </h1>
                                <div className='button-grp'>
                                    <button className='button'>Buy Now</button>
                                    <button className='btn-secondary'>Live Chart</button>
                                </div>
                            </section>
                            <section className='home-section-2'>
                                {/* <img src={require('../assets/images/4500_6_06-ai-2.png')} alt="" /> */}
                                <Lottie1 className='home-section-2-lottie'/>
                                
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-relative p2" ref={page2}>
                <div className="bg-page2">
                    <div className="container section-4">
                        <div className="display-grid grid-2">
                            <section className="home-section-3">
                                <h1>Why Cakepool</h1>
                                <p>You get to be part of an awesome community, take part in the 1 million dollar challenge and be apart of an evolving CakePool ecosystem.</p>
                            </section>
                            <section className="home-section-4">
                                <Sell />
                                <Reward />
                                <Community1 />
                            </section>
                            <img className='fix-position' src={require('../assets/images/18-04-ai 1.png')} alt="" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="position-relative p3" ref={page3}>
                <div className="bg-page3">
                    <div className="container-mobile">
                        <div className="display-grid section-5">
                            <section className='home-section-5'>
                                <h1>1 million dollar challenge</h1>
                                <p>The goal is to get from $1,000 to $1,000,000 by doing 10 2x trades. There will be a community challenge and an individual challenge. The community will vote on which tokens to buy.</p>
                            </section>
                            <section className='home-section-6'>
                                 <Lottie2 className='fix-position '/>

                                {/* <img src={require('../assets/images/6100_5_01-ai 1.png')} alt="" /> */}
                            </section>
                        </div>
                    </div>
                </div>

            </div>
            <div className='position-relative p4' ref={page4}>
                <div className="bg-page4">
                    <div className="container tokenomics-section">
                            <div className="content-wrapper">
                                <h1>Tokenomics</h1>
                                {(contentNum === 0)?<div className='grid-box'>
                                    <div className='box box-1' onMouseEnter={showBox1}>
                                        <Binance className='icon-center' />
                                        <div className='main-content'>
                                            <div>
                                                <h2>Buy:</h2>
                                                <p>Total tax 10% </p>
                                            </div>
                                            <div>
                                                <h2>Sell:</h2>
                                                <p>Total tax 21% </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='box box-2' onMouseEnter={showBox2}>

                                        <BuySell className='icon-center' />
                                        <div className='main-content'>
                                            <div>
                                                <h2>Buy/Sell:</h2>
                                                <p>3% BUSD rewards</p>
                                            </div>
                                            <div>
                                                <h2>Liquidity:</h2>
                                                <p>3% liquidity pool</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='box box-3' onMouseEnter={showBox3}>
                                        <EthereumCoin className='icon-center' />
                                        <div className='main-content'>

                                            <div>
                                                <h2>Buy:</h2>
                                                <p>7% cake staking pool</p>
                                            </div>
                                            <div>
                                                <h2>Sell:</h2>
                                                <p>15% cake staking pool</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                (contentNum===1)?<div className="full-content-1" onMouseLeave={showAll}>
                                    <Binance className='token-icon'/>
                                    <div className='full-content-text'>
                                    <div className='full-content-main'>
                                        <div className='flex'>
                                            <h2>Buy:</h2>
                                            <p> Total tax 10% </p>
                                        </div>
                                        <div className='flex'>
                                            <h2>Sell:</h2>
                                            <p> Total tax 21% </p>
                                        </div>
                                    </div>
                                    <div className='full-content-para'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae.</p>
                                    </div>
                                    </div>
                                </div>
                                :(contentNum===2)?
                                <div className="full-content-1" onMouseLeave={showAll}>
                                    <BuySell className='token-icon' />
                                    <div className='full-content-text'>
                                    <div className='full-content-main'>
                                            <div className='flex'>
                                                <h2>Buy/Sell:</h2>
                                                <p>3% BUSD rewards</p>
                                            </div>
                                            <div className='flex'>
                                                <h2>Liquidity:</h2>
                                                <p>3% liquidity pool</p>
                                            </div>
                                    </div>
                                    <div className='full-content-para'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae.</p>
                                    </div>
                                    </div>
                                </div>:
                                <div className="full-content-1" onMouseLeave={showAll}>
                                <EthereumCoin className='token-icon' />
                                <div className='full-content-text'>
                                <div className='full-content-main'>
                                    <div className='flex'>
                                        <h2>Buy:</h2>
                                        <p>7% cake staking pool</p>
                                    </div>
                                    <div className='flex'>
                                        <h2>Sell:</h2>
                                        <p>15% cake staking pool</p>
                                    </div>
                                </div>
                                <div className='full-content-para'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae.</p>
                                </div>
                                </div>
                            </div>}
                                
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-relative p5" ref={page5}>
                <div className="bg-footer  container_relative">
                    <div className="container ">
                        <div className='display-grid footer-1'>
                            <div className='footer-section-1'>
                                <div>
                                    <p className='footer-para'>CakePool is set up to have rewards given out even if there is zero trading being done</p>
                                    <div className='social-icon'>
                                        <h2>Follow Us</h2>
                                        <ul className='social-icon-list'>
                                            <li><a href="https://www.instagram.com/cakepoolstaking/"><Instagram1 /></a></li>
                                            <li><a href="https://www.tiktok.com/@cakepoolstaking"><Tiktok1 /></a></li>
                                            <li><a href="https://www.reddit.com/r/CakePool/"><Reddit1 /></a></li>
                                            <li><a href="https://twitter.com/CakePoolTweets"><Twitter1 /></a></li>
                                            <li><a href="https://t.me/CakePool"><Telegram1 /></a></li>
                                            <li><a href="https://discord.com/invite/XdacqRMKbq"><Discord1 /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <img src={trdd} alt=""/> */}
                                <Lottie3 className='home-section-2-lottie'/>


                            </div>



                        </div>
                    </div>
                    <div className="container-mobile">
                        <footer className="display-grid footer-2">
                            <div className="logo">
                                <img src={require('../assets/images/logo1.png')} alt="Manage" />
                                <p>Cakepool</p>
                            </div>
                            <ul className="social-icon-list">

                                <li><a href="https://t.me/CakePool"><Telegram2 className='bottom-icon' /></a></li>
                                <li><a href="https://twitter.com/CakePoolTweets"><Twitter2 className='bottom-icon' /></a></li>
                                <li><a href="https://www.reddit.com/r/CakePool/"><Reddit2 className='bottom-icon' /></a></li>
                                <li><a href="https://discord.com/invite/XdacqRMKbq"><Discord2 className='bottom-icon' /></a></li>

                            </ul>
                        </footer>

                    </div>
                    <img alt="" src={trdd2} className="curve_footer" />

                </div>

            </div>
        </>
    )
}
