import React from 'react'
import axios from "axios"

export const useCreateSale = () => {
  const endpoint = "http://127.0.0.1:8000/sales";
  const onClickCreateSales = async (data) => {
    console.log(data);
    console.log(data[0]);
    for (let i = 1; i < data[0].length; i++) {
      const queries = {
        department: data[0][i],
        year: Number(data[1][i]),
        sales: Number(data[2][i]),
      };
      console.log(queries)

      // DBへのPOST処理
      try {
        const res = await axios.post(endpoint, queries)
        if (Object.keys(res.data).length > 0) {
          console.log("登録成功")
          console.log(res.data)
        }
        else {
          console.log("登録失敗")
        }
      } catch (e) {
      console.log(e)
    }
  };
};
return { onClickCreateSales }
};
