import { MainLayout, FullPage } from '~/layouts';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import HeroImage from '../components/HeroImage';
import SignUpFormContainer from '../components/SignUpFormContainer';
import withRedux from '../containers/withRedux';
import { Flex, Box } from 'reflexbox';

const HomePage = () => (
  <MainLayout title="FREE Learning Profile Assessment">
    <HeroImage />
    <div style={{background: 'black', height: '100vh'}}>
      <FullPage>
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
      </FullPage>
    </div>
  </MainLayout>
);

export default withRedux(HomePage);
