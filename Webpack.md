# Webpack

웹팩이란 모듈 번들러이다. 작성한 모든 파일을 모듈화 해서 묶어 하나로 만들어준다. 이렇게 하면 모듈 각각의 파일마다 http요청을 하지 않아도 되어 효율적인 http 요청을 할 수 있다. 이때 수많은 JS 파일들이 묶이기 때문에 초기 로딩속도가 느려질 수 있다는 문제가 있다. 이를 해결하기 위해 청크, 캐시, 코드 스플릿 개념이 도입되었다.

### commonJS란 ?

사실 웹팩과 바벨을 사용해 모듈시스템을 쓰는것이 일반적이지만, 이전에는 JS를 사용하는 모든 환경에서 모듈화 해주는 CommonJS를 사용했다. 하지만 모듈화를 지원하지 않는 브라우저가 있다. 브라우져에 상관없이 모듈을 사용하기 위해 웹팩이 등장했다.
