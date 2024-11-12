import Background from './Components/Background/Background'
import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
const App = () => {
  let heroData=[
    {text1:"Dive into ",text2:"the future"},
    {text1:"Create your",text2:"passions"},
    {text1:"Give into ",text2:"the passions"},
  ]

  const [heroCount , setHeroCount] = useState(0)
  const [playStatus , setPlayStatus] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000)
  },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
    </div>
  )
}

export default App
