import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios'

export const Table= (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/rn/municipios")
        .then(resp => resp.json)
        .then(resp => setData(resp))
    },[])

    const columns = [
        {
            title: 'Cidade', field: 'nome'
        },
        {
            title: 'Estado', field: 'microrregiao.mesorregiao.UF.sigla'
        }
    ]
    
    return(
        <div>
            <MaterialTable title="Cidades por estados"
            data={data}
            columns={columns}
            options={
                {search:false,
                paging:false,
                exportButton:true}
            }
            />
        </div>
        
    )
}