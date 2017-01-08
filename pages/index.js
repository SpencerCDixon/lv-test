import MainLayout from '../components/MainLayout';
import Page from '../components/Page';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import HeroImage from '../components/HeroImage';
import Logo from '../components/Logo';
import SignUpFormContainer from '../components/SignUpFormContainer';
import withRedux from '../containers/withRedux';
import { Flex, Box } from 'reflexbox';

const HomePage = () => (
  <MainLayout title="FREE Learning Profile Assessment">
    <HeroImage />
    <div style={{height: '100vh', background: 'black'}}>
      <Page>
        <div style={{position: 'absolute', top: 20, left: 20}}>
          <Logo />
        </div>

        <Flex flexColumn align="center" justify="center" style={{height: '100%'}}>
          <Box my={1}>
            <Title>Transformative Learning Experiences </Title>
          </Box>

          <Box my={1}>
            <Title style={{fontSize: '1.5em'}}>Tailored To The Way You Learn</Title>
          </Box>

          <Box mt={2} mb={1}>
            <SubTitle>
              Discover Your Learning Profile
            </SubTitle>
            <SignUpFormContainer />
          </Box>
        </Flex>
      </Page>
    </div>
  </MainLayout>
);

export default withRedux(HomePage);
