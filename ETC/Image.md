# 이미지 확장자의 적절한 사용 ( SVG, PNG, JPEG, GIT )

이미지 혹은 아이콘을 삽입할 때 어떤 확장자를 사용할지 고민이 되어 확장자별 특징을 찾아보았다.

<br>

## 사전 지식

확장자별 특징을 살펴보기 전에 미리 알고 있어야 할 개념들에 대해서 설명한다.

1. Lossley(무손실 압축)와 Lossy(손실 압축)

- Lossless : 이미지를 압축해도 이미지의 Quaility는 손상 되지 않는 것.
- Lossy : 이미지를 압축하여 크기를 줄일때, 이미지의 Quaility가 손상되는 것. 만약 이미지를 손실 압축 포맷으로 변환하여 계속해서 저장하게 되면 이미지의 퀄리티는 점점 나빠진다.

2. Indexed color와 Direct color

- Indexed Color : Color Map이라는 곳에 제한된 수의 색상(즉 256가지의 색상)을 가진 palette로만 저장할 수 있는 속성.
- Direct Color : 수천가지의 컬러를 저장할 수 있는 속성.

3. Bitmap(비트맵)과 Vector Image(백터이미지)

- Bitmap Image : 서로 다른 점(픽셀)들의 조합으로 그려지는 이미지 표현 방식. 정교하고 화려한 표현이 가능하여, 주로 사진 이미지에 주로 사용된다. 하지만 비트맵 이미지를 크기를 늘리거나 줄일때 원본 이미지에 손상이 가기 때문에 이미지가 깨지는 문제점이 있다. 비트맵 이미지 방식 확장자로는 `.jpeg, .png, .gif`가 있다.
- Vector Image : 점과 점을 연결해 수학적 원리로 그림을 그려 표현하는 방식. 컴퓨터가 계산을 해서 이미지를 표현하기 때문에 이미지의 크기를 늘리고 줄여도 손상되지 않는다. 하지만, 사진과 같은 복잡한 그림을 표현할때는 컴퓨터가 해야하는 계산이 많아지기 때문에 컴퓨터에 엄청난 부담이 간다. 백터 이미지 방식 확장자로는 `.ai, .eps, .svg`가 있다.

<br>

## 확장자별 특징

**.GIF**

- Lossley(무손실 압축), Indexed color only, Bitmap Image
- 에니메이션이 가능하다.
- 투명한 것을 표현 할 수 있다.

**JPEG**

- Lossy(손실 압축), Direct color, Bitmap Image
- 수천가지의 Color Palette를 가지고 있서 사진, 그라데이션 이미지에 GIF이미지 보다 적합하고 로고나 라인 그리기에는 부족합니다.

**.PNG24**

- Lossley(무손실 압축), Direct color, Bitmap Image
- 무손실 압축이라는 장점이 있지만 JPEG보다 용량이 5배 이상을 차지하는 치명적인 단점이 있다.
- 투명 이미지를 표현할 수 있다.
- 파일사이즈 염두해 두지 않고, 퀄리티 좋은 이미지를 원할때 사용한다.

**.SVG**

- Lossless(무손실 압축), Vector Image
- SVG파일 사이즈는 작지만 컴퓨터가 계산을 해야하기 때문에 컴퓨터 속도가 느려질 수 있다.
- XML로 작성되므로 텍스트 편집기에서 열고 편집 할 수 있어, 크키 혹은 색상을 쉽게 변경할 수 있다.
