import React from 'react';
import Link from 'next/link';

import { Container } from '../components/styles/Index';

import BoxService from '../components/BoxService';

export default function Index() {
  return (
    <Container>
      <div className="banner">
        <img src="/static/banner-1.jpg" alt="" />
      </div>

      <div className="bg-red">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Aqui seu carro é nossa prioridade</h2>
            </div>

            <div className="col-12 col-md-4">
              <span className="checklist">Qualidade e Respeito</span>
              <span className="checklist">Agilidade e Precisão</span>
              <span className="checklist">Preço justo</span>

              <Link href="/servicos">
                <a className="button-default">
                  Conheça nossos serviços

                  <span className="left"></span>
                  <span className="right"></span>
                </a>
              </Link>
            </div>

            <div className="col-12 col-md-8">
              <div className="row">
                <div className="col-12">
                  <p>
                    <strong>Sempre trabalhamos com as melhores marcas e as melhores peças que seu automóvel merece. Anos de trajetória nos trouxeram até o onde estamos.</strong>
                  </p>
                </div>

                <div className="col-12 col-md-6">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante lorem, fringilla sed lacinia ac, bibendum eget neque. Mauris sodales volutpat enim, non accumsan ipsum dignissim ut. Suspendisse potenti. Nunc luctus metus quis dui mollis, at pretium enim tristique.</p>
                </div>

                <div className="col-12 col-md-6">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante lorem, fringilla sed lacinia ac, bibendum eget neque. Mauris sodales volutpat enim, non accumsan ipsum dignissim ut. Suspendisse potenti. Nunc luctus metus quis dui mollis, at pretium enim tristique.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-services">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Como podemos te ajudar?</h2>
            </div>

            <BoxService img="balanceamento" title="Balanceamento" />

            <BoxService img="bateria" title="Baterias" />

            <BoxService img="sistema-de-freio" title="Sistema de Freio" />

            <BoxService img="troca-de-oleo" title="Troca de Óleo" />

            <BoxService img="embreagem" title="Embreagem" />

            <BoxService img="alinhamento" title="Alinhamento" />

            <BoxService img="pneus" title="Pneus" />

            <BoxService img="rodas" title="Rodas" />
          </div>
        </div>
      </div>

      <div className="bg-whatsapp">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="col-red">
                <img src="/static/img-whats.jpg" alt="Agende sua visita" />
              </div>
            </div>

            <div className="col-12 col-md-5">
              <h2>Venha fazer <br /> uma avaliação <br /> gratuita</h2>

              <p>Agende sua avaliação gratuitamente <br /> direto com nossos especialistas.</p>

              <Link href="/">
                <a>
                  <img src="/static/icon-whatsapp.png" alt="" />
                  Agendar agora
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
