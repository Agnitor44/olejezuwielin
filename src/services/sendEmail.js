import emailjs from '@emailjs/browser';

export const sendEmail = ( values, setSuccess, setError, setIsLoading, reset) => {
    setIsLoading(true)
    emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID , process.env.NEXT_PUBLIC_TEMPLATE_ID, values)
    .then((result) => {
        setError(null)
        setSuccess(true)
        setIsLoading(false)
        reset()

    }, (error) => {
        setError(error.text)
        setSuccess(false)
        setIsLoading(false)

    });

}