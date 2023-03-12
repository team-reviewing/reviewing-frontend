import InformationForm from './InformationForm';
import { UserPageProps } from './informationType';

const InformationTemplate = ({ data }: UserPageProps) => {
  return (
    <div className="h-full w-full max-w-md">
      <h2 className="text-center text-3xl">계정 정보</h2>
      <InformationForm data={data} />
    </div>
  );
};

export default InformationTemplate;
