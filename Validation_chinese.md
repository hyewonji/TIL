# [사장님보드][추가기능]유효성검사 중국어 허용

## **간체, 번체, 중국어 특수문자를 포함하는 정규표현식 작성 한다.**

<br>

### **문자**

- 정규 표현식 : `\u4E00-\u9FFF\u3400-\u4DBF`
  - [한중일 통합한자], [한중일 통합한자 A] 포함
  - 중국어 간체, 번체의 거의 대부분이 포함됨
- 유니코드
  - [[한중일 통합 한자](https://ko.wikipedia.org/wiki/%ED%95%9C%EC%A4%91%EC%9D%BC_%ED%86%B5%ED%95%A9_%ED%95%9C%EC%9E%90)] : `\u4E00-\u9FFF`
  - [[한중일 통합 한자 확장 A](https://ko.wikipedia.org/wiki/%ED%95%9C%EC%A4%91%EC%9D%BC_%ED%86%B5%ED%95%A9_%ED%95%9C%EC%9E%90_%ED%99%95%EC%9E%A5_A)] : `\u3400-\u4DBF`
  - [~~한중일 통합 한자 확장 B - F] : `\u{20000}-\u{2FA1F}`~~
    - [B](https://ko.wikipedia.org/wiki/%ED%95%9C%EC%A4%91%EC%9D%BC_%ED%86%B5%ED%95%A9_%ED%95%9C%EC%9E%90_%ED%99%95%EC%9E%A5_B), [C](https://ko.wikipedia.org/wiki/%ED%95%9C%EC%A4%91%EC%9D%BC_%ED%86%B5%ED%95%A9_%ED%95%9C%EC%9E%90_%ED%99%95%EC%9E%A5_C), [D](https://ko.wikipedia.org/wiki/%ED%95%9C%EC%A4%91%EC%9D%BC_%ED%86%B5%ED%95%A9_%ED%95%9C%EC%9E%90_%ED%99%95%EC%9E%A5_D), [E](https://ko.wikipedia.org/wiki/%ED%95%9C%EC%A4%91%EC%9D%BC_%ED%86%B5%ED%95%A9_%ED%95%9C%EC%9E%90_%ED%99%95%EC%9E%A5_E), [F](https://ko.wikipedia.org/wiki/%ED%95%9C%EC%A4%91%EC%9D%BC_%ED%86%B5%ED%95%A9_%ED%95%9C%EC%9E%90_%ED%99%95%EC%9E%A5_F)
  - [~~한중일 통합 한자 확장 G - H] : `\u{30000}-\u{3134A}`~~
    - [G](https://ko.wikipedia.org/wiki/%ED%95%9C%EC%A4%91%EC%9D%BC_%ED%86%B5%ED%95%A9_%ED%95%9C%EC%9E%90_%ED%99%95%EC%9E%A5_G), [H](https://ko.wikipedia.org/wiki/%ED%95%9C%EC%A4%91%EC%9D%BC_%ED%86%B5%ED%95%A9_%ED%95%9C%EC%9E%90_%ED%99%95%EC%9E%A5_H)
- 한중일 통합 한자
  - [한중일 통합한자], [한중일 통합한자 확장 A]
    - 유니코드 문자 평면중, ‘기본 다국어 평면’에 포함됨
    - 중국어 간체, 번체의 거의 대부분이 포함됨
  - [한중일 통합한자 확장 B-H]
    - 유니코드 문자 평면중, ‘보조 한자 평면’ 혹은 그 외에 포함

> 참고 문서 : [유니코드와 한중일 통합 한자 - 민족문화 연구원](http://riksdb.korea.ac.kr/supercjk/imgClip/book_readme.pdf)

<br>

### **특수문자**

허용 특수문자 중, 중국어 키보드에서 비슷한 모양의 다른 유니코드를 가진 특수문자가 있다.<br>

- `｛ ｝ 【 】 （ ） ？ ， ； ｜ ～ ！ “ ” ‘ ’` 등

> 참고 사이트 : [문자 > 유니코드 변환](http://www.hipenpal.com/tool/characters-to-unicode-converter-in-korean.php)

<br>

### **한자 지원 폰트**

- [한중일 통합 한자 확장] B - H 범위의는 폰트가 지원하지 않아 깨지는 한자가 대부분이다.
- [TH-Tshyn](http://cheonhyeong.com/Simplified/download.html) : [한중일 통합 한자 확장] A - H 범위 모두 지원
    
> 참고 블로그 : [Tstory](https://k66google.tistory.com/680)