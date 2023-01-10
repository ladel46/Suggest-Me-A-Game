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
    Tag
    
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import SuggestionPannel from "../components/GameSuggestionPannel";
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


const GameSuggestion = (props) => {
  const KEYY = React.useRef(0);
  const wrapperRef1 = React.useRef(null);
  const wrapperRef2 = React.useRef(null);
  const wrapperRef3 = React.useRef(null);
  const wrapperRef4 = React.useRef(null);
  const wrapperRef5 = React.useRef(null);

const {  value, getRootProps, getRadioProps } = useRadioGroup({
    name: 'gamess',
    defaultValue: 'SHOOTER',
  })
  const group = getRootProps()

  if (props.loadingg){
    return(
        <Center>
        <Card   
        borderRadius={10} 
        borderColor={'#7d8488'} 
        backgroundColor={'#F5F5F6'} 
        width={'100vw'} 
        height={{xs:'90vh', '2xl':'83vh'}}>
            <CardBody>
                <VStack >
                  <Center   h={'76.5vh'}>
                  <CircularProgress thickness={'3px'} color={'orange'} size={{xs:'23vw',lg:'13vw'}} value={props.percentage} />

                    </Center>
 
                </VStack>
            </CardBody>
        </Card>
    </Center> 
    )
  }
  else{
  return (
    <Center>
      <Card    position={'relative'} overflow={'hidden'} borderRadius={{xs:'0',sm:'0',lg:'10'}} borderColor={'#7d8488'} backgroundColor={'black'} width={'100vw'} height={{xs:'100%',sm:'100%', '2xl':'83vh'}}>
        <Tabs   isLazy={true} orientation={'vertical'}   variant='solid-rounded' colorScheme={'orange'}>
        <TabList  position={'fixed'}   color={'white'}  >
        {props.Data[0]==undefined?
          null
          :
          <Tab key={'Tab1'}  py={{xs:'7.7vh',sm:'7.7vh',lg:'5.3vh',xl:'6.5vh'}} fontSize={{xs:'0.8rem',sm:'1.1rem',lg:'1.3rem'}} >
             1
            </Tab>
        }
                  {props.Data[1]==undefined?
          null
          :
          <Tab  key={'Tab2'} py={{xs:'7.7vh',sm:'7.7vh',lg:'5.3vh',xl:'6.5vh'}} fontSize={{xs:'0.8rem',sm:'1.1rem',lg:'1.3rem'}}>2</Tab>
        }
                  {props.Data[2]==undefined?
          null
          :
          <Tab key={'Tab3'} py={{xs:'7.7vh',sm:'7.7vh',lg:'5.3vh',xl:'6.5vh'}} fontSize={{xs:'0.8rem',sm:'1.1rem',lg:'1.3rem'}}> 3</Tab>
        }
                  {props.Data[3]==undefined?
          null
          :
          <Tab key={'Tab4'}  py={{xs:'7.7vh',sm:'7.7vh',lg:'5.3vh',xl:'6.5vh'}} fontSize={{xs:'0.8rem',sm:'1.1rem',lg:'1.3rem'}}> 4</Tab>
        }

          {props.Data[4]==undefined?
          null
          :
          <Tab key={'Tab5'}  py={{xs:'7.7vh',sm:'7.7vh',lg:'5.3vh',xl:'6.5vh'}} fontSize={{xs:'0.8rem',sm:'1.1rem',lg:'1.3rem'}}> 5</Tab>
        }
          


        </TabList>
        <TabPanels >
        {props.Data[0]==undefined?
          null
          :
          <TabPanel key={'TabP1'} pl={{xs:'3',sm:'3',lg:'1'}}>
          <SuggestionPannel wrapperRef={wrapperRef1} KEY={KEYY}  data={props.Data[0]}></SuggestionPannel>
          </TabPanel>
        }
        {props.Data[1]==undefined?
          null
          :
          <TabPanel key={'TabP2'} pl={{xs:'3',sm:'3',lg:'1'}}>
          <SuggestionPannel wrapperRef={wrapperRef2} KEY={KEYY} data={props.Data[1]}></SuggestionPannel>
          </TabPanel>
        }
        {props.Data[2]==undefined?
          null
          :
          <TabPanel key={'TabP3'} pl={{xs:'3',sm:'3',lg:'1'}}>
          <SuggestionPannel wrapperRef={wrapperRef3} KEY={KEYY}  data={props.Data[2]}></SuggestionPannel>
          </TabPanel>
        }
        {props.Data[3]==undefined?
          null
          :
          <TabPanel key={'TabP4'} pl={{xs:'3',sm:'3',lg:'1'}}>
          <SuggestionPannel wrapperRef={wrapperRef4} KEY={KEYY}  data={props.Data[3]}></SuggestionPannel>
          </TabPanel>
        }
        {props.Data[4]==undefined?
          null
          :
          <TabPanel key={'TabP5'} pl={{xs:'3',sm:'3',lg:'1'}}>
          <SuggestionPannel  wrapperRef={wrapperRef5} KEY={KEYY}  data={props.Data[4]}></SuggestionPannel>
          </TabPanel>
        }
         
        </TabPanels>
        </Tabs>



        </Card>
    </Center>
  );
}};
export default GameSuggestion;
