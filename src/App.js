import './App.css';
import ScrollTopTop from './components/ScrollTopTop';
import { ChakraProvider,Heading, extendTheme } from "@chakra-ui/react";
import {AnimatePresence} from "framer-motion"
import "@fontsource/chivo-mono"
import React from 'react';
import {Routes, Route,Navigate, Link, useLocation } from "react-router-dom"
import PickingCard from './Pages/pickingenre';
import PickingGame from './Pages/pickingGame';
import GameSuggestion from './Pages/gameSuggestion';
import DataScroing from './Functions/DataScoring';
import PickingPlatform from './Pages/pickingPlatform';
const breakpoints = {
  xs:'0px',
  sm: '350px',
  mds:'480px',
  md: '600px',
  mdl:'800px',
  lg: '1020px',
  xl: '1200px',
  xxl: '1500px',
  '2xl': '1850px',
}

const theme = extendTheme({
  fonts: {
    heading:`"Chivo Mono", monospace;`
  },
  components:{
    Spinner:{
      sizes:{
        xl:{
          
        }
      }
    }
  },
  breakpoints

})




function App() {
  const [loadingg, setLoadingg]= React.useState(true)
  const [KEY,setKEY]=React.useState(0)


  const isMounted = React.useRef(false);
  let percentage = 0;
  const [percentagee,setPercentagee] = React.useState(0)
  let stepSize = 0;
  let previousData=[]
  let nextPage = ""



  
  const dataFetching=(nextPage)=>{
    if(nextPage !== null){
      fetch(nextPage)
      .then(response => response.json())
      .then((usefulData2) => {
        stepSize = stepSize +40;
        percentage =(stepSize *100) / usefulData2.count
        setPercentagee(percentage)
        console.log("Dataaa:",usefulData2)
        previousData= previousData.concat(usefulData2.results)
        nextPage = usefulData2.next})
      .then(()=>
      dataFetching(nextPage)
      )  
        // dataFetching(nextPage)
    }
    else{
      setPercentagee(100)
      console.log("previous",previousData)
      setLoadingg(false);
      setPercentagee(0)
      DataScroing(previousData,tags,slugs)
      setData(previousData)
      previousData=[]

    }
  }    
    
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2113a8a7dfmsh1cdd438b28598a3p1086f6jsn53e37c009a0e',
      'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
    }
  };
 
  const [data,setData]=React.useState([])
  const [slugs, setSlugs] = React.useState([])
  const [genre, setGenre] = React.useState('shooter')
  const [games, setGames] = React.useState([])
  const [authorize, setAuthorize] = React.useState(false)
  const [authorize1, setAuthorize1] = React.useState(false)
  const [platforms, setPlatforms] = React.useState('pc')


  const [authorize2, setAuthorize2] = React.useState(false)
  const [error, setError] = React.useState(null);
  const [tags, setTags] = React.useState([])
  let Tagoo = []
  React.useEffect(() => {
    if(isMounted.current){
      fetch(`https://rawg-video-games-database.p.rapidapi.com/games?key=081cc6bc94d047f4bc8e4a7729dfaca1&genres=${genre}&platforms=${platforms}&page_size=40&dates=2005-01-01,2022-12-31&metacritic=50,100`, options)
      .then(response => response.json())
      .then((usefulData) => {
        console.log("data1 :",usefulData)
        previousData=usefulData.results
        nextPage=usefulData.next
        dataFetching(nextPage)
        console.log("ismounted",isMounted.current)

      })
      .catch(err => console.error(err));
    }
    else {
      console.log("NOTHING")
    }
  }, [tags]);


    


React.useEffect(()=>{
  console.log("Tags Are:",tags,"Games:",games,"Slugs:",slugs)
},[tags])


const location = useLocation();
  
 
    return (

    <ChakraProvider theme={theme}>
      <main >
        <Link to="/Suggest-Me-A-Game" onClick={()=>{
          if (authorize){
          setAuthorize(!authorize)}
          if (authorize1){
            setAuthorize1(!authorize1)}
          if (authorize2){
            setAuthorize2(!authorize2)}
          setGames([])
          setTags([])
          setPlatforms('pc')
          setGenre('shooter')
          isMounted.current=false
          setLoadingg(true)
          }}>
        <Heading  as="h1" fontSize={{xs:'1.4rem',sm:'2rem', md:'2.8rem',lg:'4rem'}} color={'white'}   py={{xs:'1.4vh',sm:'1.3vh',lg:'3.5vh'}}>SUGGEST ME A GAME </Heading>
        </Link>
        <AnimatePresence mode='wait' >
        <ScrollTopTop>
        <Routes location={location} key={location.pathname}>
        <Route  path="/Suggest-Me-A-Game" element={<PickingPlatform platforms={platforms} setPlatforms={setPlatforms}  Authorized1={authorize1} setAuthorize1={setAuthorize1} setGenre={setGenre}/>}/>
        <Route  path="/pickingenre" element={
            authorize1 ? (
              <PickingCard setAuthorize1={setAuthorize1} Authorized1={authorize1} genre={genre} setGenre={setGenre} setSlugs={setSlugs} isMounted={isMounted} tags={tags} setTags={setTags} Authorized={authorize} setAuthorize={setAuthorize} genre={genre} games={games} setGames={setGames} 
                            setAuthorize2={setAuthorize2} Authorized2={authorize2}/>
            ) : (
              <Navigate replace to="/Suggest-Me-A-Game"/>
            )
          }/>
        <Route  path="/pickingGame" element={
            authorize ? (
              <PickingGame  setSlugs={setSlugs} isMounted={isMounted} tags={tags} setTags={setTags} Authorized={authorize} setAuthorize={setAuthorize} genre={genre} games={games} setGames={setGames} 
                            setAuthorize2={setAuthorize2} Authorized2={authorize2}/>
            ) : (
              <Navigate replace to="/Suggest-Me-A-Game"/>
            )
          }/>
        <Route  path="/gameSuggestion" element={
            authorize2 ? (
              <GameSuggestion KEY={KEY} setKEY={setKEY}  platforms={platforms} setPlatforms={setPlatforms} Data={data} slugs={slugs} loadingg={loadingg} percentage={percentagee} Tags={tags} Authorized={authorize} setAuthorize={setAuthorize} setGenre={setGenre} genre={genre}/>
            ) : (
              <Navigate replace to="/Suggest-Me-A-Game"/>
            )
          }/>
        </Routes>
        </ScrollTopTop>
        </AnimatePresence> 
      </main>
    </ChakraProvider>


  );
}

export default App;