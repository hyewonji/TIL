# 테스팅이란?

소프트웨어를 테스트하는것

## 목적

- 제품이나 서비스의 품질을 확인할 수 있다.
- 소프트웨어의 버그를 찾는다.
- 즉, 제품(함수, 기능, ui, 성능, api 스펙 등)이 예상하는 대로 동작 하는지 확인하는지 검증

## 언제 테스트를 작성해야 하나?

- 테스트를 작성하지 않는다면, QA팀이 기능 하나하나씩 구현해 본 후, Publis한다.
    - 시간이 많이 소요되고, 비용이 많이 든다.
    - QA과정이 오래걸려 `Dev - QA - Publish` 과정에서 병목현상이 발생한다.
    - 개발 후에 버그가 발견되어 다시 수정해야하는 비용이 발생한다.
- 이러한 문제점 때문에 개발하면서 자동으로 테스트가 돌아가도록 한다. `dev & Automated QA - QA & Publish`

## 테스트를 작성의 장점

- 예상하는 요구사항에 맞는지 확인할 수 있다.
- 자신감을 얻을 수 있다.
- 기능이 정상 동작하는지 확인할 수 있다.
- 요구사항을 만족할 수 있다.
- 이슈에 대해 예측이 가능하다.
- 버그를 빠르게 발견할 수 있다.
- 자신감 있게 리팩토링 할 수 있다.
- 손쉬운유지 보수가 가능하다.
- 코드의 품질 향상이 된다.
- 코드간 의존성을 낮춰 독립적이고 재사용 가능한 코드를 작성할 수 있다.
- 좋은 문서화의 효과를 가질 수 있다.
- 개발 시간을 절약할 수 있다.

## 테스트 피라미드

- Unit Test : 단위 테스트
    - 독립적인 하나의 함수, 모듈, 클래스, 컴포넌트 등을 테스트 하는 것
    - ex) 바퀴 하나의 테스트
- Integration Test : 통합 테스트
    - 여러 단위를 통합했을때 상호작용을 테스트 하는 것
    - ex) 바퀴 4개를 연결해 엔진을 결합한 것을 테스트
- E2E(end-to-end) Test : UI 테스트, 사용자 테스트
    - 자동차 전체 테스트

- 비용 : Unit Test에서 E2E Test로 올라갈 수록 운영비용, 테스트 비용, 효율성 비용이 많이 든다.
- 속도 : Unit Test에서 E2E Test로 올라갈 수록 속도가 느리다.
- 작성 순서 :  Unit Test - Integration Test - Unit Test 순서로 작성한다.

# TDD란?

- Test-driven development : 테스트 주도 개발
- 개발 전 테스트 코드를 먼저 작성

## TDD 프로세스
1. 테스트
2. 코딩
3. 리팩토링
