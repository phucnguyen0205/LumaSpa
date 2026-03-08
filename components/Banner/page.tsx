import { useEffect, useState } from "react"

export default function Banner() {

  const [banner,setBanner] = useState(null)

  useEffect(()=>{
    fetch("/api/banner")
      .then(res=>res.json())
      .then(data=>setBanner(data))
  },[])

  if(!banner) return null

  return (

    <section className="banner">

      <img src={banner.image} />

      <div className="banner-content">
        <h1>{banner.title}</h1>
        <p>{banner.subtitle}</p>
      </div>

    </section>

  )
}