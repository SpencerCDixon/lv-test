import Logo from '../components/Logo';
import MainLayout from '../components/MainLayout';
import withRedux from '~/containers/withRedux';
import Step from '~/components/Step';
import { Flex, Box } from 'reflexbox';

const Assessment = () => (
  <MainLayout title="Learning Profile Assessment">
    <div style={{position: 'absolute', top: 20, left: 20}}>
      <Logo black />
    </div>
    <Flex mt={6} mx={6} justify="space-around" wrap>
      <Box my={2}>
        <Step active title="Create Password" num="1" />
      </Box>
      <Box my={2}>
        <Step title="Take Assessment" num="2" />
      </Box>
      <Box my={2}>
        <Step title="External Tests" num="3" />
      </Box>
      <Box my={2}>
        <Step title="Review Results" num="4" />
      </Box>
    </Flex>
  </MainLayout>
)

export default withRedux(Assessment);
