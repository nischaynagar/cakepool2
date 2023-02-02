import React, {useEffect, useRef} from 'react'
import lottie from 'lottie-web'
export default function Lottie() {
    const lot = useRef()
  useEffect(()=>{
    const instance = lottie.loadAnimation({
        container: lot.current,
        renderer: 'svg',
        autoplay: true,
        loop: true,
        animationData: require('../assets/images/PandaLottie.json'),
    });
    return () => instance.destroy();
  }, [])
  return (
    <div ref={lot} className="pandaLottie"></div>
  )
}
