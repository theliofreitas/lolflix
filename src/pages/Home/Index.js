import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriasRepository from '../../repositories/categorias';
// import BannerVideo from '../../components/BannerVideo';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div style={{ background: '#141414' }}>

      <Menu />

      {dadosIniciais.length > 0

        && (
        <>
          {dadosIniciais.map((categoria, index) => {
            if (index === 0) {
              return (
                <div key={categoria.id}>
                  <BannerMain
                    videoTitle={dadosIniciais[0].videos[0].titulo}
                    url={dadosIniciais[0].videos[0].url}
                    videoDescription="Cinematic de lançamento da Season de 2020"
                  />
                  <Carousel
                    ignoreFirstVideo
                    category={dadosIniciais[0]}
                  />
                </div>
              );
            }

            return (
              <Carousel
                key={categoria.id}
                category={categoria}
              />
            );
          })}
        </>

        )}

      <Footer />

    </div>
  );
}

export default Home;
