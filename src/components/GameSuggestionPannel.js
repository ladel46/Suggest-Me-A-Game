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
    Radio,
    useRadioGroup,
    useRadio,
    Box,
    Button,
    Link,
    Spinner,
    CircularProgress,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Flex,
    Spacer,
    Grid,
    GridItem,
    SimpleGrid,
    Divider,
    Tag,
    Stack
    
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

import React from 'react';
import Blur from "react-blur" 



const SuggestionPannel = (props) =>{
  let key=props.KEY.current;
  const [popUpImage, setPopUpImage] = React.useState(false)
  const [IMAGE,setIMAGE] = React.useState(null)
  const ref = React.useRef(null)
  const enlargeImage =(e)=>{
    const id = e.currentTarget.id;
    setPopUpImage(!popUpImage); 
    setIMAGE(document.getElementById(id))
    console.log('IMAGE',props.KEY)
  }
    

    return(
      <>

    <Grid ml={{xs:'11vw',sm:'10vw',md:'8vw',xl:'4vw',xxl:'3vw','2xl':'2.5vw'}}  overflowY="auto"  gridTemplateRows={{xs:'1fr 1fr',sm:'1fr 1fr' ,xl:'40vh 40vh '}} height={'100%'} gap={0}>
    {popUpImage&&
            ( <Box  onClick={enlargeImage} justifyContent={'center'} backdropFilter={'blur(4px)'} alignItems={'center'} display={'flex'}  bg={'rgba(0,0,0,0.8)'} position={'fixed'}  zIndex= '100' top={0} left={0} width={'100vw'} height={'100vh'}>
              <Image borderRadius={20} border={'solid'} p={2} bgGradient={'linear(to-r, #eef564 0%, #ff8936 40%, #f72222 100%)'}
               width={{sm:"96vw",lg:'85vw',xl:"70vw"}} src={IMAGE.src}></Image> 
            </Box>

          )}


    <GridItem rowSpan={1} borderBottom={'solid'} borderColor="grey" borderBottom={'1px'} position={'relative'} overflow={'hidden'} w={'100%'} h={'100%'}>
      <Center>
      <Image  position={'relative'}  opacity={{xs:'0%',sm:'0%',xl:'15%'}} position={'absolute'} bottom={0} top={-100} right={0} left={0} width={"100vw"} src={props.data.background_image}></Image>
      </Center>
      <Grid  gridTemplateColumns={{xs:'1fr',sm:'1fr',xl:'1fr 1fr 1fr'}} gap={{xs:'3.5',sm:'4' ,xl:'7',xxl:"20"}}>
        <GridItem h={'100%'} w={'100%'}>
          <Center>
          <Image maxHeight={{xl:'36.5vh'}} maxWidth={'600px'}  position={'relative'} mt={'1.5vh'} ml={'3vw'} w={{xs:'75vw',mds:'76vw',md:'80vw',sm:'71vw',xl:'32vw',xxl:'27vw'}} padding={'7px'} borderRadius={13} bgGradient={'linear(to-r, #eef564 0%, #ff8936 40%, #f72222 100%)'}  borderColor='white' src={props.data.background_image}></Image>
          </Center>
        </GridItem>
        <GridItem h={'100%'} position={'relative'} w={'100%'}>
        <Heading as={'h1'} fontSize={{xs:'1.4rem',sm:'1.7rem',xl:'1.8rem',xxl:'2.5rem'}} mt={'1.5vh'} bgClip='text' bgGradient={'linear(to-r, #eef564 0%, #ff8936 40%, #f72222 100%)'}>{props.data.name}</Heading>

          <VStack  gap={{xs:'2',xl:'1',xxl:'2'}} alignItems={{xs:'start',sm:'start',xl:"start"}}>

          <Grid  w={'100%'} gridTemplateColumns={{xs:'1fr 2fr',sm:'1fr 2fr',xl:'1fr 2fr'}} gap={{xs:'4',sm:'5',xl:'1'}}>
            <GridItem h={'100%'} justifyContent={'start'} w={'100%'}><Heading as={'h2'} align="start" fontSize={{xs:'1.1rem',sm:'1.5rem',xl:'1.6rem',xxl:'2.2rem'}} mt={'1.5vh'} color={'white'}fontFamily={'monospace'}>RELEASED:</Heading></GridItem>
            <GridItem h={'100%'} w={'100%'}><Heading as={'h2'} align={'start'} fontSize={{xs:'1.1rem',sm:'1.5rem',xl:'1.6rem',xxl:'1.9rem'}} mt={'1.5vh'} color={'white'}fontFamily={'monospace'}>{props.data.released}</Heading></GridItem>

          </Grid>
          <Grid  gridTemplateColumns={{xs:'1fr 1fr 1fr',sm:'1fr 1fr 1fr',xl:'2fr 1fr'}} gap={{md:'5',xl:'0'}}>
            <GridItem h={'100%'} w={'100%'} colSpan={{xs:'2',sm:'2',xl:'1'}} justifyContent={'start'} ><Heading  as={'h2'} align="start" fontSize={{xs:'1.1rem',sm:'1.5rem',xl:'1.6rem',xxl:'2.2rem'}} mt={'1.5vh'} color={'white'} fontFamily={'monospace'}>AVG PLAY TIME:</Heading></GridItem>
            <GridItem h={'100%'} w={'100%'}><Heading as={'h2'} fontSize={{xs:'1.1rem',sm:'1.5rem',xl:'1.6rem',xxl:'1.9rem'}}mt={'1.5vh'} color={'white'} fontFamily={'monospace'}>{props.data.playtime}H</Heading></GridItem>
          </Grid>
          <Grid  gridTemplateColumns={{xs:'1fr 1fr 1fr',sm:'1fr 1fr 1fr',mds:'1fr 1fr 1fr 1fr',xl:'1fr 1fr 1fr 1fr'}}  gap={1}>
            <GridItem h={'100%'} justifyContent={'start'} w={'100%'}><Heading as={'h2'} align="start" fontSize={{xs:'1.1rem',sm:'1.5rem',xl:'1.6rem',xxl:'2.2rem'}} mt={'1.5vh'} color={'white'} fontFamily={'monospace'}>GENRES:</Heading></GridItem>

            {props.data.genres.map((genre)=>{
            return( <GridItem h={'100%'} justifyContent={'start'} w={'100%'}>
              <Heading as={'h2'} size="xl" mt={'1.5vh'} color={'white'} fontFamily={'monospace'}>
                <Tag justifyContent={'center'} h={{xs:'30px',sm:'35px',xl:'40px',xxl:'4vh'}} w={{xs:'80%',xl:'90%',xxl:'80%'}} p="7px" bgGradient={'linear(to-r, #eef564 0%, #ff8936 40%, #f72222 100%)'} color={'black'} >
                 <Heading as="h3" fontSize={{xs:'0.6rem',sm:'0.7rem',xl:'0.7rem',xl:'0.75rem','2xl':'0.9rem'}}>
                  {genre.name}
                  </Heading>
                  </Tag>
              </Heading>
            </GridItem>)
          })}
            
          </Grid>
          </VStack>


        </GridItem>
        <GridItem mt={'1.5vh'} position={'relative'} w={'100%'}>
        <VStack gap={{xs:'2',xl:'0',xxl:'2'}} alignItems="start">
          <Grid  gridTemplateColumns={{xs:'1fr 1fr',md:'1fr 1fr 1fr 1fr',xl:'1fr 1fr'}} gap={{xs:'2',xl:'0',xxl:'2'}}>
            <GridItem  colSpan={{xs:'2',md:'4',xl:'2'}} justifyContent={'start'} w={'100%'}>
              <HStack >
                <Image width={{xs:'13vw',sm:'7vw',lg:'3vw',xl:'3vw',xxl:'2vw'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/1024px-Metacritic.svg.png"></Image>
                <Heading as={'h2'} fontSize={{xs:'1.2rem',sm:'1.5rem',xl:'1.8rem',xxl:'2rem'}} mt={'1.5vh'} color={'white'}fontFamily={'monospace'}>Metascore:</Heading>
                <Heading as={'h2'} size="md" mt={'1.5vh'} color={'white'}fontFamily={'monospace'}>
                  <Box borderRadius={10} p={1} border={'solid'} borderColor={'orange'}>{props.data.metacritic }
</Box>
              </Heading>
              </HStack>
              </GridItem>
              { props.data.ratings.length >1?
                  <>

                  <GridItem   justifyContent={'start'} w={'100%'}>
                    <Heading  w={'100%'} as={'h2'} fontSize={{xs:'1.2rem',sm:'1.7rem',xl:'1.8rem',xxl:'2rem'}} mt={'1.5vh'} color={'white'}fontFamily={'monospace'}>Reviews:</Heading>
                  </GridItem>
                  <GridItem colSpan={{xs:'2',md:'4',xl:'2'}}></GridItem>
                  {props.data.ratings.findIndex(object=>object.title=='exceptional')==-1?
                  null:
                  <GridItem colSpan={{xs:'2',md:'1',xl:'2'}}>
                  <VStack alignItems="start">
                  <Heading color={'#f72222'} size={'md'}>Exceptional</Heading>
                  <Box borderRadius={10}   w='100%' h={'15px'}>
                  <Box overflow={'hidden'} borderRight={'solid'} borderRight={'2px'}  borderRadiusLeft={10} bg={'#f72222'} w={`${props.data.ratings[props.data.ratings.findIndex(object=>object.title=='exceptional')].percent*2}%`}h={'15px'}>
                    <Heading color={'white'} fontSize={{xs:'0.8rem'}}>{Math.trunc(props.data.ratings[props.data.ratings.findIndex(object=>object.title=='exceptional')].percent)}%</Heading>
                  </Box>
                  </Box>
                </VStack>
                </GridItem>
                  }
  
                {props.data.ratings.findIndex(object=>object.title=='recommended')==-1?
                null:
                <GridItem colSpan={{xs:'2',md:'1',xl:'2'}}>

                <VStack alignItems="start">
                    <Heading color={'#ff8936'} size={'md'}>Recommended</Heading>
                    <Box borderRadius={10}  w='100%' h={'15px'}>
                    <Box  overflow={'hidden'} borderRight={'solid'} borderRight={'2px'} borderRadiusLeft={10} bg={'#ff8936'} w={`${props.data.ratings[props.data.ratings.findIndex(object=>object.title=='recommended')].percent*2}%`}h={'15px'}>
                    <Heading color={'white'} fontSize={{xs:'0.8rem'}}>{Math.trunc(props.data.ratings[props.data.ratings.findIndex(object=>object.title=='recommended')].percent)}%</Heading>
                    </Box>
                    </Box>
                  </VStack>
                </GridItem>
                }

                {props.data.ratings.findIndex(object=>object.title=='meh')==-1?
                null:
                <GridItem colSpan={{xs:'2',md:'1',xl:'2'}}>
                <VStack alignItems="start">
                    <Heading color={'#eef564'} size={'md'}>Meh</Heading>
                    <Box borderRadius={10}  w='100%'h={'15px'}>
                    <Box  overflow={'hidden'}  borderRight={'solid'} borderRight={'2px'}  borderRadiusLeft={10} bg={'#eef564'} w={`${props.data.ratings[props.data.ratings.findIndex(object=>object.title=='meh')].percent*2}%`}h={'15px'}>
                    <Heading color={'black'} fontSize={{xs:'0.8rem'}}>{Math.trunc(props.data.ratings[props.data.ratings.findIndex(object=>object.title=='meh')].percent)}%</Heading>


                    </Box>
                    </Box>
                  </VStack>
                </GridItem>

                }

                {props.data.ratings.findIndex(object=>object.title=='skip')==-1?
                null:
                <GridItem  colSpan={{xs:'2',md:'1',xl:'2'}}>
                <VStack mb={5} alignItems="start">
                    <Heading color={'#FBFCD7'} size={'md'}>Skip</Heading>
                    <Box  borderRadius={10}  w='100%'h={'15px'}>
                    <Box  overflow={'hidden'} borderRight={'solid'} borderRight={'2px'} borderRadiusLeft={10} bg={'#FBFCD7'} w={`${props.data.ratings[props.data.ratings.findIndex(object=>object.title=='skip')].percent*2}%`}h={'15px'}>
                    <Heading  color={'black'} fontSize={{xs:'0.8rem'}}>{Math.trunc(props.data.ratings[props.data.ratings.findIndex(object=>object.title=='skip')].percent)}%</Heading>
                    </Box>
                    </Box>
                  </VStack>
                </GridItem>    
                }


             
                  </>  
                 :<GridItem  colSpan={2} justifyContent={'start'} w={'100%'}>
                 <Heading w={'100%'} as={'h2'} size="xl" mt={'1.5vh'} color={'white'}fontFamily={'monospace'}>No user reviews for this game</Heading>
                 </GridItem>

                
              }



          </Grid>

        </VStack>
        </GridItem>
      </Grid>
    </GridItem>
    <GridItem     rowSpan={1} position={'relative'} backgroundColor={'white'} rowSpan={1} overflow={'hidden'} w={'100%'} h={'100%'}>
    <Grid  h={'100%'} gridTemplateRows={{xs:'50vh 100%',sm:'40vh 100%',xl:'1fr'}} gridTemplateColumns={{xs:'100%',sm:'100%',xl:'50vw 50vw'}}>
    <GridItem  rowStart={{xs:'2',sm:'2',xl:'2'}} rowSpan={1} height={{xs:'100%',sm:'100%',xl:'100%'}}  bgGradient={'linear(to-r, #eef564 0%, #ff8936 20%, #f72222 100%)'} borderRight={'solid'} borderRight={{xs:'0px',sm:'0px',xl:'4px'}}  w={'100%'}>
    <Grid overflowY="auto" height={{xs:'500px',sm:'500px',xl:'60%',xxl:'70%'}} mt={'10px'}  ml={'0.3vw'} mr="0.2vw" gridTemplateColumns={{xs:'1fr 1fr 1fr',sm:'1fr 1fr 1fr',xl:' 1fr 1fr 1fr 1fr 1fr 1fr 1fr'}} gridTemplateRows={'1fr 1fr 1fr 1fr 1fr 1fr '} gap={1}>
    <GridItem  colSpan={{xs:'3',sm:'3',xl:'7'}} w={'100%'}>
    <Heading as={'h2'} fontSize={{xs:'1.4rem',sm:'1.6rem',xl:'2.2rem',xxl:'2.5rem'}} mt={'1.5vh'}  color={'white'} >TAGS</Heading>
    </GridItem>

    {props.data.tags.map((tag)=>{
            if (tag.language =="eng"){
              return( <GridItem mb={'0'} justifyContent={'start'} w={'100%'}>
              <Heading as={'h2'} size="xl"  color={'white'} fontFamily={'monospace'}>
                <Tag  justifyContent={'center'} h={{xs:'50px',sm:'50px',xl:'6.5vh'}} w={'100%'} p={'7px'} bg={'black'} color={'white'} fontSize={{xs:'0.5rem',sm:'0.75rem',xl:'0.7rem',xxl:'0.9rem'}}>{tag.name}</Tag>
              </Heading>
            </GridItem>)
            }
            
          })}

    </Grid>
      
    </GridItem>
    <GridItem rowSpan={1} rowStart={{xs:'1',sm:'1',xl:'2'}} w={'100%'}>
    <Grid overflowY="auto" h={{xl:'70%',xxl:'100%'}} gridTemplateRows={'1fr 8fr'} gap={0}>
      <GridItem   w={'100%'}>
      <Heading  as={'h2'} fontSize={{xs:'1.4rem',sm:'1.6rem',xl:'2.5rem'}} mb={'0.3vh'} mt={'0.8vh'} m color={'black'} >SCREENSHOTS</Heading>
      </GridItem>
      <GridItem  rowSpan={7} w={'100%'}>
        <Center>
      <Box  h={'31vh'} w={'99%'} >
      
      <Grid  overflowY="auto" w={'100%'} h={'100%'} gridTemplateRows={'1fr'} gridTemplateColumns={{xs:'78vw',sm:'82vw',mds:'84vw',md:'1fr 1fr',lg:'1fr 1fr',xl:'21.2vw 21.2vw ',xxl:'15vw 15vw 15vw ','2xl':'15.2vw 15.2vw 15.2vw'}} gap={{xs:'1',xl:'5',xxl:'1'}}>
      
      {props.data.short_screenshots.slice(1).map((Pic)=>{
        props.KEY.current = props.KEY.current + 1
        return(
          <GridItem colSpan={'100%'} w={'100%'}>
            <Center>
            <button   p={0} mt={0} mb={0}>
            <Image id={props.KEY.current} onClick={enlargeImage}  border={'solid'} p={1} bgGradient={'linear(to-r, #eef564 0%, #ff8936 40%, #f72222 100%)'} borderRadius={5} h={{xs:'130px',sm:'200px',mds:'280px',md:'160px',mdl:'190px',lg:'300px',xl:'160px',xxl:'150px','2xl':'200px'}} w={{xs:'220px',sm:'300px',mds:'450px',md:'280px',mdl:'340px',lg:'460px',xl:'300px',xxl:'260px','2xl':'300px'}} src={Pic.image}></Image>

            </button>
            </Center>
          </GridItem>

        )
      })}

      </Grid>

      </Box>
      </Center>
      </GridItem>
    </Grid>


    </GridItem>

    </Grid>
      
    </GridItem>

</Grid>
      </>
      




)

}

export default SuggestionPannel