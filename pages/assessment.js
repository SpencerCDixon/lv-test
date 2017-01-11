import { MainLayout, Container } from '~/layouts';
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
  <MainLayout title="Learning Profile Assessment" blackLogo>
    <Container style={{marginTop: 75}}>
      <Steps steps={steps} currentStep={1} />
    </Container>
  </MainLayout>
)

export default withRedux(Assessment);
