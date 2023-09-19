import { SectionSection, SectionTitle } from '../components/FeedbackAlertMessage/SectionTitle.styled';


const Section = ({ children, title }) => {
  return (
    <SectionSection>
      <SectionTitle>{title}</SectionTitle>
        {children}
    </SectionSection>
  )
}
export default Section
    