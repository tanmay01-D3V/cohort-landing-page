import React, { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  // Smooth scrolling
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  // GSAP + ScrollTrigger animations
  useEffect(() => {
    const elems = document.querySelectorAll('.elem')
    if (!elems.length) return

    elems.forEach((elem) => {
      const image = elem.querySelector('img')
      if (!image) return

      const tl = gsap.timeline()
      const xTransform = gsap.utils.random(-100, 100)

      tl.to(image, {
        transformOrigin: `${xTransform < 0 ? 0 : '100%'}`,
      })
        .to(
          image,
          {
            scale: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: image,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          },
          'start',
        )
        .to(elem, {
          xPercent: xTransform,
          ease: 'Power4.easeInOut',
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])
  
  

  return (
    <div className="w-full bg-[#FEA903] bg-gradient-to-t from-[#FEA903] to-[#FFC600] min-h-screen">
      <div className="grid grid-cols-8 grid-rows-20 gap-1.5 relative overflow-hidden">
        <div className="elem col-span-1 row-span-1" style={{"--r": 2, "--c": 4, gridRowStart: 2, gridColumnStart: 4}}>
          <img src="https://media.licdn.com/dms/image/v2/D4E35AQGtDrFk9KqARw/profile-framedphoto-shrink_400_400/B4EZlJOHOOKoAc-/0/1757870060696?e=1772038800&v=beta&t=ktHv0ilfPqv1wjNDi60x4yegMsPykOERcBrjfxj4WlY" alt="Image 43" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 5, "--c": 7, gridRowStart: 5, gridColumnStart: 7}}>
          <img src="https://media.licdn.com/dms/image/v2/D5635AQF5vZPARjVxnQ/profile-framedphoto-shrink_400_400/B56Zj2FpKxHIAc-/0/1756475332098?e=1772035200&v=beta&t=RyiqcVebfI8hbaAp1KFQTWGvjR05zK40-oadWI265DE" alt="Image 2" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 17, "--c": 6, gridRowStart: 17, gridColumnStart: 6}}>
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQEOAzvKuQoNDA/profile-displayphoto-shrink_400_400/B4EZeODqt9HYAg-/0/1750435016086?e=1773273600&v=beta&t=31xeOHXgPArAn2ee_xcQlUQjA01WKCJj4MpDuSLDuew" alt="Image 6" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 15, "--c": 2, gridRowStart: 15, gridColumnStart: 2}}>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQFGrFWbOgOdyQ/profile-displayphoto-scale_400_400/B56Zr0y_flIYAg-/0/1765043601061?e=1773273600&v=beta&t=dYcJiME6DjqlpCDnkHYCLfNp7aM1eIUXzfKyQoTgdGA" alt="Image 3" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 18, "--c": 4, gridRowStart: 18, gridColumnStart: 4}}>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQGW0DbmJkkYYA/profile-displayphoto-scale_400_400/B56Zsm3YybJwAo-/0/1765883613717?e=1773273600&v=beta&t=79kRGrugOFUHoSZtImqHuCSUP9Vhrd3TKDx-CvqMBiY" alt="Image 5" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 16, "--c": 4, gridRowStart: 16, gridColumnStart: 4}}>
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQE-3hwXte1weA/profile-displayphoto-crop_800_800/B4DZqh8Ot7IAAQ-/0/1763653513597?e=1773273600&v=beta&t=fxabU_bS2IUhpDlv7avNeAhe9S8Jb49o98pxAsqAyzo" alt="Image 34" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 3, "--c": 6, gridRowStart: 3, gridColumnStart: 6}}>
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQF9RrBgjnH_SA/profile-displayphoto-crop_800_800/B4DZxvRg9gGUAI-/0/1771393395729?e=1773273600&v=beta&t=y8yEgUjBFlzFh1GkaxBFrFm8inrFWYlARcBGZSABHVQ" alt="Image 33" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 17, "--c": 2, gridRowStart: 17, gridColumnStart: 2}}>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQFyZM3KA7t4Tg/profile-displayphoto-scale_200_200/B56Zso6LkuHAAY-/0/1765917900546?e=1773273600&v=beta&t=nstvxc82EFk4rc2p9_J3-IqY0dQlYLLG46uYtF5bUek" alt="Image 29" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 4, "--c": 2, gridRowStart: 4, gridColumnStart: 2}}>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQFpIhScq6yvRw/profile-displayphoto-scale_400_400/B56ZxxBc2EGoAg-/0/1771422749110?e=1773273600&v=beta&t=_29-UBk5R0AyBKFhXbSIRFisOonL0idCpXkxpgU8HKo" alt="Image 9" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 8, "--c": 6, gridRowStart: 8, gridColumnStart: 6}}>
          <img src="https://media.licdn.com/dms/image/v2/D5635AQHzSQHhuC_N-Q/profile-framedphoto-shrink_200_200/B56ZtACnZRG4AY-/0/1766305986473?e=1772035200&v=beta&t=0RePZoIkjoQVLIM47zKqrI__sNOf5QbzAcpdP70W4fQ" alt="Image 28" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 12, "--c": 5, gridRowStart: 12, gridColumnStart: 5}}>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQE5eI8s6yaCMA/profile-displayphoto-scale_400_400/B56Zsm0f2FJ8Ak-/0/1765882861104?e=1773273600&v=beta&t=9qZ1om7ifQLlAwsJN8GXgr8jProa8zvKoxK0GfxpUkg" alt="Image 4" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 11, "--c": 5, gridRowStart: 11, gridColumnStart: 5}}>
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQH_ZbySbhiroA/profile-displayphoto-crop_800_800/B4DZom_t2CHsAM-/0/1761590830623?e=1773273600&v=beta&t=JBeE-dqKMqaWod-WIUD8YtdaPHr2mwSODqcN5uMIxw4" alt="Image 32" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 20, "--c": 7, gridRowStart: 20, gridColumnStart: 7}}>
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQH7m5rELwxGeg/profile-displayphoto-scale_200_200/B4DZs3_6H5JkAY-/0/1766171064415?e=1773273600&v=beta&t=4aJDwna8IYje_KPnkZCGDteQVQMNc_Ts_FTtjTYvH70" alt="Image 30" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 12, "--c": 8, gridRowStart: 12, gridColumnStart: 8}}>
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQE-tqt-0M6X4w/profile-displayphoto-scale_200_200/B4DZxq4inVJkAc-/0/1771319735534?e=1773273600&v=beta&t=yGmxpod7VzBnmbfBYfJ3PW52lOZhcoSkKugDH6P1HhI" alt="Image 24" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 15, "--c": 8, gridRowStart: 15, gridColumnStart: 8}}>
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQG-SsyJiy8FNQ/profile-displayphoto-scale_400_400/B4EZp4l94nJgAg-/0/1762959813582?e=1773273600&v=beta&t=rxSDDqVhH2mcwaHFwDrapQJiBi6U0MwEfxwSe4YvlTU" alt="Image 35" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 19, "--c": 6, gridRowStart: 19, gridColumnStart: 6}}>
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQEXL3uhXqIbyA/profile-displayphoto-scale_200_200/B4EZrrCUJ4KkAY-/0/1764879847225?e=1773273600&v=beta&t=LjX0yhgM_1vpC_2Kgq_f0naSrWLgvoBSA7Wh37GCCSI" alt="Image 16" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 10, "--c": 3, gridRowStart: 10, gridColumnStart: 3}}>
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQHcBUqQtQtuEA/profile-displayphoto-scale_400_400/B4DZwpCBeeIUAg-/0/1770214923162?e=1773273600&v=beta&t=VmwuddObn1dHjod8xlHM4AFveUHaT3CoYpuN3Svf2TU" alt="Image 25" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 4, "--c": 5, gridRowStart: 4, gridColumnStart: 5}}>
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQHyDFYauX01Mg/profile-displayphoto-scale_200_200/B4DZxq5SnGJkAc-/0/1771319933254?e=1773273600&v=beta&t=737zyoX2p7WFDFvtaOwwIC69Cq51aCkuOShxOfV43kc" alt="Image 14" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 13, "--c": 7, gridRowStart: 13, gridColumnStart: 7}}>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQHjOHEkl7nWIw/profile-displayphoto-scale_200_200/B56Zsm4Bk_IYAY-/0/1765883780464?e=1773273600&v=beta&t=qHynnew8NP3_hc4TEPPYbmZ3paeTrC2OGB12UO6alac" alt="Image 26" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 10, "--c": 1, gridRowStart: 10, gridColumnStart: 1}}>
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQHizXDo5-dtsQ/profile-displayphoto-crop_800_800/B4EZljasrOIoAI-/0/1758309568788?e=1773273600&v=beta&t=FCiA79-vIKDCzslde6QTGRQLxW6qJOQIGmY6ZhfQPbE" alt="Image 31" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 3, "--c": 8, gridRowStart: 3, gridColumnStart: 8}}>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQHKvYlF2G_VUw/profile-displayphoto-scale_400_400/B56ZsmsNwuGsAg-/0/1765880693939?e=1773273600&v=beta&t=TfuVtAAHL_oTvZKinE5YqfHfLrJ8M7bQobczUvLlR8o" alt="Image 41" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 9, "--c": 8, gridRowStart: 9, gridColumnStart: 8}}>
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQHlAaL-oRqRwg/profile-displayphoto-scale_400_400/B4DZxqmcUTJkAg-/0/1771314991449?e=1773273600&v=beta&t=da4cR4wAaG708SR8HNcN4hkeuyWIrWVAlnf58Yr_xcI" alt="Image 10" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 20, "--c": 2, gridRowStart: 20, gridColumnStart: 2}}>
          <img src="https://media.licdn.com/dms/image/v2/D4D35AQEWOzLkI-yvPw/profile-framedphoto-shrink_400_400/B4DZtp45uCI4Ag-/0/1767008083189?e=1772038800&v=beta&t=CI7yDADSa5atgYuTjV2hgnxAfxEELPYwXciRx5mACM4" alt="Image 44" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 6, "--c": 5, gridRowStart: 6, gridColumnStart: 5}}>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQGkQUR2EhRbKA/profile-displayphoto-scale_400_400/B56Zxq64bdJQAg-/0/1771320347649?e=1773273600&v=beta&t=0FKJhXNRWVpQu2deGKJWOZtcdVVCgHbUHLoimvCZVZg" alt="Image 37" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 1, "--c": 7, gridRowStart: 1, gridColumnStart: 7}}>
          <img src="https://media.licdn.com/dms/image/v2/D5635AQGbF-3WwLfSOA/profile-framedphoto-shrink_400_400/B56ZsxCGIvI0Ag-/0/1766054192032?e=1772035200&v=beta&t=Tsg8QbLy7dzZ0uuwhbQ5RhBRjOO1z6xZbgyb0MBwyMA" alt="Image 17" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 1, "--c": 2, gridRowStart: 1, gridColumnStart: 2}}>
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQFVFzOBZH_69g/profile-displayphoto-scale_200_200/B4EZovLOdWKkAc-/0/1761728074603?e=1773273600&v=beta&t=N-gpd8XsT0cpOksTs4NM-Qgh0QcP8UIKpDmlDPVbRM8" alt="Image 19" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 13, "--c": 2, gridRowStart: 13, gridColumnStart: 2}}>
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQFCRdQ-baTBWw/profile-displayphoto-scale_400_400/B4DZp8MAs3KUAg-/0/1763020116658?e=1773273600&v=beta&t=9sPJiBQWm6-_zFq76v7J91wR3YjQHiui03Bvj1cpFWw" alt="Image 12" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 6, "--c": 1, gridRowStart: 6, gridColumnStart: 1}}>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQHqQufObsSyWA/profile-displayphoto-scale_200_200/B56ZroIk0dHkAY-/0/1764831156025?e=1773273600&v=beta&t=FU2WLfZfiwSO-pDSmGE_hgVq5alHnEPMpbgvw4rjINs" alt="Image 23" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 8, "--c": 3, gridRowStart: 8, gridColumnStart: 3}}>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQHN03-QlnAecw/profile-displayphoto-scale_200_200/B56ZsoC8bFG8Ag-/0/1765903421812?e=1773273600&v=beta&t=YjH9056N6WhruIbNP30JSI1QDxUKhbs6PvpOBWFZCOo" alt="Image 22" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{"--r": 14, "--c": 4, gridRowStart: 14, gridColumnStart: 4}}>
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQFNpOanhoDUug/profile-displayphoto-scale_200_200/B4DZsYyeZ9HkAY-/0/1765647444933?e=1773273600&v=beta&t=iSmDKqCRzsmy4J81tRLwCMTCWBa5xkub-rE0DmqFX_0" alt="Image 40" />
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center text-zinc-800" style={{ fontFamily: "public/helvetica-255-webfont/helvetica-rounded-bold-5871d05ead8de.woff" }}>
        <h1 className="text-7xl uppercase mb-4 font-questrial font-bold">ITM - Sam Waltman<sup>Ⓡ</sup></h1>
        <h2 className="text-4xl font-amita">उद्यमेन हि सिध्यन्ति</h2>
      </div>
      <div 
        className="w-full h-screen bg-[#FEA903] flex items-center justify-center mx-auto py-96 relative z-[999] text-center overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, rgba(254,169,3,0.2) -10%, rgba(254,169,3,0.97) 30%, rgb(243, 162, 0) 60%)"
        }}>
        <p className="text-5xl w-3/4 leading-[4.2rem] text-black font-regular text-left z-[1001] relative">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi tenetur maiores, odit assumenda, praesentium debitis doloremque, cum sit hic itaque at? Iure facilis soluta animi eaque fugit laborum pariatur alias?
        </p>
      </div>
    </div>
  )
}
export default App