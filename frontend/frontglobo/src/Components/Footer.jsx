import React, {Component} from 'react'
import '../css/style.css'



export default class Footer extends Component{
    divDate() {
        let dayName = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
        let monName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro"]
        let now = new Date()
        const date = <p> {dayName[now.getDay()]}, <strong>{now.getDay()}</strong> de <strong>{monName[now.getMonth()]}</strong> de <strong>{now.getFullYear()}</strong> <strong className="strong-style"> // {now.getHours()}:{now.getMinutes()}:{now.getSeconds()}</strong></p>
        return date
    }

    render(){
        return <React.Fragment>
                    <footer className="d-flex container-fluid div-footer ">
                        <div className="on-air d-inline-flex justify-content-start align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF8700" width="16px" height="16px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
                            <p>NO AR</p>
                        </div>
                        <div className="update d-inline-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666666" width="16px" height="16px"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/></svg>
                            <p >ENCONTRO - 10:00</p>
                        </div>
                            <div className="d-none update2 d-xl-flex d align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="#666666" width="16px" height="16px"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><g><path d="M21,10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-0.1c-2.73,2.71-2.73,7.08,0,9.79s7.15,2.71,9.88,0 C18.32,15.65,19,14.08,19,12.1h2c0,1.98-0.88,4.55-2.64,6.29c-3.51,3.48-9.21,3.48-12.72,0c-3.5-3.47-3.53-9.11-0.02-12.58 s9.14-3.47,12.65,0L21,3V10.12z M12.5,8v4.25l3.5,2.08l-0.72,1.21L11,13V8H12.5z"/></g></g></g></svg>
                                <p >Última atualização em 10:28</p>
                            </div>
                        <div className="wrapper-date d-flex justify-content-end align-self-center">
                            <div className=" div-date ">
                                {this.divDate()}
                            </div>
                        </div>
                    </footer>
            </React.Fragment>
    }
}