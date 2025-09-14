import { useState, useEffect } from 'react';
import styles from './ListForm.module.css'

function ListForm() {
    const [cadastros, setCadastros] = useState([]);

    useEffect(() => {
        const cadastrosSalvos = JSON.parse(localStorage.getItem("cadastros")) || [];
        setCadastros(cadastrosSalvos);
    }, []);
    
    function removerCadastro(indexRemove){
        const novosCadastros = cadastros.filter((_, index) => index !== indexRemove);

        localStorage.setItem("cadastros", JSON.stringify(novosCadastros));

        setCadastros(novosCadastros);
    }


    return (
        <div className={styles.listForm}>
            <h2>Cadastros Realizados:</h2>
            <div className={styles.card_cadastros}>
                {cadastros.map((cadastro, index) => (
                    <div key={index} className={styles.card}>
                        <p><strong>Nome:</strong> {cadastro.nome}</p>
                        <p><strong>Idade:</strong> {cadastro.idade}</p>
                        <p><strong>Email:</strong> {cadastro.email}</p>
                        <button onClick={() => removerCadastro(index)}>Excluir</button>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ListForm