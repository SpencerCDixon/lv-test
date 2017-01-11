import Logo from '../components/Logo';
import MainLayout from '../components/MainLayout';
import withRedux from '~/containers/withRedux';
import Steps from '~/components/Steps';
import { Flex, Box } from 'reflexbox';

const steps = [
  "Create Password",
  "Take Assessment",
  "External Tests",
  "Review Results",
];

const Assessment = () => (
  <MainLayout title="Learning Profile Assessment">
    <div style={{position: 'absolute', top: 20, left: 20}}>
      <Logo black />
    </div>
    <Flex mt={6} mx={6}>
      <Steps steps={steps} currentStep={1} />
    </Flex>
  </MainLayout>
)

export default withRedux(Assessment);
