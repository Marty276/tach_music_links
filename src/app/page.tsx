import Image from "next/image"

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
            <br/>
            Nuestro último lanzamiento
          </p></a>
          <p className="latest_release_secondary_text">
            Disponible en todas las plataformas digitales
          </p>
        </section>

        <section className="links">
          <header>
            <h3>Links principales:</h3>
          </header>
          <ul className="links_list">

          </ul>
        </section>
      </main>
    </>
  )
}
