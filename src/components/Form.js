
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { Flex, Input, Text, Textarea, Button, VStack, FormControl, Heading, Divider } from '@chakra-ui/react';
import { sendEmail } from '@/services/sendEmail';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export default function Form({STRINGS}) {
    const { register, handleSubmit, watch, reset, formState: { errors, isSubmitting } } = useForm({reValidateMode: 'onSubmit'});
    const [ success, setSuccess ] = useState(false);
    const [ error, setError ] = useState(null);
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY); 
      }, [])

    const sendHandler = handleSubmit(async(values) => {
     sendEmail(values, setSuccess, setError, setIsLoading, reset)
   
    })

    const renderTitle = () => {
        return (
            <Flex flexDir={'column'}>
       <Heading pb={'10px'} w='100%' textAlign={'center'} as='h3' size={'lg'}>
               Skontaktuj się
            </Heading>
            <Divider/>
            </Flex>
     
        )
    }

    const renderInput = (name, label, placeholder, validation) => {
        return (
            <VStack py={3}  spacing={0}  align={'flex-start'}>
                <Text>{label}</Text>
                <Input
                placeholder={placeholder}
                {...register(name, validation)}
                />
                {errors[name] && <Text py={0} fontSize={'14px'} color={'red.500'}>{errors[name].message}</Text>}
            </VStack>
        )
    }

    const renderArea = (name, label, placeholder, validation) => {
        return (
            <VStack py={3}  spacing={0}  align={'flex-start'}>
                <Text>{label}</Text>
                <Textarea
                placeholder={placeholder}

                {...register(name, validation)}
                />
                {errors[name] && <Text fontSize={'14px'} color={'red.500'}>{errors[name].message}</Text>}
            </VStack>
        )
    }

    const renderResults = () => {
        if(success) {
            return (
                <Text ml={2} fontSize={'14px'} color={'green.500'}>
                Wiadomość została wysłana
            </Text>
            )
   
        }
        else if(error) {
            return (
            <Text ml={2} fontSize={'14px'} color={'red.500'}>
                {error}
            </Text>
            )
        }
        return null
    }
    const renderButton = () => {

return (
    <Flex alignItems={'center'}>
       <Button isLoading={isLoading} type='submit'> Wyślij </Button>
        {renderResults()}
    </Flex>
)
    }
    const renderForm = () => {
        return (
            <Flex w={['100%', null, null, null, '65%']}>
                <FormControl as='form' w={'100%'} onSubmit={sendHandler}>
                    {renderInput('title', 'Tytuł', 'Tytuł wiadomości', {required: {value: true, message: 'Pole nie może być puste'}} )}
                    {renderInput('email', 'Email', 'Jankowalski@gmail.com', {
                        required: {value: true, message: 'Pole nie może być puste'},
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Nieprawidłowy adres email'
                          }
                })}
                    {renderArea('content', 'Treść', 'Treść wiadomości', {
                        required: {value: true, message: 'Pole nie może być puste'}
                        
                        })}

                 {renderButton()}
                </FormControl>
            </Flex>
        )
    }

    const renderInfo = () => {
        return (
          
          <VStack  bg='gray.100' mx={'20px'} h='100%' p={'10px'} w={['100%', null, null, null, '35%']} borderRadius={'md'} alignItems="flex-start" alignSelf={'center'}>
                         <Flex
                        size="md"
                        height="48px"
                        variant="ghost"
                        justifyContent={'center'}
                        align={'center'}
                        color="gray.700">
                       <MdPhone color="#1970F1" size="20px" />
                       <Text ml={2} fontWeight={800}> +48 608 451 935</Text>
                      </Flex>
                      <Flex
                        size="md"
                        height="48px"
                        variant="ghost"
                        justifyContent={'center'}
                        align={'center'}
                        color="gray.700">
                            <MdEmail color="#1970F1" size="20px" />
                            <Text ml={2} fontWeight={800}>olejezuwielin@op.pl</Text>
                      </Flex>
                      <Flex
                        size="md"
                        height="48px"
                        color="gray.700"
                        justifyContent={'center'}
                        align={'center'}
                        variant="ghost">
                        <MdLocationOn color="#1970F1" size="20px" />

                        <Text ml={2} fontWeight={800}>Wschodzącego słońca 11F <br/> 05-540 Uwieliny</Text>
                      </Flex>
                    </VStack>
       
        )
    }
  return (
    <Flex boxShadow={'-3px 9px 24px 0px rgba(66, 68, 90, 1)'} my={'10vh'} borderRadius={'lg'} h={'100%'} p={'20px'} flexDir={'column'} bg='white' color='black' w={['xs', 'sm', 'md', 'lg', '4xl']}>
        {renderTitle()}
        <Flex h={'100%'} flexDir={['column', null, null, null, 'row']} align={'center'} justify={'center'} w={'100%'}>
        {renderForm()}
        <Divider orientation='vertical'/>
        {renderInfo()}
        </Flex>
    </Flex>
  )
}
