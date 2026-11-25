import Image from "next/image"
import { LinkButton } from "./components/LinkButton"
import { links } from "./links"
import Link from "next/link"

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function Home() {

  return (
    <>
      <main>
        <header className="page_header">
          {/* {<Image
            src="/profile_picture.jpg"
            alt="Foto de perfil de Tach"
            width={0}
            height={0}
            sizes="100vw"
            className="profile_picture"
          />} */}
          <h1>TACH</h1>
        </header>

        <section className="latest_release_section">
          <Image
            src="/UBDT_cover.jpeg"
            alt="Portada de la canción Un Besito De Tach"
            width={0}
            height={0}
            sizes="100vw"
            className="latest_release_image"
          />
          <a href="https://music.youtube.com/watch?v=GqGxSWkyaTs&si=W9z4X2MRqhCyu6Vh&drli=1"><p className="latest_release_main_text">
            Escucha Un Besito De Tach
            <br />
            {/*text space available*/}
          </p></a>
          <p className="latest_release_secondary_text">
            Disponible en todas las plataformas digitales
          </p>
        </section>

        <section className="links_section">
          <header>
            <h3>Links:</h3>
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
