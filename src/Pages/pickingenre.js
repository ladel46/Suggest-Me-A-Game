import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    Grid,
    GridItem,
    Stack,
    chakra,
    shouldForwardProp

} from '@chakra-ui/react'
import { ArrowBackIcon,ChevronRightIcon } from '@chakra-ui/icons'
import { motion, isValidMotionProp } from 'framer-motion';

function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
    
  
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
            color:'red'
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


const PickingCard = (props) => {
const options1 = [{Image:"https://i.ibb.co/4fWZR6L/reticule.png", Name:"SHOOTER",slug:'shooter'},
{Image:"https://i.ibb.co/WPD2YCL/f1-car.png" ,Name:"RACING",slug:'racing'},
{Image:"https://i.ibb.co/GVr9HDh/ladders-platform.png" ,Name:"PLATFORMER",slug:'platformer'},
{Image:"https://i.ibb.co/rd9BStr/battle-gear.png" ,Name:"RPG",slug:'role-playing-games-rpg'},
{Image:"https://i.ibb.co/XCmvCF1/chess-queen.png" ,Name:"STRATEGY",slug:'strategy'}]

const options2 = [{Image:"https://i.ibb.co/R30BQpf/soccer-ball.png", Name:"SPORTS",slug:'sports'},
{Image:"https://i.ibb.co/RpSB3CW/boxing-glove.png" ,Name:"FIGHTING",slug:'fighting'},
{Image:"https://i.ibb.co/6Zx3PwZ/pistol-gun.png" ,Name:"ACTION",slug:'action'},
{Image:"https://i.ibb.co/hBxQtZm/rope-coil.png" ,Name:"ADVENTURE",slug:'adventure'},
{Image:"https://i.ibb.co/tbVtZS3/round-table.png" ,Name:"MULTIPLAYER",slug:'massively-multiplayer'}]

const {  value, getRootProps, getRadioProps } = useRadioGroup({
    name: 'gamess',
    defaultValue: 'shooter',
  })
  const group = getRootProps()
  const [loadingg, setLoadingg]= React.useState(false)
  const navigate = useNavigate();

  const HandleClick = ()=>{
    props.setGenre(value)
    props.setAuthorize(!props.Authorized)
  }
  useEffect(()=>{
    if(props.Authorized){
      navigate('/pickingGame')
    }}
  )
  const animations={
    initial: {width:0},
    animate:{width:'100%'},
    exit:{x:window.in},
}
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

  return (

    <Center>

        <Card   borderRadius={{sm:'0',lg:'10'}} borderColor={'#7d8488'} backgroundColor={'#F5F5F6'} width={'100vw'} height={{sm:'100%', '2xl':'83vh'}}>
        <motion.div initial={{opacity:0,x:100}}
                    animate={{opacity:1,x:0}}
                    exit={{opacity:0,x:-100}}
                    transition={{duration:0.4}}
                    ease= "easeOut">
            <CardBody>
            <Grid mb={'2vh'} w={'100%'}  justifyContent={'center'} gridTemplateRows={'4vh'} gridTemplateColumns={'3vw 90vw 7vw'} gap={0}>
              <GridItem w={'100%'} h={'100%'} colSpan={1}>
              <Button position={'absolute'} left={1} top={1} variant={'ghost'} padding={'0'}  onClick={()=>{
                    if (props.Authorized1){
                      props.setAuthorize1(!props.Authorized1)
                      props.setGenre('shooter')
                      props.setPlatform('pc')
                      props.setGames([])
                      props.setTags([])}}}>
                    <ArrowBackIcon boxSize={{xs:'5',sm:'6',xl:'9'}}></ArrowBackIcon>
                    </Button>
              </GridItem>
              <GridItem mt={'1vh'} h={'100%'} w={'100%'} colSpan={1}>
                <Heading pt={{xs:'1.6vh'}} alignSelf={"center"} as='h2' fontSize={{xs:'0.65rem', sm:'0.8rem',md:'1.5rem',mds:'1rem',lg:'1.6rem'}} >PICK THE GENRE OF THE GAME YOU WANT</Heading> 

              </GridItem>
              <GridItem w={'100%'} h={'100%'} colSpan={1}>
                <HStack justifyContent={'start'} gap={0}>
                  <ChevronRightIcon position={'absolute'} color={'#ff8936'} right={{xs:'5',md:'6'}} m={0} p={0} boxSize={{xs:'5',sm:'7',md:'10'}}></ChevronRightIcon>
                  <ChevronRightIcon position={'absolute'} color={'#ff8936'} right={{xs:'3',md:'3'}} m={0} p={0} boxSize={{xs:'5',sm:'7',md:'10'}}></ChevronRightIcon>
                  <ChevronRightIcon position={'absolute'} color={'#FFE5D3'} right={{xs:'1',md:'0'}} m={0} p={0} boxSize={{xs:'5',sm:'7',md:'10'}}></ChevronRightIcon>
                </HStack>
              </GridItem>
            </Grid>

                    <Stack gap={{xs:"5vw", sm:'3vw',mds:'10vw',md:'15vw',lg:'5vh',xl:'20px'}} direction={{xs:'row', sm:'row',md:'row',lg:'column'}} justifyContent={'center'} >
                            <Stack justifyContent={{lg:'center'}} direction={{xs:'column', sm:'column',md:'column',lg:'row'}} pt='2vh'gap={{sm:'5px',mds:'7px',md:'20px',lg:'3.4vw',xl:'4vw'}} {...group}>

                                {options1.map((games) => {
                                    const radio = getRadioProps({ value: games.slug  })
                                     return (
                                    <RadioCard key={games.slug} name={games.Name} {...radio}>
                                    <Image key={games.Image} maxWidth={{sm:'200px',md:'300px',lg:'400px'}} w={{xs:'100px',sm:'150px',mds:'170px',md:'200px',lg:'150px',xl:'180px',"2xl":'220px',xxl:"200px"}} height={{xs:'95px',sm:'150px',mds:'170px',md:'200px',lg:'150px',xl:'170px','2xl':'220px',xxl:'200px'}}  src={games.Image}></Image>
                                    <Heading key={games.Name} pt={{xs:'1',sm:'3'}} as='h4' fontSize={{xs:'0.8rem',sm:'0.7rem',mds:'1.2rem',xxl:'1.4rem'}}>{games.Name}</Heading>

                                    </RadioCard>
        )
        
      })}   
                            </Stack>
                            <Stack justifyContent={{lg:'center'}}  height={{sm:'100px'}} direction={{xs:'column', sm:'column',md:'column',lg:'row'}} pt={'2vh'} gap={{sm:'5px',mds:'7px',md:'20px',lg:'3.4vw',xl:'4vw'}} {...group}>

                                {options2.map((games) => {
                                    const radio = getRadioProps({ value: games.slug  })
                                     return (
                                    <RadioCard key={games.slug}  name={games.Name} {...radio}>
                                    <Image key={games.Image} maxWidth={{sm:'200px',md:'300px',lg:'400px'}} w={{xs:'100px',sm:'150px',mds:'170px',md:'200px',lg:'150px',xl:'180px',"2xl":'220px',xxl:"200px"}} height={{xs:'95px',sm:'150px',mds:'170px',md:'200px',lg:'150px',xl:'170px','2xl':'220px',xxl:'200px'}}  src={games.Image}></Image>
                                    <Heading key={games.Name} pt={{xs:'1',sm:'3'}} as='h4' fontSize={{xs:'0.8rem',sm:'0.7rem',mds:'1.2rem',xxl:'1.4rem'}}>{games.Name}</Heading>

                                    </RadioCard>
)
})}   
                            </Stack>

                        
                </Stack  >
                <HStack justifyContent={'center'}>
                    <Button  borderRadius={10} onClick={HandleClick} isLoading={loadingg} variant={'outline'} colorScheme='orange'  px={{xs:'90',sm:'150'}} mt={{xs:'2vh',sm:'3vh',lg:'23vh','2xl':'25vh'}}><Heading Heading as='h3' fontSize={{xs:'1rem',sm:'1.3rem'}}>Next</Heading></Button>
                </HStack>
                

                
            </CardBody>
            </motion.div>

        </Card>
    </Center>
  );
};
export default PickingCard;
