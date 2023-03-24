import dynamic from 'next/dynamic';
import Loading from '../Loading';
import cancel from '../../styles/images/cancel.svg';
import Image from 'next/image';
import ReviewSection from './ReviewSection';
import person from '../../styles/images/lena.jpg';
import ButtonWrapper from '../ButtonWrapper';

interface IProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuillEditor = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <Loading />,
});

function ReviewModal({ closeModal }: IProps) {
  const closeModalHandler = () => {
    closeModal((prev) => !prev);
  };

  return (
    <div className="fixed flex inset-0 z-5 flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[#0b131e5e]" onClick={closeModalHandler} />
      <div
        className="z-20 bg-white flex relative flex-col p-7 rounded-lg h-[50rem] min-w-[36rem] w-[36rem]
                  msm:w-full msm:min-w-0 msm:fixed msm:bottom-0 msm:rounded-b-none msm:animate-up-animation">
        <div className="w-full h-full flex flex-col">
          <div className="flex justify-between">
            <div>
              <h2 className="font-bold text-lg ">리뷰 신청 내용</h2>
            </div>
            <div className="flex">
              <Image
                src={cancel}
                alt="cancel"
                width="15"
                height="15"
                className="cursor-pointer"
                onClick={closeModalHandler}
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto flex flex-col h-full">
            <ReviewSection option="flex">
              <Image src={person} alt="registerImage" className="w-6 h-6 rounded-full" />
              <span className="ml-2">UserId</span>
            </ReviewSection>
            <ReviewSection>
              <h2 className="font-medium text-base">리뷰 제목</h2>
              <p>리뷰제목나오는곳리뷰 제목나오는 곳리뷰 제목 나오는 곳리뷰 제목 나오는 곳리뷰 제목목목목목목</p>
            </ReviewSection>
            <ReviewSection option="modal">
              <h2 className="font-medium text-base">리뷰 상세 내용</h2>
              <QuillEditor
                modules={{ toolbar: false }}
                theme="snow"
                readOnly
                value="<p><h1>리뷰 상세 내용 테스트야!</h1><br/>안녕!!!!!</p>"
              />
            </ReviewSection>
            <div className="mt-6 flex flex-col ">
              <h2 className="font-medium text-base">Pull Request URL</h2>
              <a
                className="inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-full"
                target="_blank"
                href="http://localhost:3000">
                <span className="inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                  https://github.com/codestates-seb/seb40_main_032/pull/417
                </span>
              </a>
            </div>
          </div>
          <div className="text-center flex justify-center gap-2">
            {/* 리뷰어 adn 리뷰이 입장에서의 버튼 */}
            <ButtonWrapper>리뷰 수정</ButtonWrapper>
            <ButtonWrapper>리뷰 취소</ButtonWrapper>

            <ButtonWrapper>리뷰 수락</ButtonWrapper>
            <ButtonWrapper>리뷰 거절</ButtonWrapper>
            <ButtonWrapper>리뷰 승인</ButtonWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
