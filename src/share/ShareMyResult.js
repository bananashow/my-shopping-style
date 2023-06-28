const shareMyResult = () => {
  const link = window.location.href;

  if (window.Kakao) {
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_TOKEN);
    }

    kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "테스트 결과 보러 가기",
        description: "나의 장BTI는?",
        imageUrl: "https://i.imgur.com/utTO3Fp.jpg",
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        imageHeight: 300,
        link: {
          mobileWebUrl: link,
          webUrl: link,
        },
      },
    });
  }
};

export default shareMyResult;
