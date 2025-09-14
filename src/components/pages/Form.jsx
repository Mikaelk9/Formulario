import styles from './Form.module.css'
import { useState } from 'react';

function Form() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState('');
    const [erro, setErro] = useState('');

    function cadastrarUsuario(e) {
        e.preventDefault();


        if (!nome || !idade || !email) {
            setErro('Todos os campos são obrigatórios.');
            return;
        }

        if (isNaN(idade) || idade <= 0) {
            setErro('Idade inválida. Por favor, insira um número maior que 0.');
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setErro('E-mail inválido. Por favor, insira um e-mail válido.');
            return;
        }

        setErro('');

        const novoCadastro = { nome, idade, email };
        const cadastrosExistentes = JSON.parse(localStorage.getItem("cadastros")) || [];

        cadastrosExistentes.push(novoCadastro);
        localStorage.setItem("cadastros", JSON.stringify(cadastrosExistentes));

        setNome('');
        setIdade('');
        setEmail('');
    }

    return (
        <div>
            <form onSubmit={cadastrarUsuario} className={styles.form}>
                <h1 className={styles.form_title}>Adicione as informações de cadastro</h1>
                {erro && <p className={styles.erro}>{erro}</p>}

                <div className={styles.label}>
                    <label htmlFor="text">Nome: </label>
                    <input
                        type="text"
                        name="text"
                        id="text"
                        placeholder='Adicione o nome'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div className={styles.label}>
                    <label htmlFor="number">Idade: </label>
                    <input
                        type="number"
                        name="number"
                        id="number"
                        placeholder='Adicione a idade'
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                    />
                </div>

                <div className={styles.label}>
                    <label htmlFor="email">E-mail: </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Adicione o e-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className={styles.label}>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
