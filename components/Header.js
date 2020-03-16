import React from 'react';
import Link from 'next/link'

import { Container } from './styles/Header';

export default function Header() {
  return (
    <Container>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-3">
                    <div className="col-red">
                        <Link href="/">
                            <a><img src="/static/logo.jpg" alt="Celso Pneus" /></a>
                        </Link>
                    </div>
                </div>

                <div className="col-12 col-md-2"></div>

                <div className="col-12 col-md-7">
                    <ul className="list-infos">
                        <li><img src="/static/clock.png" alt="" /> Seg a Sáb- 08h as 18h</li>
                        <li><img src="/static/whatsapp.png" alt="" /> (47) 99612-2583</li>
                        <li><img src="/static/phone.png" alt="" /> (47) 3429.6521</li>
                    </ul>

                    <ul className="list-menu">
                        <li>
                            <Link href="/">
                                <a className="active">Home</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/sobre">
                                <a>Sobre</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/servicos">
                                <a>Serviços</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/contato">
                                <a>Contato</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Container>
  );
}
