import dynamic from 'next/dynamic';
import { useEffect, useMemo } from 'react';
import { editorModule, IQuillEditorType, IRegisterType } from './ReviewRegisterType';
import ReactQuill from 'react-quill';
import Loading from '../Loading';

const QuillEditor = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');

    return ({ forwardedRef, value, onChange, modules, formats, placeholder, theme }: IQuillEditorType<ReactQuill>) => (
      <RQ
        ref={forwardedRef}
        onChange={onChange}
        value={value}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        theme={theme}
      />
    );
  },
  {
    ssr: false,
    loading: () => <Loading />,
  },
);

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
];

const EDITORMAX = 500;

function ReviewEditor({ register, setValue, watch, trigger, editorRef }: IRegisterType) {
  const modules = useMemo(() => editorModule, []);

  const editorContentChange = (content: string) => {
    if (editorRef.current) {
      const getLength = editorRef.current.unprivilegedEditor?.getText().length;

      if (getLength && getLength - 1 <= EDITORMAX) {
        setValue('content', content);
      }
    }
    trigger('content');
  };

  const editorContentLength = (content: number) => {
    return content > EDITORMAX ? EDITORMAX : content;
  };

  useEffect(() => {
    register('content', {
      required: '필수 사항입니다.',
    });
  }, [register]);

  return (
    <div>
      <QuillEditor
        forwardedRef={editorRef}
        value={watch('content')}
        onChange={(e) => editorContentChange(e)}
        placeholder="리뷰 받고싶은 내용을 입력해주세요. 최대 500글자까지 작성 가능합니다."
        modules={modules}
        formats={formats}
        theme="snow"
      />
      <p className="flex justify-end w-full pr-3">
        {editorRef.current && editorRef.current.unprivilegedEditor
          ? editorContentLength(editorRef.current.unprivilegedEditor?.getText().length - 1)
          : 0}
        / {EDITORMAX} 자
      </p>
    </div>
  );
}

export default ReviewEditor;
