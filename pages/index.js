import Head from 'next/head'
import SelectSearch from 'react-select-search';
import fuzzySearch from "../components/fuzzySearch"

export default function Home({ stations }) {

  
  return (
    // Have to have a single parent element but does not have to be a div
    <div>

      <head> 
        <title>Weather App with Next.js</title>
        <meta name='keywords' content='weather, Iceland' />
      </head>

      <h1>Selet the city</h1>

      <SelectSearch
        options={[]}
        value="15997"
        getOptions={() => {
            return new Promise((resolve, reject) => {
                fetch(`http://apis.is/weather/getAvailableStations`)
                    .then(response => response.json())
                    .then(({ results }) => {
                        resolve(results.map(({ id, name }) => ({ value: id, name: name })))
                    })
                    .catch(reject);
            });
        }}
        search
        filterOptions={fuzzySearch}
        emptyMessage="Not found"
        placeholder="City"
    />


    {/* <SelectSearch
        options={countries}
        search
        filterOptions={fuzzySearch}
        emptyMessage="Not found"
        placeholder="Select your country"
    /> */}



    

     

    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch ('http://apis.is/weather/getAvailableStations')
//   const data = await res.json();
//   const stations = data.results

  
//   // const stations = await res.json()

//   return {
//     props: {
//       stations
//     }
//   }

// }
