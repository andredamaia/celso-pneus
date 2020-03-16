import styled from 'styled-components';

export const Container = styled.div`
    .bg-red {
        background: #B2150D;
        padding: 50px 0;
        color: #fff;

        p {
            font-size: 16px;
            line-height: 26px;
            opacity: .7;
            color: #fff;
        }

        h2 { margin-bottom: 50px; }
    }

    .checklist {
        display: block;
        color: #fff;
        font-size: 16px;
        font-weight: 300;
        padding: 5px 0;
        padding-left: 55px;
        position: relative;
        margin-bottom: 20px;
        background: url('/static/check-circle.png') left center no-repeat;
    }

    .button-default {
        display: inline-block;
        color: #B2150D;
        background: #fff;
        height: 55px;
        line-height: 55px;
        font-weight: 700;
        font-size: 16px;
        padding: 0 30px;
        position: relative;

        .left {
            content: '';
            width: 0;
            height: 0;
            border-bottom: 55px solid #fff;
            border-left: 6px solid transparent;
            position: absolute;
            top: 0;
            left: -6px;
        }

        .right {
            content: '';
            width: 0;
            height: 0;
            border-top: 55px solid #fff;
            border-right: 6px solid transparent;
            position: absolute;
            bottom: 0;
            right: -6px;
        }
    }

    .bg-services {
        padding: 50px 0;
        
        h2 { margin-bottom: 50px; font-weight: 700; color: #B2150D; }

        .box-service {
            position: relative;
            padding: 10px;
            margin-bottom: 70px;

                &:hover span {
                    background: #1F1F1F url('/static/arrow-right.png') right 15px center no-repeat;
                    color: #fff;

                    &::before { border-bottom-color: #1F1F1F; }
                    &::after { border-top-color: #1F1F1F; }
                }

                &:hover img { filter: grayscale(100%); opacity: .4; }

            & > img { width: 100%; transition: all .3s ease-in-out; }

            span {
                color: #676767;
                font-size: 16px;
                font-weight: 600;
                height: 55px;
                line-height: 55px;
                padding: 0 25px;
                display: block;
                background: #fff url('/static/arrow-right.png') right 15px center no-repeat;
                position: absolute;
                bottom: -20px;
                left: 30px;
                width: 90%;
                box-shadow: 0 5px 15px rgba(0,0,0,.4);
                transition: all .3s ease-in-out;

                &::after {
                    content: '';
                    width: 0;
                    height: 0;
                    border-top: 55px solid #fff;
                    border-right: 6px solid transparent;
                    position: absolute;
                    bottom: 0;
                    right: -6px;
                    transition: all .3s ease-in-out;
                }

                &::before {
                    content: '';
                    width: 0;
                    height: 0;
                    border-bottom: 55px solid #fff;
                    border-left: 6px solid transparent;
                    position: absolute;
                    top: 0;
                    left: -6px;
                    transition: all .3s ease-in-out;
                }
            }
        }
    }

    .bg-whatsapp {
        padding: 50px 0;
        
        h2 { margin-bottom: 30px; margin-top: 60px; font-weight: 700; color: #B2150D; }

        .col-red {
            position: relative;
            padding: 50px 0;
            
            &::after {
                content: '';
                position: absolute;
                top: 0;
                right: 350px;
                width: 5000px;
                background: #b2160a;
                height: 100%;
            }

            &::before {
                content: '';
                width: 0;
                height: 0;
                border-top: 435px solid #b2160a;
                border-right: 100px solid transparent;
                position: absolute;
                top: 0;
                right: 250px;
            }

            img { position: relative; z-index: 10; }
        }

        a {
            img { margin-right: 15px; }

            color: #1F1F1F;
            font-size: 26px;
            font-weight: 700;
        }
    }

`;
