import React, { useEffect, useState, useRef } from 'react'
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
import trdd from '../assets/images/5300_2_02-ai 1.png';
import trdd2 from '../assets/images/Ellipse6.png';
;

export default function HomePage(props) {
    const page1 = useRef();
    const page2 = useRef();
    const page3 = useRef();
    const page4 = useRef();
    const page5 = useRef();
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "-220px"
    };
    useEffect(() => {
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
        if(page1.current)
            observer.observe(page1.current);
        if(page2.current)
        observer.observe(page2.current);
        if(page3.current)
        observer.observe(page3.current);
        if(page4.current)
        observer.observe(page4.current);
      return () => {
        observer.unobserve(page1.current);
        observer.unobserve(page2.current);
        observer.unobserve(page3.current);
        observer.unobserve(page4.current);
      }
    }, [page1, page2, page3, page4, page5, options]);
    
    const [contentNum, setcontentNum] = useState(0);
    function showAll(){
        setcontentNum(0);
    }
    function showBox1(){
        setcontentNum(1);
    }
    function readMore() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("read-more");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
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
                                <img src={require('../assets/images/4500_6_06-ai-2.png')} alt="" />
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
                                <p>The goal is to get from $1,000 to $1,000,000 by doing 10 2x trades. There will be a community challenge and an individual challenge. The community will vote on which tokens to buy.<span id="dots">...</span><span id="more"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae.</span></p>
                                <button onClick={readMore} id="read-more" className='read-more'>Read more</button>
                            </section>
                            <section className='home-section-6'>
                                <img src={require('../assets/images/6100_5_01-ai 1.png')} alt="" />
                            </section>
                        </div>
                    </div>
                </div>

            </div>
            <div className='position-relative p4' ref={page4}>
                <div className="bg-page4">
                    <div className="container">
                        <div className="display-grid align-center">
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
                                    <div className='box box-2'>

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
                                    <div className='box box-3'>
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
                                <div className="full-content-1" onMouseLeave={showAll}>
                                    <Binance />
                                    <div>
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
                                    <div>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique odio perspiciatis reiciendis enim, est officiis natus animi temporibus ea ex.</p>
                                    </div>
                                    </div>
                                </div>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="position-relative p5" ref={page5}>
                <div className="bg-footer  container_relative">
                    <div className="container ">
                        <div className='display-grid footer-1'>
                            <div className='flex'>
                                <div>
                                <p className='footer-para'>CakePool is set up to have rewards given out even if there is zero trading being done</p>
                                <div className='social-icon'>
                                <h2>Follow Us</h2>
                                <ul className='social-icon-list'>
                                    <li><a href="#"></a><Instagram1 /></li>
                                    <li><a href="#"></a><Tiktok1 /></li>
                                    <li><a href="#"></a><Reddit1 /></li>
                                    <li><a href="#"></a><Twitter1 /></li>
                                    <li><a href="#"></a><Telegram1 /></li>
                                    <li><a href="#"></a><Discord1 /></li>
                                </ul>
                            </div>
                                </div>
                                <img src={trdd} /> 

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

                                <li><a href="#"></a><Telegram2 className='bottom-icon' /></li>
                                <li><a href="#"></a><Twitter2 className='bottom-icon' /></li>
                                <li><a href="#"></a><Reddit2 className='bottom-icon' /></li>
                                <li><a href="#"></a><Discord2 className='bottom-icon' /></li>

                            </ul>
                        </footer>

                    </div>
                    <img src={trdd2} className="curve_footer"/> 

                </div>

            </div>
        </>
    )
}
