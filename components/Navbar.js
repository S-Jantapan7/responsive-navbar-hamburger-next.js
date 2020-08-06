import React, { useState } from 'react'
import Link from "next/link"
import { NavbarData } from "./NavbarData"

function Navbar() {
    const [status, setStatus] = useState('close');
    return (
        <nav>
            <div className="NavBarmain">
                <Link href=''>
                    <img src="/s-back.png" className="imgnav" />
                </Link>
                <Link href=''>
                    <h1 className="navbar-logo"> LOGAX </h1>
                </Link>
                <div className="BurgerMenu_container" role="button"
                    onClick={() => setStatus(status === 'open' ? 'close' : 'open')}>
                    <i className={status}></i>
                    <i className={status}></i>
                    <i className={status}></i>
                </div>
                <ul className={status === 'open' ? 'nav-menu active' : 'nav-menu'}>
                    {NavbarData.map(prod => (
                        <li key={prod.id} >
                            <Link href={prod.Url}>
                                <a >
                                  {prod.links}
                                </a>
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
            <style jsx>{`
                nav {
                    position: fixed;
                    width: 100%;
                    background: #fff;
                }
                  .NavBarmain {
                    width: 80%;
                    margin: auto;
                    min-height: 0vh;
                    display: flex;
                    justify-content: space-between;
                    align-items: center; 
                  }
                  .imgnav {
                    width: 60px;
                    height: 60px;
                  }
                  .nav-menu {
                    width: 80%;
                    display: grid;
                    grid-template-columns: repeat(5, auto);
                    list-style: none;
                    text-align: center;
                    justify-content: end;
                    margin-right: 2rem;
                }
                .nav-menu li {
                  text-align: center;
                  top: 55px;
                  color: #fff;
                  width: 100%;
                  padding: 0.5rem 1rem;
                }
                  .BurgerMenu_container {
                    display: none;
                  }

                  @media (max-width: 780px) {
                    .NavBar-s {
                        width: 100%;
                        padding: 0px;
                    }
                    .nav-menu {
                      display: flex;
                      background: #fff;
                      flex-direction: column;
                      height: 300%;
                      position: absolute;
                      top: 55px;
                      left: -100%;
                      opacity: 1;
                      padding: 0px;
                      transition: all 0.5s ease;
                      
                    }
                    .nav-menu.active {
                      display: flex;
                      width: 100%;
                      top: 55px;
                      left: 0   ;
                      opacity: 1;
                      transition: all 0.5s ease;
                    }
                    .nav-menu li {
                      text-align: center;
                      top: 55px;
                      color: #fff;
                      width: 100%;
                      padding: 0.5rem 1rem;
                    }
                    .BurgerMenu_container {
                      display: flex;
                      flex-direction: column;
                      padding: 18px;
                    }
                    i {
                      background-color: #000;
                      width: 50px;
                      height: 3.5px;
                      margin: 4px;
                      border-radius: 2px;  
                      transition:all ease 0.5s;
                    }
                    .open:nth-child(1) { transform: rotate(45deg) translateY(16px);  }
                    .open:nth-child(2) { opacity: 0; }
                    .open:nth-child(3) { transform: rotate(-45deg) translateY(-16px); }
                    .close:nth-child(1) { transform: rotate(0) translateY(0); }
                    .close:nth-child(2) {   opacity: 1; }
                    .close:nth-child(3) { transform: rotate(0) translateY(0); }
                }
            `}</style>

        </nav>
    )

}
export default Navbar
