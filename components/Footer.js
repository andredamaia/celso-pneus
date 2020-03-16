import React from 'react';
import Link from 'next/link';

import { Container } from '../components/styles/Footer';

export default function Footer() {
  return (
    <Container>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4">
                    <h4>Endereço</h4>

                    <p>
                        Av. Paulo Schroeder, 420 <br />
                        Boehmerwald - Joinville - SC
                    </p>
                </div>

                <div className="col-12 col-md-3">
                    <h4>Contato</h4>

                    <p><img src="/static/white-whatsapp.png" alt=""/> (47) 99612.2583</p>
                    <p><img src="/static/white-phone.png" alt=""/> (47) 3429.6521</p>
                </div>

                <div className="col-12 col-md-3">
                    <h4>Atendimento</h4>

                    <p>
                        De segunda a sábado <br />
                        das 8h as 12h <br />
                        das 13h as 18h
                    </p>
                </div>

                <div className="col-12 col-md-2">
                    <ul className="list-footer">
                        <li>
                            <Link href="/"><a>Home</a></Link>
                        </li>
                        
                        <li>
                            <Link href="/"><a>Sobre</a></Link>
                        </li>

                        <li>
                            <Link href="/"><a>Serviços</a></Link>
                        </li>

                        <li>
                            <Link href="/"><a>Contato</a></Link>
                        </li>
                    </ul>
                </div>

                <div className="col-12">
                    <div className="copyright">
                        Copyright © 2020 - Celso Pneus - Todos os direitos reservados
                    </div>
                </div>
            </div>
        </div>
    </Container>
  );
}
