import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios'
import { CssBaseline } from '@material-ui/core';

function Table(props){

    const [data, setData] = useState([])

    const columns = [
        {
            title: 'Cidade', field: 'nome'
        },
        {
            title: 'Estado', field: 'microrregiao.mesorregiao.UF.sigla'
        }
    ]

    useEffect(()=>{
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${props.uf}/municipios`)
        .then(resp => resp.json())
        .then(resp => setData(resp))
    },[])
    
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

export default Table