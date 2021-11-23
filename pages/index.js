import Head from 'next/head'

export default function Home({ stations }) {
  console.log(stations)
  return (
    // Have to have a single parent element but does not have to be a div
    <div>

      <head> 
        <title>Weather App with Next.js</title>
        <meta name='keywords' content='weather, Iceland' />
      </head>

      <h1>Select the city</h1>



      {stations.map((station) => (
        <h3>{station.name}</h3>
      ))}
      
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch ('http://apis.is/weather/getAvailableStations')
  const data = await res.json();
  const stations = data.results
  // const stations = await res.json()

  return {
    props: {
      stations
    }
  }

}
