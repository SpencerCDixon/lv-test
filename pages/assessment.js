import { MainLayout, Container } from '~/layouts';
import withRedux from '~/containers/withRedux';

// Module
import assessment from '~/redux/modules/assessment';
const { AssessmentWizard } = assessment.components;

const Assessment = () => (
  <MainLayout title="Learning Profile Assessment" blackLogo>
    <Container style={{marginTop: 75}}>
      <AssessmentWizard />
    </Container>
  </MainLayout>
)

export default withRedux(Assessment);
