import React, { useState } from 'react';
import './style.css';
import logo from './../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from './../../services/api';

export default function Register(){
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[city, setCity] = useState('');
    const[uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch(err) {
            alert('Não foi possível realizar o cadastro, tente novamente.')
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="be the hero" />
                    <h1>Faça seu Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua ong</p>
                    <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color="#E02041"/>
                            Já Possuo Cadastro</Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="NOME DA ONG" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input type="email" placeholder="EMAIL"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="WHATSAPP"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input placeholder="CIDADE"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input placeholder="UF" style={{ width:80 }} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}