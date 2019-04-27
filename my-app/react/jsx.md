# JSX

## JSX란?
- JavaScript XML 의 약자이다.
- JavaScript 에서 마크업코드를 작성할 수 있도록 기능을 제공한다.
- 코드는 HTML처럼 보이지만 JS의 문법을 확장한 것이며, 정식 JS는 아니기에 일반 JS코드로 컴파일하여 사용해야한다.

## JSX의 장점
- 가독성이 좋다.
- 오류를 감지한다.
- 거부감없이 쉽게 작성이 가능하다.

## JSX 문법
- 1. 반드시 닫는 태그를 사용해야한다.
````
  const img = <img src="./img.png" />;
````
- 2. 컴포넌트가 여러개라면 하나로 감싸야 된다.
````
<div>
  <div>컴포넌트1</div>
  <div>컴포넌트2</div>
</div>

* react v16 부터는 Fragment 혹은 <></> 사용이 가능하다.

<React.Fragment>
  <div>컴포넌트1</div>
  <div>컴포넌트2</div>
</React.Fragment>

<>
  <div>컴포넌트1</div>
  <div>컴포넌트2</div>
</>
````
- 3. JSX안에서 스크립트를 사용하려면 {} 로 감싸서 사용해야한다.
````
<button onClick={ () => {console.log('클릭')}} />
````
- 4. class는 className으로 사용
````
<div className="titleBox"></div>
````
- 5. 속성의 이름은 camel case로 사용
````
<button onClick={ () => {console.log('클릭')}} tabIndex="1" />
````
- 6. 주석
````
<div>
  {/* 여긴 주석 */}
</div>
````
