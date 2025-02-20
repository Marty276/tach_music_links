import Image from "next/image"
import { LinkButton } from "./components/LinkButton"
import { links } from "./links"
import Link from "next/link"

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
          <a href="https://music.youtube.com/playlist?list=OLAK5uy_nrURO-xFmx-3_KhJ2Mccmb39_Ji9_OS34&si=9n1C0QES2FD0frv6"><p className="latest_release_main_text">
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
            {links.map((linkInfo, id) => <li key={id}><LinkButton {...linkInfo} /></li>)}
          </ul>
        </section>
        <footer className="page_footer">Developed by <Link style={{textDecoration: "underline"}} href="https://github.com/Marty276">Marty B.</Link></footer>
      </main>
    </>
  )
}
