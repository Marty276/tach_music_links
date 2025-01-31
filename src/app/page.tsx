import Image from "next/image"
import Link from "next/link"

type linkInfo = {
  icon_src?: string
  text: string
  colors: `#${string}`[]
  url?: string
}

const main_links: linkInfo[] = [
  {
    icon_src: "/Spotify_logo.svg",
    text: "Spotify",
    colors: ["#000", "#1ED760"],
    url: ""
  },
  {
    icon_src: "/Instagram_logo.svg",
    text: "Instagram",
    colors: ["#ffdc80", "#e1306c", "#5b51d8"],
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
    colors: ["#FF0000", "#282828"],
    url: ""
  }
]

export default function Home() {
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
            Escucha el EP YTSDTVN
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
            {main_links.map((linkInfo, id) => <LinkButton key={id} {...linkInfo} />)}
          </ul>
        </section>
      </main>
    </>
  )
}

function LinkButton({ icon_src, text, colors, url }: linkInfo) {
  return <Link
    className="link"
    style={{ background: `linear-gradient(to right, ${colors.join(", ")})` }}
    href={`${url}`}
  >
    {icon_src && <Image
      src={icon_src}
      alt={text}
      width={0}
      height={0}
      sizes="100vw"
    />}
    <span>{text}</span>
  </Link>
}