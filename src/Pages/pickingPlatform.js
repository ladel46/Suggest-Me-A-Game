import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    Text, 
    Image,Heading, 
    Stack,
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

} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import AnimatedPage from "../components/AnimatedPage";
import {motion} from "framer-motion"

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


const PickingPlatform = (props) => {
const options1 = [{Image:"https://i.ibb.co/RQd88JJ/image-2023-01-04-132542196.png  ", Name:"PC",slug:'4'},
{Image:"https://i.ibb.co/CP70JBx/image-2023-01-03-165756744.png" ,Name:"PS5",slug:'187'},
{Image:"https://i.ibb.co/c3KjzFR/image-2023-01-04-123633369.png" ,Name:"PS4",slug:'18'}
,{Image:"https://i.ibb.co/6tqYwsY/image-2023-01-04-124131616.png" ,Name:"PS3",slug:'16'}]

const options2 = [{Image:"https://i.ibb.co/MVW7RnC/image-2023-01-03-172219971.png", Name:"Xbox Series X",slug:'186'},
{Image:"https://i.ibb.co/pP6nMWX/image-2023-01-03-172046493.png" ,Name:"Xbox One",slug:'1'},
{Image:"https://i.ibb.co/QnFyBL9/image-2023-01-04-123811891.png" ,Name:"Xbox 360",slug:'14'},

{Image:"https://i.ibb.co/BtDVnyC/image-2023-01-04-125534058.png" ,Name:"Nintendo Switch",slug:'7'}]

const {  value, getRootProps, getRadioProps } = useRadioGroup({
    name: 'gamess',
    defaultValue: '4',
  })
  const group = getRootProps()
  const [loadingg, setLoadingg]= React.useState(false)
  const navigate = useNavigate();

  const HandleClick = ()=>{
    props.setPlatforms(value)
    props.setAuthorize1(!props.Authorized1)
  }
  useEffect(()=>{
    if(props.Authorized1){
      navigate('/pickingenre')
    }}
  )
  return (
    <AnimatedPage>
    <Center>
        <Card   borderRadius={{sm:'0',lg:'10'}} borderColor={'#7d8488'} backgroundColor={'#F5F5F6'} width={'100vw'} height={{sm:'100%', '2xl':'83vh'}}>
        <motion.div initial={{opacity:0}}
                    animate={{opacity:1,x:0}}
                    exit={{opacity:0,x:-100}}
                    transition={{duration:0.4}}
                    ease= "easeOut">
            <CardBody>
            <Grid position={"relative"} mb={'2vh'} w={'100%'}  justifyContent={'center'} gridTemplateRows={'4vh'} gridTemplateColumns={'3vw 90vw 7vw'} gap={0}>
            <GridItem w={'100%'} h={'100%'} colSpan={1}></GridItem>
            <GridItem mt={'1vh'}  h={'100%'} w={'100%'} colSpan={1}>
              <Heading   mb={'0.5vh'}  alignSelf={"center"} as='h2' fontSize={{xs:'0.7rem', sm:'0.9rem',md:'1.5rem',mds:'1rem',lg:'1.6rem'}} >PICK THE GENRE OF THE GAME YOU WANT</Heading>
            </GridItem>
            <GridItem position={'relative'} w={'100%'} h={'100%'} colSpan={1}>
                <HStack justifyContent={'start'} gap={0}>
                  <ChevronRightIcon position={'absolute'} color={'#ff8936'} right={{xs:'5',md:'6'}} m={0} p={0} boxSize={{xs:'5',sm:'7',md:'10'}}></ChevronRightIcon>
                  <ChevronRightIcon position={'absolute'} color={'#FFE5D3'} right={{xs:'3',md:'3'}} m={0} p={0} boxSize={{xs:'5',sm:'7',md:'10'}}></ChevronRightIcon>
                  <ChevronRightIcon position={'absolute'} color={'#FFE5D3'} right={{xs:'1',md:'0'}} m={0} p={0} boxSize={{xs:'5',sm:'7',md:'10'}}></ChevronRightIcon>
                </HStack>
              </GridItem>
             

              </Grid>

                    <Stack gap={{mds:'10vw',md:'15vw',lg:'20px',xl:'20px'}} direction={{xs:'row', sm:'row',md:'row',lg:'column'}} justifyContent={'center'} >
                            <Stack justifyContent={{lg:'center'}} direction={{xs:'column', sm:'column',md:'column',lg:'row'}} pt='2vh'gap={{sm:'5px',mds:'7px',md:'20px',lg:'3.4vw',xl:'4vw'}} {...group}>

                                {options1.map((games) => {
                                    const radio = getRadioProps({ value: games.slug  })
                                     return (
                                    <RadioCard key={games.slug} name={games.Name} {...radio}>
                                    <Image key={games.Image} maxWidth={{sm:'200px',md:'300px',lg:'400px'}} w={{xs:'140px',sm:'160px',mds:'180px',md:'230px',lg:'205px',xl:'240px',"2xl":'310px',xxl:"290px"}} height={{xs:'70px',sm:'115px',mds:'130px',md:'160px',lg:'140px',xl:'170px','2xl':'210px',xxl:'200px'}}  src={games.Image}></Image>
                                    <Heading key={games.Name} pt={{xs:'1',sm:'3'}} as='h4' fontSize={{xs:'0.7rem',sm:'0.7rem',mds:'1.2rem',xxl:'1.4rem'}}>{games.Name}</Heading>

                                    </RadioCard>
        )
        
      })}   
                            </Stack>
                            <Stack justifyContent={{lg:'center'}}  height={{sm:'100px'}} direction={{xs:'column', sm:'column',md:'column',lg:'row'}} pt={'2vh'} gap={{sm:'5px',mds:'7px',md:'20px',lg:'3.4vw',xl:'4vw'}} {...group}>

                                {options2.map((games) => {
                                    const radio = getRadioProps({ value: games.slug  })
                                     return (
                                    <RadioCard key={games.slug} name={games.Name} {...radio}>
                                    <Image key={games.Image} maxWidth={{sm:'200px',md:'300px',lg:'400px'}} w={{xs:'140px',sm:'160px',mds:'180px',md:'230px',lg:'205px',xl:'240px',"2xl":'310px',xxl:'290px'}} height={{xs:'70px',sm:'115px',mds:'130px',md:'160px',lg:'140px',xl:'170px','2xl':'210px',xxl:'200px'}}  src={games.Image}></Image>
                                    <Heading key={games.Name} pt={{xs:'1',sm:'3'}}  as='h4' fontSize={{xs:'0.7rem',sm:'0.7rem',mds:'1.2rem',xxl:'1.4rem'}}>{games.Name}</Heading>

                                    </RadioCard>
)
})}   
                            </Stack>

                        
                </Stack  >
                <HStack justifyContent={'center'}>
                    <Button  borderRadius={10} onClick={HandleClick} isLoading={loadingg} variant={'outline'} colorScheme='orange'  px={{xs:'90',sm:'150'}} mt={{xs:'2vh',sm:'3vh',lg:'23vh',xxl:'24vh','2xl':'25vh'}}><Heading Heading as='h3' fontSize={{xs:'1rem',sm:'1.3rem'}}>Next</Heading></Button>
                </HStack>
                

                
            </CardBody>
            </motion.div>
        </Card>
    </Center>
    </AnimatedPage>
  );
};
export default PickingPlatform;
