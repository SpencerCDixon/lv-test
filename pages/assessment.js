import { MainLayout, Container } from '~/layouts';
import Input from '~/components/Input';
import withRedux from '~/containers/withRedux';
import Steps from '~/components/Steps';
import { Flex, Box } from 'reflexbox';

// Module
import assessment from '~/redux/modules/assessment';
const { PasswordReset } = assessment.components;

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
      <Flex flexColumn justify="center" align="center" mt={3}>
        <PasswordReset />
      </Flex>
    </Container>
  </MainLayout>
)

export default withRedux(Assessment);
