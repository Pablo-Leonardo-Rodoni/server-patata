import "../assets/styles/home.css";

export const Home = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="home-content">
            <div className="head">
              <img
                className="img1"
                src="/src/images/characters/abajoIzquierda.png"
                alt="elfo oscuro"
              />
              <span className="home-title">Bienvenidos Aventureros</span>
              <img
                className="img2"
                src="/src/images/characters/derechaOrca.png"
                alt="Orco hembra"
              />
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis eius perferendis, cupiditate animi placeat error
                atque adipisci optio provident suscipit exercitationem ex
                voluptatem nemo repellat. Libero harum, dignissimos facilis
                nesciunt saepe aperiam quisquam! Esse doloremque placeat ipsum
                alias asperiores mollitia ad aperiam optio qui, libero facilis
                minus quibusdam, facere amet recusandae dignissimos vel dolore
                repellendus rem. Accusantium, quibusdam necessitatibus.
                Provident, vel deleniti commodi saepe repudiandae ab quas est
                dicta a illum ipsam eligendi officia, laborum reiciendis facere
                itaque magnam ipsa, iure autem sequi illo blanditiis. Nihil
                sapiente at magni perferendis ducimus et doloremque ut est
                maiores. Reiciendis accusamus adipisci ipsum corrupti eos at
                suscipit aut dolores. Debitis dolore non minima harum pariatur?
                Tenetur molestias delectus possimus. Ad, atque incidunt!
                Sapiente architecto nesciunt error reiciendis similique tempore
                quasi autem adipisci voluptatibus est deleniti cupiditate alias
                dolore nulla dolor nobis, reprehenderit ab non. Nisi perferendis
                velit obcaecati eius accusamus, corrupti facere, perspiciatis
                numquam placeat eligendi error magnam sequi optio! Quisquam, sed
                debitis quam ipsum dolores cum reprehenderit sequi! Illo numquam
                eaque voluptatum suscipit rerum quidem consequatur ipsam ab non,
                vitae sed! Totam soluta doloremque repudiandae rerum ipsum
                consectetur ducimus aut repellendus quis veniam atque, tempore
                possimus laboriosam nulla, non, praesentium facilis! Ipsum!
              </p>
              <button type="button" className="button-link">
                <a className="button-a" href="/extra">
                  <img
                    className="button"
                    src="/src/images/utlitys/button.png"
                    alt="descarga el juego"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
