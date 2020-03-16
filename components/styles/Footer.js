import styled from 'styled-components';

export const Container = styled.div`
    background: #1D1D1D;
    padding: 50px 0;
    color: #fff;

    h4 { margin-bottom: 30px; }

    p { 
      opacity: .7; 

      img { margin-right: 10px; }
    }

    .list-footer {
        padding: 0;
        margin: 0;
    }
    .list-footer li {
        list-style: none;
    }
    .list-footer a {
        color: #fff;
        opacity: .7;
        transition: all .3s ease-in-out;
        text-transform: uppercase;
        font-weight: 600;
        display: block;
        margin-bottom: 10px;

        &:hover {
            opacity: 1;
        }
    }

    .copyright {
        text-align: center;
        border-top: 1px solid rgba(255,255,255,.2);
        padding: 40px 0 0;
        margin-top: 40px;
        font-size: 14px;
        opacity: .7;
    }
`;
