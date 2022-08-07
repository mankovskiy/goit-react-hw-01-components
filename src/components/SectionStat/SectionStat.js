import { Title, SectionStat } from '../SectionStat/SectionStat.styled';
export function Section({ title, children }) {
  return (
    <SectionStat>
      {title && <Title>{title}</Title>}
      {children}
    </SectionStat>
  );
}
