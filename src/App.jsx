import "./App.css";
import { useState } from 'react';

function ListaCompras({ itens }) {
    return (
        <div className="lista-compras-container">
            <ul className="lista-items">
                {itens.map((item) => (<li>{item}</li>))}
            </ul>
        </div>
    );
}

function FormularioAdicionarItens({ addItem }) {
    const [item, setItem] = useState([]);

    const enviaForm = (event) => {
        event.preventDefault();

        if (item === '') {
            alert('Informe o nome!');
            return;
        }

        addItem(item);
        setItem('');
    };

    return (
        <form action="#" method="post" onSubmit={enviaForm}>
            <fieldset>
                <div className="form-group mb-3">
                    <label htmlFor="item">Adicionar Novo Item na Lista:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="item"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Adicionar
                </button>
            </fieldset>
        </form>
    );
}

export default function App() {
    const [itens, setItens] = useState([]);

    const addItem = (item) => {
        setItens([...itens, item]);
    };

    return (
        <div className="App">
            <header>
                <h2>Lista de Compras:</h2>
            </header>
            <ListaCompras itens={itens} />
            <FormularioAdicionarItens addItem={addItem} />
        </div>
    );
}