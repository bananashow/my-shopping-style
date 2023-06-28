const ShareToKatalk = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      // SDK 초기화
      kakao.init(process.env.REACT_APP_KAKAO_TOKEN);
    }

    kakao.Link.sendCustom({
      templateId: 89829,
      // objectType: "feed",
      // content: {
      //     title: "나의 장보기 스타일",
      //     description: "간단한 테스트로 나의 장보기 성향을 파악해 보세요!",
      //     imageUrl:       'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',

      //     // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
      //     link: {
      //         mobileWebUrl: "http://localhost:3000",
      //         webUrl: "http://localhost:3000",
      //     },
      // },
    });
  }
};

export default ShareToKatalk;
