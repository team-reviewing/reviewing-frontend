import ReviewEditor from './ReviewEditor';

function RegisterForm() {
  return (
    <form className="flex flex-col p-3 gap-6">
      <div>
        <p className="text-slate-400 text-lg">리뷰어 : KuKu</p>
      </div>
      <div>
        <div className="">
          <label htmlFor="title" className="text-lg">
            제목
          </label>
        </div>
        <div>
          <input
            id="title"
            type="text"
            placeholder="제목을 입력해주세요."
            className="p-2 w-full border-solid border-2 rounded-md outline-none"
          />
        </div>
      </div>
      <div>
        <div>
          <p className="text-lg">리뷰요청 상세내용</p>
        </div>
        <div>
          <ReviewEditor />
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
            id="pullRequestEmail"
            type="email"
            placeholder="Pull Request URL을 입력해주세요."
            className="p-2 w-full border-solid border-2 rounded-md outline-none"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button className="w-40 flex justify-center items-center bg-black text-white h-10 rounded-md">요청</button>
      </div>
    </form>
  );
}

export default RegisterForm;
