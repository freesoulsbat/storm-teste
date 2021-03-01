import React, { Component } from 'react'
import "../css/style.css"

export default class Header extends Component {

    // constructor(props) {
    //     super(props)

    //     this.closeNav = this.closeNav.bind(this)
    // }

    closeNav() {
        const button = document.getElementById("sidebar")
        button.classList.remove("show")
    }

    render(){ 
        return <React.Fragment>
                    <header className="container-fluid custom-header d-flex">
                        <div className="icon-header d-flex justify-content-center align-items-center align-self-center">
                            <span>
                                <svg className="svg-header"xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="white" width="18px" height="18px"><g><rect fill="none" height="24" width="24"/></g><g><path d="M6,10h3v10H6V10z M6,5h3v4H6V5z M16,16h3v4h-3V16z M16,13h3v2h-3V13z M11,13h3v7h-3V13z M11,9h3v3h-3V9z"/></g></svg>
                            </span>
                        </div>
                        <div className="divider align-self-center"></div>
                        <div className="two-buttons-header d-flex align-items-center">
                            <button className="white-button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666666" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                            </button>
                            <button className="person-button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                            </button>
                        </div>
                        <div className="d-none div-form-header d-lg-flex d-xl-flex justify-content-center align-items-center flex-column">
                            <form className="form-header d-flex ">
                                <input className="input-form-header"type="text" placeholder="Pesquisar..."/>
                                <button className="button-form-header">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666666" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                                </button>
                            </form>
                            <div className="retangulo d-flex justify-content-center align-items-center"></div>
                        </div>
                        <div className="last-buttons-header d-flex flex-fill align-items-center justify-content-end pr-5">
                            <button className="white-button collapsed" type="button" data-toggle="collapse" data-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-haspopup="true">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666666" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/></svg>
                            </button>
                            <div className="d-none d-lg-block d-xl-block">
                                <button className="add-user d-flex justify-content-center align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                                    <p className="add-user-text">INCLUIR USUÁRIO</p>
                                </button>
                            </div>
                            <div className="d-none d-lg-block d-xl-block divider"></div>
                            <div className="d-none d-lg-block d-xl-block">
                                <div className="three-buttons-header d-flex justify-content-between">
                                    <button className="three-buttons">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666666" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                                    </button>
                                    <button className="three-buttons">
                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="#666666" width="24px" height="24px"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></g></svg>
                                    </button>
                                    <button className="three-buttons">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666666" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="collapse" id="sidebar">
                        <div className="sidebar d-flex justify-content-end" >
                            <div className="nav-sidebar navbar flex-column d-flex align-items-center justify-content-start" >
                                <div className="div-nav-sidebar d-flex align-items-center">
                                    <span className="span-div-nav-sidebar">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/></svg>
                                    </span>
                                    <h3 className="h3-div-nav-sidebar">FILTROS</h3>
                                    <div className=" d-flex flex-fill justify-content-end">
                                        <button className="button-div-nav-sidebar" id="close-button" onMouseUp={this.closeNav}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666666" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="info-text d-flex justify-content-start align-items-center">
                                    <p >Utilize os filtros abaixo para refinar os resultados da tabela, clique no botão APLICAR para salvar as alterações.</p>
                                </div>
                                <div className="box-nav d-flex flex-column align-items-start justify-content-start">
                                    <ul className="list-nav navbar-nav">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
                                                TODAS AS DATAS DE INCLUSÃO
                                                <svg className="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#"></a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link " href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
                                                TODAS AS DATAS DE ALTERAÇÃO
                                                <svg className="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                                <a className="dropdown-item" href="#"></a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link " href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
                                                ATIVOS E INATIVOS
                                                <svg className="svg3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                                <a className="dropdown-item" href="#"></a>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="div-active-item d-flex justify-content-center align-items-center align">
                                        <a className="active-item" href="#" role="button">
                                            APLICAR
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </React.Fragment>
    }

}
