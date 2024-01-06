import React, { useEffect, useState } from "react";
import Papa from "papaparse";
// import Data from "../components/variables.csv"

function ReadCSVPage() {
  const [data, setData] = useState([]);

  const [columns, setColumns] = useState([]);
  const [values, setValues] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const columnArray = [];
        const valuesArray = [];

        results.data.map((data) => {
          columnArray.push(Object.keys(data));
          valuesArray.push(Object.values(data));
        });

        setData(results.data);
        setColumns(columnArray);
        setValues(valuesArray);
      },
    });
  };

  const handleFile = (event) => {
    Papa.parse(event.target.files[0]),
      {
        header: true,
        skipEmptyLines: true,
        complete: function (result) {
          const columnArray = [];
          const valuesArray = [];

          result.data.map((data) => {
            columnArray.push(Object.keys(data));
            valuesArray.push(Object.values(data));
          });

          setData(result.data);
          setColumns(columnArray);
          setValues(valuesArray);
        },
      };
  };

  // useEffect(()=>{
  //     const fetchData = async()=>{
  //         const response = await fetch(Data);
  //         const reader = response.body.getReader();
  //         const result = await reader.read();
  //         const decoder = new TextDecoder("utf-8");
  //         const csvData = decoder.decode(result.value);
  //         const parsedData = Papa.parse(csvData,{
  //             header:true,
  //             skipEmptyLines:true
  //         }).data;
  //         setData(parsedData)
  //     };
  //     fetchData();
  // })

  console.log("data", data);
  console.log("column", columns[0]);
  console.log("values", values[0]);
  return (
    <div className="w-full bg-white p-5 h-[100vh]">
      <div className="flex flex-col h-ful">
        <input type="file" accept=".csv" onChange={handleFileUpload} />

        {/* data.length ? (
          <div>
            <div className="flex flex-row justify-between w-[80%] mx-auto bg-gray-100 mt-2">
              <p className="w-[30%] font-semibold border-l p-3">
                Variable Name
              </p>
              <p className="w-[65%] font-semibold border-l p-3">
                Variable Description
              </p>
            </div>
            {data.map((item, index) => {
              return (
                <div
                  className="flex flex-row justify-between w-[80%] mx-auto border "
                  key={index}
                >
                  <p className="w-[30%] p-3">{item.VARIABLENAME}</p>
                  <p className="w-[65%] border-l p-3">
                    {item.VARIABLEDESCRIPTION}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <p>No Data</p>
          </div>
        ) */}

        <div className="w-[70%] h-[400px] overflow-scroll my-4">
        {data.length && (
            <table className=" w-full h-full overflow-scroll border p-1 table-auto ">
  
            <thead className="">
            <tr>
            {columns.map((col, index)=>{
              console.log("colllllllllllllll",index, "and ", col)
              if(index < values[0].length){
                  return <th className="border border-black px-2 py-1 bg-gray-100" key={index}>{col[index]}</th>
              }
            })}
            </tr>
            </thead>
  
            <tbody>
            {values.map((value,index)=>(
              <tr key={index}>
              {value.map((item,index)=>{
                return <td className="border border-black px-2 py-1" key={index}>{item}</td>
              })}
              </tr>
            ))}
            </tbody>
        
            </table>
          )}
        </div>

      </div>
    </div>
  );
}

export default ReadCSVPage;
