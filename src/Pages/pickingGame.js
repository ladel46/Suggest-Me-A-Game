import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowBackIcon,ChevronRightIcon } from '@chakra-ui/icons'
import { Tags } from "../components/GamesTags";
import { Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    Text, 
    Image,Heading, 
    VStack, 
    Center,
    HStack,
    Checkbox, 
    CheckboxGroup,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    RadioGroup,
    useCheckbox,
    useCheckboxGroup,
    Box,
    Button,
    Link,
    Flex,
    Grid,
    GridItem,
    useToast,
    Stack
    

} from '@chakra-ui/react'
import AnimatedPage from "../components/AnimatedPage";
import {motion} from "framer-motion"
function removeDuplicates(arr) {
  var unique = [];
  arr.forEach(element => {
      if (!unique.includes(element)) {
          unique.push(element);
      }
  });
  return unique;
}

function CustomCheckbox(props) {
    const { getInputProps, getCheckboxProps } = useCheckbox(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='10'
          boxShadow='md'

          _checked={{
            bgGradient: 'linear(to-r, #eef564 0%, #ff8936 20%, #f72222 100%)',
            color: 'white',
            borderColor: 'black',
            _hover: {
              color: "white"
            }
          }}
          _hover={{
            color:'Red',
          }}
          px={1}
          pb={3}
          pt={1}
        >
          {props.children}
        </Box>
      </Box>
    )
  }


const PickingGame = (props) => {
  let options1 = []
  let tags1=[]
  let tags2 = []
  let tags3=[]
  let slugs1=[]
  let slugs2=[]
  let slugs3=[]
  let options2 = []
    switch(props.genre){
      case 'shooter':
          options1 = [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co4sbw.png", Name:"Call Of Duty", id:'1',tags: Tags.CodTags,slug:"call-of-duty"},
                          {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co4apq.png" ,Name:"Counter Strike", id:'2',tags:Tags.CsgoTags,slug:"counter-strike"},
                          {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2mvt.png" ,Name:"Valorant", id:'3',tags: Tags.ValoTags,slug:"valorant"},
                          {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co38x1.png" ,Name:"Battlefield", id:'4',tags:Tags.BfTags,slug:"battlefield"},
                          {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co5tkm.png" ,Name:"Overwatch", id:'5',tags:Tags.OwTags,slug:"overwatch"}]


                            options2 = [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2nbc.png", Name:"GTA", id:'6',tags:Tags.GtaTags,slug:"grand-theft-auto"},
                          {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co20uo.png" ,Name:"ARMA3", id:'7',tags:Tags.ArmaTags,slug:"arma"},
                          {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2xlq.png" ,Name:"EFT", id:'8',tags:Tags.TarkovTags,slug:"escape-from-tarkov"},
                          {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2ekt.png" ,Name:"Fortnite", id:'9',tags:Tags.FortTags,slug:"fortnite"},
                          {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1wzo.png" ,Name:"Apex Legends", id:'10',tags:Tags.ApexTags,slug:"apex-legends"},]
                          break;
      case 'racing':
        options1 = [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co5fsv.png", Name:"Need For Speed", id:'1',tags:Tags.NfsTags,slug:"need-for-speed"},
                    {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co24hd.png" ,Name:"Forza Motorsport", id:'2',tags:Tags.ForzaTags,slug:"forza-motorsport"},
                    {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co3ofx.png" ,Name:"Forza Horizon", id:'3',tags:Tags.Forza2Tags,slug:"forza-horizon"},
                    {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2b6x.png" ,Name:"Trials Fusion", id:'4',tags:Tags.TrialsTags,slug:"trials-fusion"},
                    {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co31gd.png" ,Name:"F1", id:'5',tags:Tags.F1Tags,slug:"f1"}]


          options2 = [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2nbc.png", Name:"GTA", id:'6',tags:Tags.GtaTags,slug:"grand-theft-auto"},
                      {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co3wib.png" ,Name:"Assetto Corsa", id:'7',tags:Tags.AssetoTags,slug:"assetto-corsa-competizione"},
                      {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co213q.png" ,Name:"Mario Kart", id:'8',tags:Tags.MariocTags,slug:"mario-kart"},
                      {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2fe9.png" ,Name:"Trackmania", id:'9',tags:Tags.TrackTags,slug:"trackmania"},
                      {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co28p7.png" ,Name:"Burnout ", id:'10',tags:Tags.BurnoutTags,slug:"burnout"},]
                      break;
       case 'platformer':
        options1 =    [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2ujj.png", Name:"Super Mario", id:'1',tags:Tags.MarioTags,slug:"super-mario"},
                      {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1p7d.png" ,Name:"Little Nightmares", id:'2',tags:Tags.LittleTags,slug:"little-nightmares"},
                      {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co3byy.png" ,Name:"Celeste", id:'3',tags:Tags.CelesteTags,slug:"celeste"},
                      {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1rgi.png" ,Name:"Hollow Knight", id:'4',tags:Tags.HollowTags,slug:"hollow-knight"},
                      {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co5p52.png" ,Name:"Sonic", id:'5',tags:Tags.SonicTags,slug:"sonic"}]


        options2 =     [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1rbo.png", Name:"Terraria", id:'6',tags:Tags.TerraTags,slug:"terraria"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2hp4.png" ,Name:"Crash Bandicoot", id:'7',tags:Tags.CrashTags,slug:"crash-bandicoot"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2nt6.png" ,Name:"Spyro", id:'8',tags:Tags.SpyroTags,slug:"spyro"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co5vwu.png" ,Name:"Dead Cells", id:'9',tags:Tags.DeadTags,slug:"dead-cells"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co49fq.png" ,Name:"Cuphead ", id:'10',tags:Tags.CupTags,slug:"cuphead"}]
                        break;            
       case 'role-playing-games-rpg':    
          options1 =    [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co5w3k.png", Name:"Final Fantasy", id:'1',tags:Tags.FinalTags,slug:"final-fantasy"},
                      {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2l7z.png" ,Name:"WoW", id:'2',tags:Tags.WowTags,slug:"world-of-warcraft"},
                      {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1sh6.png" ,Name:"Diablo", id:'3',tags:Tags.DiabloTags,slug:"diablo"},
                      {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co5uct.png" ,Name:"The Witcher", id:'4',tags:Tags.thewitcherTags,slug:"the-witcher"},
                      {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1vcf.png" ,Name:"Dark Souls", id:'5',tags:Tags.SoulsTags,slug:"dark-souls"}]


          options2 =     [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1tnw.png", Name:"Elder Scrolls", id:'6',tags:Tags.ElderTags,slug:"the-elder-scrolls"},
                {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7q.png" ,Name:"Mass Effect", id:'7',tags:Tags.MassTags,slug:"mass-effect"},
                {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1r76.png" ,Name:"Persona", id:'8',tags:Tags.PersonaTags,slug:"persona"},
                {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co25jt.png" ,Name:"Deus Ex", id:'9',tags:Tags.DeusTags,slug:"deus-ex"},
                {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1yc6.png" ,Name:"Fallout ", id:'10',tags:Tags.FaulloutTags,slug:"fallout"}]
                break; 
       case 'strategy':
            options1 =  [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co20up.png", Name:"Civilization ", id:'1',tags:Tags.CivTags,slug:"civilization"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2g41.png" ,Name:"XCOM", id:'2',tags:Tags.XcomTags,slug:"xcom"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1mx3.png" ,Name:"Cities Skylines", id:'3',tags:Tags.CityTags,slug:"cities-skylines"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co39tg.png" ,Name:"Age of Empires", id:'4',tags:Tags.AgeTags,slug:"age-of-empires"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1rc4.png" ,Name:"Darkest Dungeon", id:'5',tags:Tags.DarkDTags,slug:"darkest-dungeon"}]


            options2 =     [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1sh2.png", Name:"Hearthstone", id:'6',tags:Tags.HearthTags,slug:"hearthstone"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1iyf.png" ,Name:"Slay the Spire", id:'7',tags:Tags.SlayTags,slug:"slay-the-spire"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/mferu1am1yv5pcy5aplm.png" ,Name:"Frostpunk", id:'8',tags:Tags.FrostTags,slug:"frostpunk"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2rze.png" ,Name:"Total War", id:'9',tags:Tags.TotalTags,slug:"total-war-warhammer"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co4bko.png" ,Name:"Dota", id:'10',tags:Tags.DotaTags,slug:"dota"},]
                            break; 
      case 'sports':
            options1 = [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co4zw5.png", Name:"Fifa ", id:'1',tags:Tags.FifaTags,slug:"fifa"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co31gd.png" ,Name:"F1", id:'2',tags:Tags.F1Tags,slug:"f1"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co55zj.png" ,Name:"NBA 2K", id:'3',tags:Tags.NbaTags,slug:"nba"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co4th3.png" ,Name:"Madden NFL", id:'4',tags:Tags.MaddenTags,slug:"madden-nfl"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co25u7.png" ,Name:"Tony Hawk", id:'5',tags:Tags.SkateTags,slug:"tony-hawk"}]


            options2 =     [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co5lox.png", Name:"Football Manager", id:'6',tags:Tags.ManagerTags,slug:"football-manager"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1o2w.png" ,Name:"UFC", id:'7',tags:Tags.UfcTags,slug:"ufc"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2gkd.png" ,Name:"Riders Republic", id:'8',tags:Tags.RidersTags,slug:"riders-republic"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co5w0w.png" ,Name:"Rocket League", id:'9',tags:Tags.RocketTags,slug:"rocket-league"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2jpb.png" ,Name:"Steep", id:'10',tags:Tags.SteepTags,slug:"steep"},]
                        break; 
       case 'fighting':
            options1 = [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1w4f.png", Name:"Tekken", id:'1',tags:Tags.TekkTags,slug:"tekken"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co5vst.png" ,Name:"Street Fighter", id:'2',tags:Tags.StreetTags,slug:"street-fighter"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co20mh.png" ,Name:"Mortal Kombat", id:'3',tags:Tags.MortalTags,slug:"mortal-kombat"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1nih.png" ,Name:"Dragon Ball", id:'4',tags:Tags.DragonTags,slug:"dragon-ball"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1qrx.png" ,Name:"MORDHAU", id:'5',tags:Tags.MordTags,slug:"mordhau"}]


            options2 =     [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2255.png", Name:"Super Smash Bros", id:'6',tags:Tags.SmashTags,slug:"super-smash-bros"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1o2w.png" ,Name:"UFC", id:'7',tags:Tags.UfcTags,slug:"ufc"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2lby.png" ,Name:"Guilty Gear", id:'8',tags:Tags.GuiltyTags,slug:"guilty-gear"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co3ofu.png" ,Name:"King Of Fighters", id:'9',tags:Tags.KingTags,slug:"the-king-of-fighters"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1rb8.png" ,Name:"For Honor", id:'10',tags:Tags.ForhTags,slug:"for-honor"},]
                        break; 
          case 'action':
                          options1 = [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2nbc.png", Name:"GTA", id:'1',tags:Tags.GtaTags,slug:"grand-theft-auto"},
                                      {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co4hk8.png" ,Name:"Cyberpunk", id:'2',tags:Tags.CyberTags,slug:"cyberpunk-2077"},
                                      {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co20mh.png" ,Name:"Mortal Kombat", id:'3',tags:Tags.MortalTags,slug:"mortal-kombat"},
                                      {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1y2f.png" ,Name:"Left 4 Dead", id:'4',tags:Tags.LeftTags,slug:"left-4-dead-2"},
                                      {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co4sbw.png" ,Name:"Call Of Duty", id:'5',tags:Tags.CodTags,slug:"call-of-duty"}]
              
              
                          options2 =     [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co20r3.png", Name:"Borderlands", id:'6',tags:Tags.BorderTags,slug:"borderlands"},
                                          {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co3p5n.png" ,Name:"Doom", id:'7',tags:Tags.DoomTags,slug:"doom"},
                                          {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.png" ,Name:"God Of War", id:'8',tags:Tags.OfwarTags,slug:"god-of-war"},
                                          {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2j1g.png" ,Name:"The Walking Dead", id:'9',tags:Tags.WalkingTags,slug:"the-walking-dead"},
                                          {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1v88.png" ,Name:"Metal Gear", id:'10',tags:Tags.MetalTags,slug:"metal-gear"},]
                                      break; 
          case 'adventure':
            options1 = [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1rqa.png", Name:"Tomb Raider", id:'1',tags:Tags.TombTags,slug:"tomb-raider"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.png" ,Name:"God Of War", id:'2',tags:Tags.OfwarTags,slug:"god-of-war-2"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2gvu.png" ,Name:"Horizon", id:'3',tags:Tags.HorTags,slug:"horizon"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1n6x.png" ,Name:"Destiny ", id:'4',tags:Tags.DestTags,slug:"destiny"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co4ok8.png" ,Name:"The Last of Us", id:'5',tags:Tags.OfUsTags,slug:"the-last-of-us"}]


            options2 =     [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co5vq8.png", Name:"Death Stranding", id:'6',tags:Tags.DeathTags,slug:"death-stranding"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co20x5.png" ,Name:"The Forest", id:'7',tags:Tags.ForestTags,slug:"the-forest"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1rst.png" ,Name:"Monster Hunter", id:'8',tags:Tags.MonsterTags,slug:"monster-hunter"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2j1g.png" ,Name:"The Walking Dead", id:'9',tags:Tags.WalkingTags,slug:"the-walking-dead"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2zpu.png" ,Name:"Resident Evil", id:'10',tags:Tags.ResidentTags,slug:"resident-evil"},]
            break; 
          case 'massively-multiplayer':
            options1 = [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2l7z.png", Name:"WoW", id:'1',tags:Tags.WowTags,slug:"world-of-warcraft"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co4bko.png" ,Name:"Dota", id:'2',tags:Tags.DotaTags,slug:"dota"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2ekt.png" ,Name:"Fortnite", id:'3',tags:Tags.FortTags,slug:"fortnite"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1n6x.png" ,Name:"Destiny ", id:'4',tags:Tags.DestTags,slug:"destiny"},
                        {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1wzo.png" ,Name:"Apex Legends", id:'5',tags:Tags.ApexTags,slug:"apex-legends"}]


            options2 =     [{Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1rb8.png", Name:"For Honor", id:'6',tags:Tags.ForhTags,slug:"for-honor"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1n6w.png" ,Name:"Path of Exile", id:'7',tags:Tags.PathTags,slug:"path-of-exile"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1v3o.png" ,Name:"Rust", id:'8',tags:Tags.RustTags,slug:"rust"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co5tkm.png" ,Name:"Overwatch", id:'9',tags:Tags.OwTags,slug:"overwatch"},
                            {Image:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2b4k.png" ,Name:"Minecraft", id:'10',tags:Tags.MineTags,slug:"minecraft"},]
            break; 
                    }
  const toast =useToast()


  let genreName = ''
  switch (props.genre){
    case 'shooter':
      genreName = 'SHOOTER'
      break;
      case 'racing':
        genreName = 'RACING'
        break;      
      case 'platformer':
          genreName = 'PLATFORMER'
          break;
      case 'role-playing-games-rpg':
            genreName = 'RPG'
            break;
      case 'sports':
              genreName = 'SPORTS'
              break;
      case 'fighting':
                genreName = 'FIGHTING'
                break;
      case 'action':
                  genreName = 'ACTION'
                  break;
      case 'adventure':
                    genreName = 'ADVENTURE'
                    break;
      case 'massively-multiplayer':
                      genreName = 'MULTIPLAYER'
                      break;
                              
                                                                                                                  
  }

const { value, getCheckboxProps } = useCheckboxGroup({})

  const [loadingg, setLoadingg]= React.useState(false)

  const HandleClick = ()=>{
    if(value.length<1){
      toast({
        title:'No games picked',
        description:'Please pick atleast one game so we improve our suggestion for you',
        status:'info',
        duration:9000,
        isClosable:true,
        position:'top'
      })
    }
    else{
      props.isMounted.current=true
      props.setGames(value)
      console.log(props.games)
      props.setAuthorize2(!props.Authorized2)
    }

  }
  const navigate = useNavigate();


  useEffect(()=>{
    options1.forEach(element =>{
      if(props.games.includes(element.id)){
        tags1 = tags1.concat(element.tags)
        slugs1 = slugs1.concat(element.slug)
      }
    })
    options2.forEach(element =>{
      if(props.games.includes(element.id)){
        tags2 = tags2.concat(element.tags)
        slugs2 = slugs2.concat(element.slug)
      }
    })
    tags3 = removeDuplicates(tags1.concat(tags2))
    slugs3 = slugs1.concat(slugs2)
    props.setTags(tags3)
    props.setSlugs(slugs3)
  },[props.games])
  
  useEffect(()=>{
    if(props.Authorized2){
      navigate('/gameSuggestion')
    }}
  )
  return (

    
    <Center>
        <Card    borderRadius={{sm:'0',lg:'10'}} borderColor={'#7d8488'} backgroundColor={'#F5F5F6'} width={'100vw'} height={{sm:'100%', '2xl':'83vh'}}>
        <motion.div initial={{opacity:0,x:100}}
                    animate={{opacity:1,x:0}}
                    exit={{opacity:0,x:-100}}
                    transition={{duration:0.4}}
                    ease= "easeOut">
            <CardBody>

            <Grid  mb={'2vh'} w={'100%'}  justifyContent={'center'} gridTemplateRows={'4vh'} gridTemplateColumns={'3vw 90vw 7vw'} gap={0}>
              <GridItem h={'100%'} w='1'colSpan={1}>

              <Button position={'absolute'} left={1} top={1} variant={'ghost'} padding={'0'}  onClick={()=>{
                    if (props.Authorized){
                      props.setAuthorize(!props.Authorized)
                      props.setGames([])
                      props.setTags([])}}}>
                    <ArrowBackIcon boxSize={{xs:'5',sm:'6',xl:'9'}}></ArrowBackIcon>

                    </Button>
              </GridItem>
              <GridItem mt={'1vh'} h={'100%'} colSpan={1}>
                <Heading  pt={{xs:'1.6vh'}} alignSelf={"center"} as='h2' fontSize={{xs:'0.65rem', sm:'0.8rem',md:'1.5rem',mds:'1rem',lg:'1.7rem'}} >PICK YOUR FAVORITE {genreName} GAMES</Heading> 
              </GridItem>
              <GridItem position={"relative"} w={'100%'} h={'100%'} colSpan={1}>
                <HStack justifyContent={'start'} gap={0}>
                  <ChevronRightIcon position={'absolute'} color={'#ff8936'} right={{xs:'5',md:'6'}} m={0} p={0} boxSize={{xs:'5',sm:'7',md:'10'}}></ChevronRightIcon>
                  <ChevronRightIcon position={'absolute'} color={'#ff8936'} right={{xs:'3',md:'3'}} m={0} p={0} boxSize={{xs:'5',sm:'7',md:'10'}}></ChevronRightIcon>
                  <ChevronRightIcon position={'absolute'} color={'#ff8936'} right={{xs:'1',md:'0'}} m={0} p={0} boxSize={{xs:'5',sm:'7',md:'10'}}></ChevronRightIcon>
                </HStack>
              </GridItem>
            </Grid>



                    <Stack gap={{xs:"5vw", sm:'3vw',mds:'10vw',md:'15vw',lg:'5vh',xl:'5px'}} direction={{xs:'row', sm:'row',md:'row',lg:'column'}} justifyContent={'center'} >
                            <Stack justifyContent={{lg:'center'}} direction={{xs:'column', sm:'column',md:'column',lg:'row'}} pt='2vh'gap={{sm:'5px',mds:'7px',md:'20px',lg:'3.4vw',xl:'4vw','2xl':'8vw'}}  >

                                {options1.map((games) => {
                                     return (
                                    <CustomCheckbox key={games.slug}   {...getCheckboxProps({ value: games.id})}>
                                      <Center>
                                      <Image key={games.Image} maxWidth={{sm:'200px',md:'300px',lg:'400px'}} w={{xs:'100px',sm:'150px',mds:'170px',md:'200px',lg:'150px',xl:'180px',"2xl":'180px',xxl:"170px"}} height={{xs:'130px',sm:'210px',mds:'230px',md:'250px',lg:'200px',xl:'240px','2xl':'240px',xxl:'240px'}}  src={games.Image}></Image>
                                      </Center>
                                      <Heading key={games.Name} pt={{xs:'1',sm:'3'}} as='h4' fontSize={{xs:'0.6rem',sm:'0.7rem',mds:'1.2rem',xxl:'1.2rem'}}>{games.Name}</Heading>
                                    </CustomCheckbox>
        )
        
      })}   
                            </Stack>
                            <Stack justifyContent={{lg:'center'}} direction={{xs:'column', sm:'column',md:'column',lg:'row'}} pt='2vh'gap={{sm:'5px',mds:'7px',md:'20px',lg:'3.4vw',xl:'4vw','2xl':'8vw'}}  >

                                {options2.map((games) => {
                                    return (
                                    <CustomCheckbox key={games.slug} {...getCheckboxProps({ value: games.id})}>
                                      <Center>
                                      <Image key={games.Image}  maxWidth={{sm:'200px',md:'300px',lg:'400px'}} w={{xs:'100px',sm:'150px',mds:'170px',md:'200px',lg:'150px',xl:'180px',"2xl":'180px',xxl:"170px"}} height={{xs:'130px',sm:'210px',mds:'230px',md:'250px',lg:'200px',xl:'240px','2xl':'240px',xxl:'240px'}}  src={games.Image}></Image>
                                      </Center>
                                      <Heading key={games.Name} pt={{xs:'1',sm:'3'}} as='h4' fontSize={{xs:'0.6rem',sm:'0.7rem',mds:'1.2rem',xxl:'1.2rem'}}>{games.Name}</Heading>
                                    </CustomCheckbox>
                                )

                                })}   
                              </Stack>

                        
                </Stack  >

                <HStack justifyContent={'center'} >
                    <Button borderRadius={10} onClick={HandleClick} isLoading={loadingg} variant={'outline'} colorScheme='orange'  px={{xs:'90',sm:'150'}} mt={{xs:'2vh',sm:'3vh',lg:'10vh',xl:'4vh','2xl':'2vh'}}><Heading Heading as='h3' fontSize={{xs:'1rem',sm:'1.3rem'}}>Next</Heading></Button>
                </HStack>
                

                
            </CardBody>
            </motion.div>

        </Card>
    </Center>
  );
};
export default PickingGame;
