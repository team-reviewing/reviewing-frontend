import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { editorModule, IQuillEditorType, IRegisterType } from './ReviewRegisterType';
import ReactQuill from 'react-quill';
import Loading from '../Loading';

const QuillEditor = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');

    return ({
      forwardedRef,
      value,
      onChange,
      onBlur,
      modules,
      formats,
      placeholder,
      theme,
    }: IQuillEditorType<ReactQuill>) => (
      <RQ
        ref={forwardedRef}
        onChange={onChange}
        value={value}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        theme={theme}
        onBlur={onBlur}
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

function ReviewEditor({ setError, setValue, watch, trigger, editorRef }: IRegisterType) {
  const modules = useMemo(() => editorModule, []);

  const editorContentChange = (content: string) => {
    if (editorRef.current) {
      const getLength = editorRef.current.unprivilegedEditor?.getText().length;

      if (getLength && getLength - 1 <= EDITORMAX) {
        if (content === '<p><br></p>') {
          setValue('content', '');
        } else {
          setValue('content', content);
        }
      }
    }
    trigger('content');
  };

  const editorBlurHandler = (e: ReactQuill.Range) => {
    if (!e?.index) {
      setError('content', { type: 'required', message: '필수 사항입니다.' });
    }
  };

  const editorContentLength = (content: number) => {
    return content > EDITORMAX ? EDITORMAX : content;
  };

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
        onBlur={editorBlurHandler}
      />
      <p className="flex justify-end w-full pr-3">
        {editorRef.current && editorRef.current.unprivilegedEditor
          ? editorContentLength(editorRef.current.unprivilegedEditor.getText().length - 1)
          : 0}
        / {EDITORMAX} 자
      </p>
    </div>
  );
}

export default ReviewEditor;
