import dynamic from 'next/dynamic';
import Loading from '../Loading';
const QuillEditor = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <Loading />,
});
const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    // ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
};
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

function ReviewEditor() {
  return (
    <QuillEditor
      placeholder="리뷰 받고싶은 내용을 입력해주세요. 최대 500글자까지 작성 가능합니다."
      modules={modules}
      formats={formats}
      theme="snow"
    />
  );
}

export default ReviewEditor;
