import "./Main.scss"
import {useState,useEffect} from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { CSVLink } from "react-csv";


const Main = () => {

  
  const [paragraph,setparagraph]=useState("dummy data")
  const [Hdata,setHdata]=useState([])
  const [on,seton]=useState(false)
  const data=[];
  const headers=[
    {
     label:"Words",key:"name"
    },
    {
     label:"counts",key:"count"
    }
  ]
  const csvlink={
    filename:"file.csv",
    headers:headers,
    data:data
  }
 
  useEffect(()=>{
    fetch("https://www.terriblytinytales.com/test.txt")
    .then(res=>res.text())
    .then(res=>setparagraph(res))

  },[])




const handle=()=>{
  setHdata(countWords());
  on===false?seton(true):seton(false);
}  



Hdata.map((word)=>{
data.push({
  name:word[0],
  count:word[1]
})
}) 
console.log(data)



  function countWords() {
    const words =paragraph.toLowerCase().split(/\s+/);
    const frequency ={};
    words.forEach((word) => {
      frequency[word] = frequency[word] || 0;
      frequency[word]++;
    });
    console.log(frequency)
   const datasorted=Object.entries(frequency).sort((a,b)=>b[1]-a[1]);
  const top20=datasorted.slice(0,20)
   return top20;
  }
 
 
  
  return (
    <div className="Maincontainer">
     
        {on===true? 
        <div className="content"> 
          <span className="heading">Top 20 most occuring Words!!</span>
        <BarChart className="bar"
      width={1300}
      height={400}
      data={data}
      margin={{
        top: 50,
        right: 30,
        left: 20,
        bottom: 5
      }}
   barCategoryGap={0}
   >
      <XAxis dataKey="name" padding={{left:10,right:10}}  scale="auto"  />
      <YAxis />
      <Tooltip />
      <Legend />
       <CartesianGrid strokeDasharray="0 3" />
      <Bar  dataKey="count" fill="#f705cf" background={{ fill: "#faf9f9" }} stroke="pink"  strokeWidth={4} />
    </BarChart>
   

    <CSVLink {...csvlink}>
    <button className="export">
    <div className="text1">exports</div>
    <div className="text2">download</div>
    </button>
    </CSVLink>
  
    </div>:<button className="btn" onClick={handle}>click me</button>
    }
    </div>
    
  )
}

export default Main;
