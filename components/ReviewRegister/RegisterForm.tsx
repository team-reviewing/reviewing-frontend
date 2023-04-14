import ReviewEditor from './ReviewEditor';
import { useForm } from 'react-hook-form';
import ErrorMent from './ErrorMent';
import { ILinkUserIdType, IReviewRegisterType } from './ReviewRegisterType';
import { reviewModify, reviewRegister } from '../../pages/api/reviewRegister';
import { useEffect, useRef, useState } from 'react';
import Loading from '../Commons/Loading';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import ReactQuill from 'react-quill';
import useRedirectInduce from '../../useHooks/useRedirectInduce';

function RegisterForm({ reviewerId, reviewerName, reviewId, title, content, prUrl }: ILinkUserIdType) {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<IReviewRegisterType>({
    mode: 'onTouched',
    defaultValues: {
      title: title || '',
      content: content || '',
      prUrl: prUrl || '',
    },
  });

  const [loading, setLoading] = useState(false);
  const editorRef = useRef<ReactQuill>(null);
  const router = useRouter();

  useRedirectInduce();

  useEffect(() => {
    register('content', {
      required: '필수 사항입니다.',
    });
  }, []);

  const onSubmitHandler = async ({ title, content, prUrl }: IReviewRegisterType) => {
    try {
      setLoading((prev) => !prev);
      await reviewRegister({ reviewerId, title, content, prUrl }).then(() => {
        setLoading(false);
        toast.success('리뷰 신청이 완료되었습니다.');
        router.push('/');
      });
    } catch (err) {
      setLoading(false);
      toast.error('리뷰 신청이 진행되지 않았습니다. 다시 진행 부탁드립니다.');
    }
  };
  const onModifyHandler = async ({ content }: Pick<IReviewRegisterType, 'content'>) => {
    try {
      if (reviewId) {
        setLoading((prev) => !prev);
        await reviewModify({ reviewId, content, reviewerId }).then(() => {
          setLoading(false);
          toast.success('리뷰 수정이 완료되었습니다.');
          router.push('/');
        });
      }
    } catch (err) {
      setLoading(false);
      toast.error('리뷰 수정이 진행되지 않았습니다. 다시 진행 부탁드립니다.');
    }
  };

  return (
    <>
      {loading && <Loading />}
      <form className="flex flex-col gap-6 p-3" onSubmit={handleSubmit(reviewId ? onModifyHandler : onSubmitHandler)}>
        <div>
          <p className="text-lg text-neutral400">리뷰어 : {reviewerName}</p>
        </div>
        <div>
          <div>
            <label htmlFor="title" className="text-lg">
              제목
            </label>
          </div>
          <div>
            <input
              id="title"
              type="text"
              {...register('title', {
                required: '필수 사항입니다.',
                maxLength: {
                  value: 50,
                  message: '최대 50자 입니다.',
                },
              })}
              placeholder="제목을 입력해주세요. 최대 50자입니다."
              maxLength={50}
              className="w-full p-2 border-2 border-solid outline-none rounded-radius-m"
              readOnly={reviewId ? true : false}
            />
            {errors.title && <ErrorMent>{errors.title.message}</ErrorMent>}
          </div>
        </div>
        <div>
          <div>
            <p className="text-lg">리뷰요청 상세내용</p>
          </div>
          <div>
            <ReviewEditor
              setValue={setValue}
              setError={setError}
              trigger={trigger}
              editorRef={editorRef}
              getValue={getValues}
            />
            {errors.content && <ErrorMent>{errors.content.message}</ErrorMent>}
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="pullRequestEmail" className="text-lg">
              Github PULL REQUEST URL
            </label>
          </div>
          <div>
            <input
              {...register('prUrl', {
                required: '필수 사항입니다.',
                pattern: {
                  value: /^(https:\/\/)?github.com\/.+\/.+\/pull\/[0-9]+$/,
                  message: 'PR 규칙에 어긋나는 형식입니다.',
                },
              })}
              id="pullRequestEmail"
              type="text"
              placeholder="Pull Request URL을 입력해주세요."
              className="w-full p-2 border-2 border-solid outline-none rounded-radius-m"
              readOnly={reviewId ? true : false}
            />
            {errors.prUrl && <ErrorMent>{errors.prUrl.message}</ErrorMent>}
          </div>
        </div>
        <div className="flex justify-end">
          <button className="flex items-center justify-center w-40 h-10 bg-c-black text-c-white rounded-radius-m">
            요청
          </button>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
