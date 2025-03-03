export default function Home() {
  return (
    <div className="flex justify-center items-center w-full mt-8">
      <div className="text-gray-600 text-center max-w-3xl">
        <p className="text-left text-gray-600 text-l">
          이 페이지는 내가 타입스크립트를 공부하며 기록하는 용도로 '우아한
          타입스크립트 with 리액트'와&nbsp;
          <a
            href="https://www.typescriptlang.org/ko/docs/"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            타입스크립트 공식문서
          </a>
          를 참고하여 작성했습니다.
        </p>
      </div>
    </div>
  );
}
