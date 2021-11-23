import React, { useEffect, useState } from "react";
import { Card , Dropdown} from "react-bootstrap";
import axios from "axios";
import "../App.css"

const Covid = () =>{

    const [selected,setSelected]= useState([]);
    const [data,setData] = useState([]);



   /*  const getCovidData= async()=>{
        try{
            const res = await fetch('https://api.covid19api.com/summary');
            const actualData= await res.json();
            setData(res.data.Countries);
            console.log(actualData);
            
        }
        catch(err){
            console.log(err);
        }
} */



    useEffect(()=>{
        // getCovidData();
        const URL="https://api.covid19api.com/summary";
        axios.get(URL)
        .then((res)=>{
            setData(res.data.Countries);
        });
    },[]);

    const display=(value)=>{
        setSelected(value)
    };


   

return (
    <>
    <div>
        <div>
            <h1 style={{
                justifyContent:"center",
                display:"flex",
                boxSizing:"border-box",
                borderStyle:"double",
                backgroundColor:"lightblue",
                
            }}>Covid Tracker</h1>

<Dropdown style={{
    padding:"20px",
   
    
}}>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                    {selected.length === 0 ?"Select Country": selected.Country}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ overflowY: "scroll", maxHeight: "360px" }}>
                    {data.map((value,index)=>{
                        return(
                            <div key={index}>
                                <Dropdown.Item onClick={()=> display(value)} className="dropdown-item">
                                    {value.Country}
                                </Dropdown.Item>
                            </div>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
            {selected.length === 0 ? null:(
            

            <div style={{
                display:"row",
                justifyContent:"center",
               }}>
                <Card style={{backgroundColor:"lightpink"}}>
                    <span>Country</span>
                    <span>{selected.Country}</span>
                </Card>
            
                <Card style={{backgroundColor:"lightgray"}}>
                    <span>NewConfirmed</span>
                    <span>{selected.NewConfirmed}</span>
                </Card>
                <Card style={{backgroundColor:"lightpink"}}>
                    <span>Total Confirmed</span>
                    <span>{selected.TotalConfirmed}</span>
                </Card>
                <Card style={{backgroundColor:"lightgray"}}>
                    <span>NewDeaths</span>
                    <span>{selected.NewDeaths}</span>
                </Card>
                <Card style={{backgroundColor:"lightpink"}}>
                    <span>TotalDeaths</span>
                    <span>{selected.TotalDeaths}</span>
                </Card>
                <Card style={{backgroundColor:"lightgray"}}>
                    <span>NewRecovered</span>
                    <span>{selected.NewRecovered}</span>
                </Card>
                <Card style={{backgroundColor:"lightpink"}}>
                    <span>TotalRecovered</span>
                    <span>{selected.TotalRecovered}</span>
                </Card>
                <Card style={{backgroundColor:"lightgray"}}>
                    <span>Date</span>
                    <span>{selected.Date}</span>
                </Card>
            </div>
            )}
        </div>
    </div>
      
    </>

)};

export default Covid;