import './table.css';

const Table = () => {
    return (
        <div className='tableCont'>
            <table>
                <tr>
                    <th>Cognome</th>
                    <th>Nome</th>
                    <th>Utente githb</th>
                    <th>Nome repo</th>
                    <th>Totale commit</th>
                    <th>Data creazione</th>
                    <th>Ultimo aggiornamento</th>
                </tr>
                <tr>
                    <td>Biondo</td>
                    <td>Andrea</td>
                    <td>biondoandrea</td>
                    <td>Biondo-Andrea-github</td>
                    <td>4</td>
                    <td>28/10/2021</td>
                    <td>28/10/2021</td>
                </tr>
                <tr>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                </tr>
            </table>
        </div>
    )
}

export default Table;