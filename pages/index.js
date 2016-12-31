import Head from 'next/head';
import css from 'next/css';
import Page from '../components/Page';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import HeroImage from '../components/HeroImage';
import Logo from '../components/Logo';
import SignUpForm from '../components/SignUpForm';
import { Flex, Box } from 'reflexbox';

export default () => (
  <div>
    <Head>
      <title>Learning Ventures | FREE Learning Profile Assessment</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="//fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
      <link href="//cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" rel="stylesheet" />
    </Head>

    <HeroImage />
    <div style={{height: '100vh', background: 'black'}}>
      <Page>
        <div style={{position: 'absolute', top: 20, left: 20}}>
          <Logo />
        </div>

        <Flex flexColumn align="center" justify="center" style={{height: '100%'}}>
          <Box my={1}>
            <Title>Transformative Learning Experiences</Title>
          </Box>
          <Box my={1}>
            <Title style={{fontSize: '1.5em'}}>Tailored To The Way You Learn</Title>
          </Box>
          <Box mt={2} mb={1}>
            <SubTitle>
              Discover Your Learning Profile
            </SubTitle>
            <SignUpForm />
          </Box>
        </Flex>
      </Page>
    </div>
  </div>
)
