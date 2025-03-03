import React from "react";

export default function Chapter01() {
  return (
    <div className="flex justify-center items-center w-full mt-10">
      <div className="text-gray-600 text-center max-w-5xl bg-white p-12 rounded-xl">
        <h1 className=" text-xl font-bold">01장 들어가며</h1>
        <div className="mt-10 text-left text-lg">
          <p>자바스크립트의 한계와 타입스크립트의 등장 배경</p>
          <hr className="mt-3"></hr>
          <div className="mt-3">
            <p>먼저 타입스크립트의 등장 배경을 알아보자.</p>
            <p className="mt-3">
              JavaScript는 1995년에 웹 페이지에 간단한 상호작용을 추가하기 위한
              언어로 시작되었습니다. 하지만 웹이 발전하면서 복잡한
              애플리케이션이 등장했고, JavaScript로 큰 규모의 애플리케이션을
              관리하는 데 여러 문제점이 나타났다:
            </p>
            <ul className="list-disc mt-3 ml-5">
              <li>동적 타입 언어로 인한 런타임 오류 발생 가능성</li>
              <li>큰 규모의 코드베이스 관리의 어려움</li>
              <li>IDE의 지원 부족</li>
            </ul>
            <p className="mt-3">
              이러한 문제점을 해결하기 위해 Microsoft에서 개발한 TypeScript는
              정적 타입 언어로, JavaScript의 상위 집합으로 설계되었습니다. 이는
              TypeScript가 JavaScript의 모든 기능을 포함하면서도 정적 타입을
              지원한다는 뜻입니다.
            </p>
            <p className="mt-3">
              TypeScript는 JavaScript의 상위 집합이기 때문에 JavaScript 코드를
              TypeScript 코드로 쉽게 변환할 수 있습니다. TypeScript는 정적 타입
              언어이기 때문에 코드를 실행하기 전에 타입을 검사하고 오류를 발견할
              수 있습니다. 이는 런타임 오류를 줄이고 코드의 안정성을 높이는 데
              도움이 됩니다.
            </p>
            <p className="mt-3">
              TypeScript는 JavaScript의 모든 기능을 포함하면서도 정적 타입을
              지원한다. 이는 TypeScript가 JavaScript 코드를 TypeScript 코드로
              쉽게 변환할 수 있다는 뜻이다. TypeScript는 정적 타입 언어이기
              때문에 코드를 실행하기 전에 타입을 검사하고 오류를 발견할 수 있다.
              이는 런타임 오류를 줄이고 코드의 안정성을 높이는 데 도움이 된다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
