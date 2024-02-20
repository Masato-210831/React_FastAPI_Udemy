import React, { useEffect } from 'react'
import { useReadSales } from '../hooks/useReadSales';

const ReadDatabase = (props) => {
  const { year, handleDataChange } = props;

  // dbからyearに絞ったデータを取得
  const { onClickReadSales } = useReadSales();

  //無限レンダリング回避のためのuseEffect
  useEffect(() => {

    // サイトを開いた初期状態でグラフを表示しないようにする
    if (year === "") {
      return;
    };


    const promise = onClickReadSales(year);

    let array = []
    let arrayDepartment = []
    let arrayYear = []
    let arraySales = []

    promise.then((data) => {
      if (data.length > 0) {
        console.log(data)
        arrayDepartment.push("department")
        arrayYear.push("year")
        arraySales.push("sales")

        for (let i = 0; i < data.length; i++) {
          arrayDepartment.push(data[i].department)
          arrayYear.push(data[i].year)
          arraySales.push(data[i].sales)
        }
        // 二次元配列へ
        array.push(arrayDepartment);
        array.push(arrayYear);
        array.push(arraySales);
        // console.log(array)
        handleDataChange(array);
      }
      else {
        console.log("データベースにその年のデータは存在しません。")
        handleDataChange(array);
      }
    })
  }, [year])

  return (
    <div></div>
  )
}

export default ReadDatabase