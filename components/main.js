//The component is using the Head component from Next.js to set the head of the HTML document, and adding a title to the page.
import Head from 'next/head'
// The component also uses the Box component from the Chakra UI library to create a container for the main content.
import { Box } from '@chakra-ui/react'

const Main = ({children, router}) => {
    return (
        //the Box component is being used to create a container for the main content of the page.
        <Box as="main" pb={8}>
        {/*The as prop is set to "main", which sets the semantic HTML tag for the component to <main>. The pb prop is set to 8, which sets the bottom padding of the component to 8.*/}
            <Head>
                {/*The component sets the viewport to width=device-width, initial-scale=1 and sets the title to Daikie Ishinuki-Moncion - Homepage.*/}
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>Daikie Ishinuki-Moncion - Homepage</title>
            </Head>

            <Container maxW="container.md" pt={14}>
                {/*The Container component is then used to wrap the content passed in the children prop.*/}
                {children}
            </Container>
        </Box>
    )
}

export default Main