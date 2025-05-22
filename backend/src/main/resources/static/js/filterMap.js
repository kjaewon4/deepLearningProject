const FILTER_MAP = {
    emojiCatFace: {
         src: "https://raw.githubusercontent.com/kjaewon4/deepLearningProject/b3ec93b0b62eca83ad4d166ee708583871376199/Filter/catStyleFilter.png",
         landmarkIndex: 27, // 미간
         offsetX: 0,
         offsetY: 0,
         width: 250,
         height: 250
    },
    emojiDogNose: {
      src: "https://raw.githubusercontent.com/kjaewon4/deepLearningProject/b3ec93b0b62eca83ad4d166ee708583871376199/Filter/dogNose.png",
      landmarkIndex: 33,
      offsetX: 0,
      offsetY: 0,
      width: 200,
      height: 200
    },
    emoji1: {
        src: "",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji2: {
        src: "https://raw.githubusercontent.com/che1206/deeplearning/2b275373bb7dbcf1ea9be9a8f7e8771011f9a857/deep/emo/2.png",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji3: {
        src: "https://raw.githubusercontent.com/che1206/deeplearning/2b275373bb7dbcf1ea9be9a8f7e8771011f9a857/deep/emo/3.png",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji4: {
        src: "https://raw.githubusercontent.com/che1206/deeplearning/2b275373bb7dbcf1ea9be9a8f7e8771011f9a857/deep/emo/4.png",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji5: {
        src: "https://raw.githubusercontent.com/che1206/deeplearning/2b275373bb7dbcf1ea9be9a8f7e8771011f9a857/deep/emo/5.png",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji6: {
        src: "https://raw.githubusercontent.com/che1206/deeplearning/2b275373bb7dbcf1ea9be9a8f7e8771011f9a857/deep/emo/6.png",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji7: {
        src: "https://raw.githubusercontent.com/che1206/deeplearning/2b275373bb7dbcf1ea9be9a8f7e8771011f9a857/deep/emo/7.png",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji8: {
        src: "https://raw.githubusercontent.com/che1206/deeplearning/2b275373bb7dbcf1ea9be9a8f7e8771011f9a857/deep/emo/8.png",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji9: {
        src: "https://raw.githubusercontent.com/che1206/deeplearning/2b275373bb7dbcf1ea9be9a8f7e8771011f9a857/deep/emo/9.png",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji10: {
        src: "https://raw.githubusercontent.com/che1206/deeplearning/2b275373bb7dbcf1ea9be9a8f7e8771011f9a857/deep/emo/10.png",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji11: {
        src: "https://raw.githubusercontent.com/che1206/deeplearning/2b275373bb7dbcf1ea9be9a8f7e8771011f9a857/deep/emo/11.png",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji12: {
        src: "https://raw.githubusercontent.com/che1206/deeplearning/2b275373bb7dbcf1ea9be9a8f7e8771011f9a857/deep/emo/12.png",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji13: {
        src: "",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji14: {
        src: "",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji15: {
        src: "https://raw.githubusercontent.com/che1206/deeplearning/2b275373bb7dbcf1ea9be9a8f7e8771011f9a857/deep/emo/15.png",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji16: {
        src: "https://raw.githubusercontent.com/che1206/deeplearning/2b275373bb7dbcf1ea9be9a8f7e8771011f9a857/deep/emo/16.png",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji17: {
        src: "https://raw.githubusercontent.com/che1206/deeplearning/2b275373bb7dbcf1ea9be9a8f7e8771011f9a857/deep/emo/17.png",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji18: {
        src: "https://raw.githubusercontent.com/che1206/deeplearning/2b275373bb7dbcf1ea9be9a8f7e8771011f9a857/deep/emo/18.png",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji19: {
        src: "https://raw.githubusercontent.com/che1206/deeplearning/2b275373bb7dbcf1ea9be9a8f7e8771011f9a857/deep/emo/19.png",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    },
    emoji20: {
        src: "https://raw.githubusercontent.com/che1206/deeplearning/2b275373bb7dbcf1ea9be9a8f7e8771011f9a857/deep/emo/20.png",
        landmarkIndex: 10,
        offsetX: -25,
        offsetY: -80,
        width: 50,
        height: 50
    }
};
