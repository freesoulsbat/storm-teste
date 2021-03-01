import React, {Component} from 'react'
import '../css/style.css'



export default class Main extends Component {

    closeOcultRow() {
        const element = document.getElementById('ocult-row')
        element.classList.remove('show')

    }

    showOcultRow() {
       const element = document.getElementById('ocult-row')
       element.classList.add('show')
    }


    render(){
        return <React.Fragment>
            <main className="container-fluid main-content">
                <table className="table-content">
                    <tbody>
                        <tr className="row1">
                            <th className="column0"></th>
                            <th className="on-left column1">USUÁRIO</th>
                            <th className="on-left column2">EMAIL</th>
                            <th className="column3">DATA DE INCLUSÃO</th>
                            <th className="column4">DATA DE ALTERAÇÃO</th>
                            <th className="column5">REGRAS</th>
                            <th className="column6 on-left">STATUS</th>
                            <th className="column7">AÇÕES</th>
                        </tr>
                        <tr className="row2">
                            <td><input type="checkbox"/></td>
                            <td className="on-left">ANPINA</td>
                            <td className="on-left">antonio.pina@tvglobo.com.br</td>
                            <td>28/05/2019</td>
                            <td>30/05/2019</td>
                            <td>01</td>
                            <td className="on-left text-success">ATIVO</td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666666" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></td>
                        </tr>
                        <tr className="row3">
                            <td><input type="checkbox"/></td>
                            <td className="on-left">CCHANG</td>
                            <td className="on-left">ciro.chang@tvglobo.com.br</td>
                            <td>28/05/2019</td>
                            <td>30/05/2019</td>
                            <td>01</td>
                            <td className="on-left text-success">ATIVO</td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666666" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></td>
                        </tr>
                        <tr className="row4">
                            <td><input type="checkbox"/></td>
                            <td className="on-left">TMARCAL</td>
                            <td className="on-left">thiago.marcal@tvglobo.com.br</td>
                            <td>28/05/2019</td>
                            <td>30/05/2019</td>
                            <td>01</td>
                            <td className="on-left text-success">ATIVO</td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666666" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></td>
                        </tr>
                        <tr className="row5">
                            <td><input type="checkbox"/></td>
                            <td className="on-left">ECGIANN</td>
                            <td className="on-left">ecgiannotto@tvglobo.com.br</td>
                            <td>28/05/2019</td>
                            <td>30/05/2019</td>
                            <td>01</td>
                            <td className="on-left text-success">ATIVO</td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666666" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></td>
                        </tr>
                        <tr className="row6" onMouseUp={this.showOcultRow}>
                            <td><input type="checkbox"/></td>
                            <td className="on-left">YFERNAND</td>
                            <td className="on-left">yuri.vasquez@tvglobo.com.br</td>
                            <td>28/05/2019</td>
                            <td>30/05/2019</td>
                            <td>02</td>
                            <td className="on-left text-success">ATIVO</td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666666" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></td>
                        </tr>
                        <tr className="row7" >
                            <td><input type="checkbox"/></td>
                            <td className="on-left">PLACERDA</td>
                            <td className="on-left">pedro.soares.lacerda@tvglobo.com.br</td>
                            <td>28/05/2019</td>
                            <td>30/05/2019</td>
                            <td>02</td>
                            <td className="on-left text-success">ATIVO</td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666666" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></td>
                        </tr>
                        <tr className="ocult-row collapse" id="ocult-row" onMouseUp={this.closeOcultRow}>
                            <td className="d-flex justify-content-end td-ocult-row">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666666" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666666" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <nav className="container-fluid nav-pag">
                    <ul className="pagination justify-content-center">
                    <li><a className="box-pag-left" href="#" tabIndex="-1">Primeiro</a></li>
                    <li><a className="box-pag-left" href="#">Anterior</a></li>
                    <li><a className="pag-active" href="#">1</a></li>
                    <li><a className="box-pag-right" href="#">Próximo</a></li>
                    <li><a className="box-pag-right" href="#">Último</a></li>
                    </ul>
                </nav>
            </main>
        </React.Fragment>
    }
    
}