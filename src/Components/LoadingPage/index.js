import React, { useEffect, useMemo, useRef } from 'react'
import './style.css'
export default function LoadingPage(props) {
  function handleOnClick() {
    let pageHeight = window.innerHeight;
    var i = 10;
    var int = setInterval(function () {
      document.body.scrollTo(0, i);
      i += 20;
      if (i >= pageHeight + 50) clearInterval(int);
    }, 20);
  }
  const page0 = useRef();
  const options = useMemo(() => ({
    root: null,
    threshold: 0.1,
    rootMargin: "-220px"
  }), []);
  useEffect(() => {
    let temppage1 = null;
    const observer = new IntersectionObserver(function
      (entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        if (entry.target.classList.contains('p0')) {
          props.changeNav("#035D68")
          props.settextColor('white')
        }
      })
    }, options)
    if (page0.current) {
      observer.observe(page0.current);
      temppage1 = page0.current;
    }


    return () => {
      if (temppage1)
        observer.unobserve(temppage1);
    }
  }, [page0, options, props]);
  return (
    <>
      <div className='primary-content p0' ref={page0}>
        <section className='content'>
          <div>
            <ul className='word'>
              <li><p>C</p></li>
              <li><p>a</p></li>
              <li><p>k</p></li>
              <li><p>e</p></li>
            </ul>
          </div>
          <div>
            <ul className='word'>
              <li><p>P</p></li>
              <li><p>o</p></li>
              <li><p>o</p></li>
              <li><p>l</p></li>
            </ul>
          </div>

        </section>
      </div>
      <button className='arrow-button' onClick={handleOnClick}>
        <img src={require('../assets/images/arrow-button.png')} alt="" />
      </button>
    </>
  )
}
