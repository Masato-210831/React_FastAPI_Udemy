import React from 'react'
import Papa from "papaparse"
import ReactFileReader from "react-file-reader"
import { Button } from '@mui/material'
import { useCreateSale } from '../hooks/useCreateSale'


const ReadCsv = (props) => {
  const { handleDataChange } = props;
  const { onClickCreateSales } = useCreateSale()
  const uploadFile = (files) => {
    Papa.parse(files[0], {
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results);
        //バックエンドへデータの送信
        onClickCreateSales(results.data)
        //home.jsのdata（useState）の更新
        handleDataChange(results.data)
      }
    });
  }

  return (
    <>
    <div style={{display:'flex'}}>
        <ReactFileReader handleFiles={uploadFile} fileTypes={".csv"} >
          <Button variant="contained" >Upload</Button>
        </ReactFileReader>
      </div>
    </>
  )
}

export default ReadCsv