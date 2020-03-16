import styled from 'styled-components';

export const Container = styled.div`
  .col-red {
    position: relative;
    padding: 30px 0;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 5000px;
      background: #b2160a;
      height: 100%;
    }

    &::before {
      content: '';
      width: 0;
      height: 0;
      border-top: 115px solid #b2160a;
      border-right: 50px solid transparent;
      position: absolute;
      top: 0;
      right: -50px;
    }

    img { position: relative; z-index: 10; }
  }

  .list-infos { 
    text-align: right; 
    margin: 0; 
    padding: 0; 
    border-bottom: 1px solid #E8E8E8;
    padding: 20px 0;
    margin-bottom: 20px;
  }
  .list-infos li {
    list-style: none;
    display: inline-block;
    margin-left: 30px;
    color: #9E9E9E;
    font-size: 14px;

    img { position: relative; top: -1px; margin-right: 5px; }
  }

  .list-menu { 
    text-align: right; 
    margin: 0; 
    padding: 0; 
  }
  .list-menu li { 
    display: inline-block; 
    list-style: none; 
    margin-left: 40px; 
  }
  .list-menu li a {
    color: #676767;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    display: inline-block;
    padding: 0 8px 25px;
    position: relative;

    &::before {
      content: '';
      width: 0;
      height: 0;
      border-top: 4px solid #b2160a;
      border-right: 4px solid transparent;
      position: absolute;
      top: 100%;
      right: -4px;
      display: none;
    }

    &::after {
      content: '';
      width: 0;
      height: 0;
      border-bottom: 4px solid #b2160a;
      border-left: 4px solid transparent;
      position: absolute;
      top: 100%;
      left: -4px;
      display: none;
    }

    &.active {
      border-bottom: 4px solid #b2160a;

      &::after, &::before { display: block; }
    }

    &:hover {
      text-decoration: none;
      border-bottom: 4px solid #b2160a;

      &::after, &::before { display: block; }
    }
  }
`;
