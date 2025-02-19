'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { LinkButton } from "./components/LinkButton"
import type { linkInfo } from "./types.d.ts"
import { useSearchParams } from "next/navigation"

const main_links: linkInfo[] = [
  {
    icon_src: "/Spotify_logo.svg",
    text: "Spotify",
    colors: ["#000000", "#1ED760"],
    url: ""
  },
  {
    icon_src: "/Instagram_logo.svg",
    text: "Instagram",
    colors: ["#5b51d8", "#e1306c", "#ffdc80"],
    url: ""
  },
  {
    icon_src: "/Tiktok_logo.svg",
    text: "TikTok",
    colors: ["#69C9D0", "#010101", "#EE1D52"],
    url: ""
  },
  {
    icon_src: "/Youtube_logo.svg",
    text: "Youtube",
    colors: ["#FF0000", "#000000"],
    url: ""
  }
]

const extra_links: linkInfo[] = [
  {
    icon_src: "/_logo.svg",
    text: "Youtube Music",
    colors: ["#FF0000", "#ffffff"],
    url: ""
  },
  {
    icon_src: "/Facebook_logo.svg",
    text: "OnlyFans",
    colors: ["#1877F2", "#104088"],
    url: ""
  },
]
export default function Home() {

  const [showExtraLinks, setShowExtraLinks] = useState(false)

  useEffect(()=>{
    window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"})
  }, [showExtraLinks])

  return (
    <>
      <main>
        <header className="page_header">
          <Image
            src="/profile_picture.jpg"
            alt="Foto de perfil de Tach"
            width={0}
            height={0}
            sizes="100vw"
            className="profile_picture"
          />
          <h1>Tach Music</h1>
        </header>

        <section className="latest_release_section">
          <Image
            src="/YTSDTVN_cover.jpg"
            alt="Portada del EP llamado YTSDTVN"
            width={0}
            height={0}
            sizes="100vw"
            className="latest_release_image"
          />
          <a href=""><p className="latest_release_main_text">
            Escucha el YTSDTVN (EP)
            <br />
            Nuestro último lanzamiento
          </p></a>
          <p className="latest_release_secondary_text">
            Disponible en todas las plataformas digitales
          </p>
        </section>

        <section className="links_section">
          <header>
            <h3>Links principales:</h3>
          </header>
          <ul className="links_list">
            {main_links.map((linkInfo, id) => <li key={id}><LinkButton {...linkInfo} /></li>)}
            <LinkButton text={showExtraLinks ? "Ver menos" : "Ver más"} colors={["#444", "#888", "#aaa"]} callBack={()=>{setShowExtraLinks(!showExtraLinks)}}/>
            {showExtraLinks && extra_links.map((linkInfo, id) => <li key={id}><LinkButton {...linkInfo} /></li>)}
          </ul>
        </section>
      </main>
    </>
  )
}

