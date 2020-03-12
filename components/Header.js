import React from 'react';
import Link from 'next/link'

// import { Container } from './styles';

export default function Header() {
  return (
    <header>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4">

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
                        <a href="/non-existing">Non Existing Page</a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  );
}
