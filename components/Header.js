import React from 'react';
import Link from 'next/link'



import { Container } from './styles/Header';

export default function Header() {
  return (
    <Container>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 text-green">

                </div>

                <div className="col-12 col-md-4">
                    <nav>
                        <style jsx>{`
                            a {
                            margin: 0 10px 0 0;
                            }
                        `}</style>

                        <Link href="/">
                            <a>Home</a>
                        </Link>

                        <Link href="/sobre">
                            <a>Sobre</a>
                        </Link>

                        <Link href="/servicos">
                            <a>Serviços</a>
                        </Link>

                        <Link href="/contato">
                            <a>Contato</a>
                        </Link>

                    </nav>
                </div>
            </div>
        </div>
    </Container>
  );
}
