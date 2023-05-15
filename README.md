# **SHIVAM SARMA ROY**                                                                                       
# **Registration Number : 12015930**








## **Submitted To**


# **(Terribly Tiny Tales)**

### School of Computer Science and Engineering

![image](https://github.com/xyzSHIvam/Terribly_Tiny_Tales_12015930/assets/116440760/6ec23bd3-3250-472a-aa34-1ed9d2597a1f)



# DEPLOYED LINK: https://64613af9db1c453fd29b7a89--jolly-elf-d16966.netlify.app/

# PDF FILE: https://drive.google.com/file/d/1E2zAXNwWBKmhBvMrnwEfpHDlGQWbdPyL/view?usp=sharing

# **Library used in the project:**

## **React-CSV:** 

React-CSV is a library for generating and downloading CSV (Comma-Separated Values) files in React applications. It provides a simple API to create CSV data from arrays or objects and offers options for customization.
With React-CSV, you can easily convert data into CSV format and provide users with the ability to download the generated file. It offers components like CSVLink and CSVDownload to facilitate this functionality.
The CSVLink component allows you to create a link or button that, when clicked, triggers the download of a CSV file. You can pass an array or object as the data prop, representing the content of the CSV file.
React-CSV provides various options to customize the generated CSV file, including the ability to specify the filename, delimiter, encoding, headers, and more.The library is straightforward to install using npm or yarn, and the API is intuitive and easy to use. By incorporating React-CSV into your React application, you can provide users with the ability to download CSV files for data export or other purposes.



## **Rechart js:**

Recharts is a popular charting library for React that provides a wide range of highly customizable and interactive charts. It leverages the power of D3.js under the hood and offers a declarative API, making it easy to create beautiful and responsive charts in React applications.
With Recharts, you can create various types of charts, including line charts, bar charts, area charts, pie charts, scatter charts, and more. It supports both static and dynamic data visualization and provides numerous options for customizing the appearance and behavior of charts.
Recharts components are highly configurable, allowing you to control aspects such as axis labels, tooltips, legends, colors, gradients, animations, and responsiveness. The library also supports responsive design, enabling your charts to adapt to different screen sizes and devices.
Integrating Recharts into your React application is straightforward. You can install it using npm or yarn and then import the necessary components into your code. You can pass your data to the chart components and configure them using props.

# **Main.jsx:**
```
useEffect(() => {
    fetch("https://www.terriblytinytales.com/test.txt")
      .then(res => res.text())
      .then(res => setparagraph(res))

  }, [])
```

The above code is using the useEffect hook in a React functional component to fetch the contents of a text file from the URL "https://www.terriblytinytales.com/test.txt" and update the state with the fetched text.The callback function is executed when the component mounts (since an empty dependency array [] is provided). It will not execute again unless any of the dependencies in the array change. Inside the callback function, the fetch function is used to make an HTTP GET request to the specified URL. It returns a Promise. The first .then block is chained to the fetch operation and receives the response object as an argument. The res.text() method is called on the response object to extract the text content from the response. This method also returns a Promise. The second .then block is chained to the previous one. It receives the text content as an argument and sets the state using the setparagraph function  for the paragraph state variable.

```
function countWords() {
    const words = paragraph.toLowerCase().split(/\s+/);
    const frequency = {};

    words.forEach((word) => {
      frequency[word] = frequency[word] || 0;
      frequency[word]++;
    });

 const datasorted=Object.entries(frequency).sort((a, b) => b[1]-a[1]);
    const top20 = datasorted.slice(0, 20)
    return top20;

  }

```

The paragraph variable containes  a string containing the text to be analyzed.The countWords function converts the paragraph to lowercase and splits it into an array of words using a regular expression (/\s+/) that matches one or more whitespace characters.It initializes an empty object called frequency to store the word frequency counts.The forEach loop iterates over each word in the words array. For each word, it checks if the word already exists as a key in the frequency object. If not, it initializes it to 0. Then, it increments the count for that word by 1.After the loop, the frequency object contains the word frequency counts for each unique word in the paragraph.The we use Object.entries to convert the frequency object into an array of key-value pairs. Then we applies a sorting function to sort the array in descending order based on the word frequencies (the second element of each pair, b[1] - a[1]).The datasorted array contains the sorted word-frequency pairs.Then we selects the top 20 elements from the datasorted array using slice(0, 20). These are the words with the highest frequencies.The top20 array is returned as the result of the countWords function.

```
const handle = () => {
    setHdata(countWords());
    on === false ? seton(true) : seton(false);
  }

```

It calls the countWords function, to get the top 20 most frequently occurring words as we mention above this code  and assigns the result to the Hdata state variable using the setHdata function.It also checks the value of the “on” state variable. If it is false, it sets on to true using the seton function. If it is true, it sets on to false.

```
const data = [];
 
Hdata.map((word) => {
    data.push({
      name: word[0],
      count: word[1]
    })
  })	

```

It creates a new array of object with properties name and count.As for Histogram and CSV file that we will be generating in this project and for that purpose we will be required with array of object having two properties mentioned above. The name property is assigned the value of the first element of the word array (word[0]), which represents the word itself.The count property is assigned the value of the second element of the word array (word[1]), which represents the frequency count of the word.The new object is then pushed into the data array.

```
const headers = [
    {
      label: "Words", key: "name"
    },
    {
      label: "counts", key: "count"
    }
  ]

  const csvlink = {
    filename: "file.csv",
    headers: headers,
    data: data
  }
  ```
  
The headers array contains objects that define the labels and corresponding keys for each column in the CSV file. In this case, it defines two columns: "Words" and "counts". Each object has a label property representing the column label and a key property representing the corresponding key in the data array.The csvlink object is defined with the following properties:
filename: Specifies the desired filename for the exported CSV file. In this case, it is set to "file.csv".
headers: Specifies the array of headers defined earlier. This indicates how the columns in the CSV file should be labeled.
data: Specifies the data array that contains the objects representing the rows of the CSV file. The data array that we have created.
The csvlink object is typically used as a prop for the <CSVLink> component, which was used in the previous code snippet. It provides the necessary information to generate a CSV file with the specified filename, headers, and data.When the user clicks the "exports" and "download" button (as shown in the previous code snippet), the <CSVLink> component uses the csvlink object to generate and trigger the download of a CSV file with the provided data and configuration.
	
  ```
  return (
    <div className="Maincontainer">

      {on === true
        ?
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
            <XAxis dataKey="name" padding={{ left: 10, right: 10 }} scale="auto" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="0 3" />
            <Bar dataKey="count" fill="#f705cf" background={{ fill: "#faf9f9" }} stroke="pink" strokeWidth={4} />
          </BarChart>

          <CSVLink {...csvlink}>
            <button className="export">
              <div className="text1">exports</div>
              <div className="text2">download</div>
            </button>
          </CSVLink>

        </div> 
        : <button className="btn" onClick={handle}>click me</button>
      }
    </div>

  )
```
  The component is enclosed within an element with the class name "Maincontainer".If on is true, it renders the content inside the <div className="content"> element.The content includes a heading with the text "Top 20 most occurring Words!!" rendered as a <span> element with the class name "heading".It renders a <BarChart> component from a charting library ( Recharts) with various props specified.The <BarChart> component receives data as a prop, which is an array of objects with name and count properties that we created just above this code. The chart represents the frequency count (count) of each word (name) using bars.The <CSVLink> component is used to create a link/button that allows the user to export and download the data as a CSV file. It receives props from the csvlink object.Inside the <CSVLink> component, there is a <button> element with the class name "export" that includes two nested <div> elements with class names "text1" and "text2" representing the text "exports" and "download" respectively.If on is false, it renders a single <button> element with the class name "btn" and the text "click me". Clicking this button triggers the handle function that was mention above to set content of Hdata state  to toggle the value of on.
  
  ```
  export default Main;
  
  ```
  The Main component can then be used within the App.js file.
  
  # **COMPLETE CODE:**
  
  ```
  import "./Main.scss"

import { useState, useEffect } from "react"

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

  const [paragraph, setparagraph] = useState("dummy data")
  const [Hdata, setHdata] = useState([])
  const [on, seton] = useState(false)
  const data = [];

  const headers = [
    {
      label: "Words", key: "name"
    },
    {
      label: "counts", key: "count"
    }
  ]

  const csvlink = {
    filename: "file.csv",
    headers: headers,
    data: data
  }

  useEffect(() => {
    fetch("https://www.terriblytinytales.com/test.txt")
      .then(res => res.text())
      .then(res => setparagraph(res))

  }, [])

  function countWords() {
    const words = paragraph.toLowerCase().split(/\s+/);
    const frequency = {};

    words.forEach((word) => {
      frequency[word] = frequency[word] || 0;
      frequency[word]++;
    });

    const datasorted = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
    const top20 = datasorted.slice(0, 20)
    return top20;

  }


  const handle = () => {
    setHdata(countWords());
    on === false ? seton(true) : seton(false);
  }


  Hdata.map((word) => {
    data.push({
      name: word[0],
      count: word[1]
    })
  })
  





  return (
    <div className="Maincontainer">

      {on === true
        ?
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
            <XAxis dataKey="name" padding={{ left: 10, right: 10 }} scale="auto" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="0 3" />
            <Bar dataKey="count" fill="#f705cf" background={{ fill: "#faf9f9" }} stroke="pink" strokeWidth={4} />
          </BarChart>

          <CSVLink {...csvlink}>
            <button className="export">
              <div className="text1">exports</div>
              <div className="text2">download</div>
            </button>
          </CSVLink>

        </div> 
        : <button className="btn" onClick={handle}>click me</button>
      }
    </div>

  )
}

export default Main;
```
  
  # **OUTPUT:**

  ![image](https://github.com/xyzSHIvam/Terribly_Tiny_Tales_12015930/assets/116440760/6a8d842b-3489-4811-bf26-d6a987308dbc)

  
  ![image](https://github.com/xyzSHIvam/Terribly_Tiny_Tales_12015930/assets/116440760/4e264d7f-9924-4346-a87a-5ff9140fe46d)

  
  ![image](https://github.com/xyzSHIvam/Terribly_Tiny_Tales_12015930/assets/116440760/485463d3-b09d-42c9-a840-f04db2cfe34d)






  

